import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from "@utils/database";
import User from "@models/user";



const handler = NextAuth(/* {
    providers: [
        
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString();
    
            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();
    
                const userExists = await User.findOne({
                    email: profile.email
                });
    
                if(!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
    
                return true;
            } catch (error) {
                console.log(error);
            }
        }
    }
} */{providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
],
pages: {
    signIn: '/signIn'
},
callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
        try {
            
        await connectToDB();
        
        if(account.type === 'oauth'){
            return await signInWithOAuth({account, profile})
        }

        return true;
    } catch (error) {
        console.log(error);
    }
    },
    async jwt({ token, trigger, session }) {
        const user = await getUserByEmail({email: token.email})
        token.user = user;
        return token;
    },
    async session({ session, token }) {
        session.user = token.user;
        return session;
    }
}})

export { handler as GET, handler as POST };


async function signInWithOAuth({account, profile}) {
    const user = await User.findOne({email: profile.email});
    if(user) return true;

    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.image,
        provider: account.provider,
    })

    await newUser.save();

    return true;
}

async function getUserByEmail({email}) {
    const user = await User.findOne({email}).select('-password')
    if(!user) throw new Error('Email does not exist!');

    return {...user._doc, _id: user._id.toString()}
}
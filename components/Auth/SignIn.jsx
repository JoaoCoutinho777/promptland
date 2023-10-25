
import { signIn } from 'next-auth/react'

const SignIn = ({ callbackUrl }) => {
  return (
    <div>
        <h2>Sign In With NextAuth</h2>

        <div className='my-0 mx-0'>
            <button type='button' onClick={() => signIn('google', {callbackUrl})}>Continue with Google</button>
        </div>
    </div>
  )
}

export default SignIn
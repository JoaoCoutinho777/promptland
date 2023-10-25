import { Schema, model, models } from "mongoose";
import { ClientEncryption } from 'mongodb-client-encryption';

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    password: {
        type: String,
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        default: 'User',
    },
    provider: {
        type: String,
        default: 'credentials'
    }
}, {timestamps: true });

const User = models.User || model("User", UserSchema);

export default User;
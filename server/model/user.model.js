import express from "express";
import {Schema,model,mongoose} from "mongoose";
mongoose.set("strictQuery", false);
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    avatar: { type: String, default: "" },
});

const User = model("User", userSchema); 

export default User;

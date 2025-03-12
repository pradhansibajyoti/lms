import express from "express";
import  User  from "../model/user.model.js";
import upload from "../middleware/upload.middleware.js";
const registerUser = async (req, res) => {
    // res.send("Hello World");
    try{
        console.log(req.file);
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({ message: "All fields are required" });
    }
    else if(await User.findOne({email})){
        return res.status(400).json({ message: "Email already exists" });
    }
    else if(password.length<6){
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
     
          // Save user information along with the uploaded file (assuming it's a profile picture)
          const user = new User({
            name,
            email,
            password,
            avatar: req.file.path  // Store the file path in the database (or URL if using cloud storage)
        });
    const savedUser=await user.save();
    res.status(201).json({ message: "User registered successfully" ,user:savedUser});
    }
    catch(error){
        res.status(500).send(error.message);
    }

};
const loginUser = (req, res) => {
    res.send("Hello World");
};
export { registerUser, loginUser };
import express from "express";
import fs from 'fs/promises';
import  User  from "../model/user.model.js";
import upload from "../middleware/upload.middleware.js";
import cloudinary from 'cloudinary';
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

        if (req.file) {
            try {
              const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'lms', // Save files in a folder named lms
                width: 250,
                height: 250,
                gravity: 'faces', // This option tells cloudinary to center the image around detected faces (if any) after cropping or resizing the original image
                crop: 'fill',
              });
        
              // If success
              if (result) {
                // Set the public_id and secure_url in DB
                user.avatar = result.secure_url;
        
                // After successful upload remove the file from local storage
                fs.rm(`uploads/user_images/${req.file.filename}`);
              }
            } catch (error) {
              
            }
          }
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
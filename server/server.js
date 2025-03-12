import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/databaseConect.js";
import { v2 } from 'cloudinary';
dotenv.config();
v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
const port=process.env.PORT||5000;
app.listen(port, () => {
    console.log("Server is running on port", port);
    connectDB();
});

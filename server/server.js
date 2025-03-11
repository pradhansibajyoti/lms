import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/databaseConect.js";

const port=process.env.PORT||5000;
dotenv.config();
app.listen(port, () => {
    console.log("Server is running on port", port);
    connectDB();
});

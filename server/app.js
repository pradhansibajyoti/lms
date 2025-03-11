import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./router/user.router.js";
import bodyParser from "body-parser";



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

  
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use("/api/user", router);


app.get("/", (req, res) => {
    res.send("Hello World");
})
export default app;
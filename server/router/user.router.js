import express from "express";
import { registerUser, loginUser } from "../controller/user.controller.js";
import upload from "../middleware/upload.middleware.js";
const router = express.Router();
router.post("/register",upload.single("avatar") ,registerUser);
router.get("/data", (req, res) => {
    res.send("Hello World");
});
export default router;
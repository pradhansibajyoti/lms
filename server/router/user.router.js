import express from "express";
import { registerUser, loginUser } from "../controller/user.controller.js";
const router = express.Router();
router.post("/register", registerUser);
router.get("/data", (req, res) => {
    res.send("Hello World");
});
export default router;
import { Router } from "express";
import { registerUser } from "../controller/user.controlle.js";

export const userRouter = Router();

userRouter.route("/register").post(registerUser);

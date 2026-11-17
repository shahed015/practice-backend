import { Router } from "express";
import { registerUser } from "../controller/user.controlle.js";
import { upload } from "../middleware/multer.middleware.js";

export const userRouter = Router();

userRouter.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser,
);

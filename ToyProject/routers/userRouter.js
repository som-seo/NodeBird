import express from "express";
import {see, edit, remove} from "../controllers/usersController.js";

const userRouter=express.Router();

userRouter.get("/:id", see);
userRouter.get("/edit", edit);
userRouter.get("/delete", remove);

export default userRouter;
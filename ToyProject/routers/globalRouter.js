import express from "express";
import { home, search } from "../controllers/boardController.js";
import { join, login } from "../controllers/usersController.js";

const globalRouter=express.Router();



globalRouter.get("/", home);
globalRouter.get("/search", search);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
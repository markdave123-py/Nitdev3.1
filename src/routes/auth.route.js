import { signup } from "../controllers/auth/signup.js";
import { signin } from "../controllers/auth/signin.js";
import { Router } from "express";

export const authRouter = Router();

authRouter.post('/signup', signup)

authRouter.post('/signin', signin)
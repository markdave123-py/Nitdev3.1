import { signup } from "../controllers/auth/signup.js";
import { Router } from "express";

export const authRouter = Router();

authRouter.post('/signup', signup)
import { config } from "../config/env.js";
import jwt from 'jsonwebtoken';


export const generateToken = (payload) => {

    const token = jwt.sign(payload, config.secretKey, { expiresIn: '1d' });

    return token;

}
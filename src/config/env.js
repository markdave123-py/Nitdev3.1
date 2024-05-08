import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT

export const config = {
    port: process.env.PORT,
    secretKey: process.env.SECRET_KEY,
}
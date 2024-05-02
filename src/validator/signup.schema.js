import joi from 'joi';

export const signupSchema = joi.object({
    name: joi.string().min(4).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    confirm_password: joi.string().valid(joi.ref('password')).required()
})
import { signinSchema } from "../../validator/signin.schema.js";
import { User } from "../../models/user.js";
import { comparePassword } from "../../utils/bcrypt.js";

export const signin = async (req, res) => {

    const { error, value } = signinSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    const { email, password } = value;

    const user = User.find((user) => user.email === email);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await comparePassword(password, user.hashedPassword);

    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    // login user and generate access token (jwt)
    // sanitedUser = sanitizeUser(user)

    return res.status(200).json({
        message: 'User signed in successfully',
        user
    })
}
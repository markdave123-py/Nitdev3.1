import { signupSchema } from "../../validator/signup.schema.js";
import { User } from "../../models/user.js"
import { writeData } from "../../utils/fs.js";


export const signup = (req, res) => {

    const {error, value} = signupSchema.validate(req.body);

    if (error) {
        return res.status(400).json({error: error.message});
    }

    const {name, email, password} = value;

    const userExists = User.find((user) => user.email === email);

    if(userExists){
        return res.status(409).json({error: 'User already exists'});
    }

    const newUser = {
        id: User.length + 1,
        name,
        email,
        password
    }

    User.push(newUser);
    let newUsers = User;

    // fs.writeFileSync('./models/user.js', `export let User = ${newUsers}`);
    writeData(newUsers, 'src/models/user.js');

    return res.status(201).json({
        message: 'User created successfully',
        user: newUser
    })


}

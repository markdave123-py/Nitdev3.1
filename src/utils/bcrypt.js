import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hashedPassword) => {

    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch
}

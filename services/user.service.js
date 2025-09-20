import userModel from '../models/user.model.js';



export const createUser = async ({
    email, password, username, dateOfBirth
}) => {

    if (!email || !password || !username || !dateOfBirth) {
        throw new Error('Email, password, username and date of birth are required');
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        email,
        password: hashedPassword,
        username,
        dateOfBirth
    });

    return user;

}

export const getAllUsers = async ({ userId }) => {
    const users = await userModel.find({
        _id: { $ne: userId }
    });
    return users;
}
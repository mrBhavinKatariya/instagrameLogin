import { User } from "../../models/login.models.js";
import { ApiError } from "../../utils/Apierror.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandlers.js";


const loginUser = asyncHandler(async(req, res) => {
    const { username, email, password } = req.body;

    if(!(email || username)){
        throw new ApiError(400, "username or email is required");
    }
    if(!password){
        throw new ApiError(400, "Password is required");
    }

    const user = await User.create({
        username,
        email,
        password
    });

    const createUser = await User.findById(user._id).select("-password");

    if(!createUser){
        throw new ApiError(500, "something went wrong login User");
    }

    return res
    .status(201)
    .json(new ApiResponse(201, createUser, "User login successfully"));
})

const fLoginUser = asyncHandler(async(req, res) => {
    const { username, email, password } = req.body;

    if(!(email || username)){
        throw new ApiError(400, "username or email is required");
    }
    if(!password){
        throw new ApiError(400, "Password is required");
    }

    const user = await User.create({
        username,
        email,
        password
    });

    const createUser = await User.findById(user._id).select("-password");

    if(!createUser){
        throw new ApiError(500, "something went wrong login User");
    }

    return res
    .status(201)
    .json(new ApiResponse(201, createUser, "User login successfully"));
})

export { loginUser, fLoginUser }


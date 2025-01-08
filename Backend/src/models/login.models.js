import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
{
    username:{
        type: String,
        lowercase: true,
        trim: true,
        required: false,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true, 
        required: false,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
      },
},{timestamps: true}

)

export const User = mongoose.model("User", userSchema);
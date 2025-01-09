import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from "multer";


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  
}))
const upload = multer();
app.use(upload.none()); // To handle form-data without files

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use((req, res, next) => {
    console.log("Request URL:", req.url);
    console.log("Request Method:", req.method);
    console.log("Request Headers:", req.headers);
    console.log("Request Body:", req.body);
    next();
});



import userRouter from './routes/user.routes.js';
app.use('https://677ee99c9e2c801f9a6885b4--spontaneous-sprinkles-a3abd1.netlify.app/', userRouter)
// app.use('/api/v1/user', userRouter)

export {app}
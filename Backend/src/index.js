import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './DB/index.js';
import { app } from './app.js';


dotenv.config({
    path:"./.env"
})
connectDB()
.then((result) => {
    app.on('error', (error) => {
        console.log("Failed to connect to the database");
        throw error;
    })
    app.listen(process.env.PORT || 8001, () => {
        console.log(`connected mongodb ${process.env.PORT}`); 
    });
})
.catch((error) => {
    throw error
})
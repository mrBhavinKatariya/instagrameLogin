import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
// import express from 'express';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
        // console.log(`\n MongoDB Connected !! : DBHOST:     ${process.env.MONGODB_URI}`);

        
    } catch (error) {
        console.log("MongoDB connection Failed", error );
        process.exit(1);
        
    }
}

export default connectDB;
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Current-Type"],
}));

app.options('*', cors()); // प्रीफ़्लाइट रिक्वेस्ट को हैंडल करें

// बॉडी पार्सर
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// `multipart/form-data` के लिए multer का उपयोग करें
const upload = multer();
app.use(upload.none());

app.use(express.static("public"));
app.use(cookieParser());

// डिबग मिडलवेयर
app.use((req, res, next) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  console.log("Request Headers:", req.headers);
  console.log("Request Body:", req.body);
  next();
});

// रूट्स
import userRouter from './routes/user.routes.js';
app.use('/api/v1/user', userRouter);

export { app };

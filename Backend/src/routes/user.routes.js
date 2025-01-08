import { Router } from "express";
import { fLoginUser, loginUser } from "../controllers/user/user.controller.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Login Route
router.route("/login").post(loginUser);
router.route("/facebooklogin").post(fLoginUser);


export default router;

import express from "express";
import {
  registerUser,
  loginuser,
  logoutuser,
  getuserProfile,
} from "../Controllers/authController.js";

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/user/create", registerUser);
router.post("/user/login", loginuser);
router.post("/user/logout", logoutuser);
router.post("/user/me", protect, getuserProfile);

export default router;

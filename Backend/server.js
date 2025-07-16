import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DBconnect from "./configs/DB.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN, credentials: true }));

DBconnect();

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "App is working.. test done" });
});

app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
  console.log("App is listening on Port : : ", PORT);
});

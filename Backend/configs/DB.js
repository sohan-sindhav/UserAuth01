import mongoose from "mongoose";

const DBconnect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("MongoDB connected !!");
    });
  } catch (error) {
    console.error("MongoDB connection error :", error);
  }
};

export default DBconnect;

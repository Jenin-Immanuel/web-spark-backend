import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
let isConnected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URI) return console.log("MONGO_URL not found");

  if (isConnected) return console.log("Already connected to mongoDB");
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to MongoDB");
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };

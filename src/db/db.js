import mongoose from "mongoose";
import { DB_NANE } from "../contstant.js";

const connectDB = async function () {
  try {
    const connectionIns = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NANE}`,
    );
    console.log(
      `MongoDB Connected Successfully!. ${connectionIns.connection.host}`,
    );
  } catch (err) {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);
  }
};
export default connectDB;

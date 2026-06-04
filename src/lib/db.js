import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async() => {
   await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB is connected!"))
    .catch((error) => console.log(error));
};

export default connectDB;

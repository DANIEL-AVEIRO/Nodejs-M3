import express from "express";
import "dotenv/config";
import connectDB from "./lib/db.js";

const app = express();
const port = process.env.PORT;

// app.use("/", (req, res) => {
//   res.send("Hello World");
//   res.json("Hello World");
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});
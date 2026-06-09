import express from "express";
import "dotenv/config";
import connectDB from "./lib/db.js";
import postRoutes from "./routes/postRoute.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());
// app.use("/", (req, res) => {
//   res.send("Hello World");
//   res.json("Hello World");
// });

app.use("/api/post", postRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});

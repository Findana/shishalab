import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

//http://localhost:5000/
app.use("/", user);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connected and server running on port: ", PORT);
    });
  })
  .catch((error) => console.log(error));

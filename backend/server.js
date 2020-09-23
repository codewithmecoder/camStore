import express from "express";
import productRoute from "./routes/productRoute";
import dotenv from "dotenv";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./routes/userRoute";
import bodyParser from "body-parser";
const app = express();

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err.reason));

dotenv.config();
app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(4000, () => console.log("App is running on http://localhost:4000"));

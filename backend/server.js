import express from "express";
import productRoute from "./routes/productRoute";
const app = express();

app.use("/products", productRoute);

app.listen(5000, () => console.log("App is running on http://localhost:5000"));

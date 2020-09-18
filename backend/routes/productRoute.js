import express from "express";
import data from "../data";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(data.products);
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);

  if (product) res.send(product);
  else res.status(404).send({ msg: "Product Not Found" });
});
export default router;

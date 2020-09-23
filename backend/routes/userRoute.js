import express from "express";
import User from "../models/userModel";
import { getTokken, getToken } from "../util";
const router = express.Router();

// get admin
router.get("/createadmin", async (req, res) => {
  try {
    const user = User({
      name: "admin",
      email: "admin1031@camstore.com",
      password: "admin1031",
      isAdmin: true,
    });
    const newUser = await user.save();
    res.send(newUser);
    // console.log(newUser);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// sign in
router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ message: "Invalid Email or Password." });
  }
});

export default router;

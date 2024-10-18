const express = require("express");
const router = express.Router();
const { User } = require("../schemas/user.schema");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  //Check if the user exists
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPass,
    mobile,
  });
  await newUser.save();

  res.status(201).json({
    message: "User created succesfully",
    email,
  });
});

router.get("/", async (req, res) => {
  const allUsers = await User.find().select("-password -_id -__v");
  res.status(200).json({
    allUsers,
  });
});

module.exports = router;

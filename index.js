const express = require("express");
const dotenv = require("dotenv");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", indexRouter);
app.use("/api/v1/user", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
  mongoose.connect(process.env.MONGOOSE_URI_STRING).then(() => {
    console.log("Connected to database");
  });
});

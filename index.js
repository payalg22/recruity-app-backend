const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express()

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to recruity app",
    });
})
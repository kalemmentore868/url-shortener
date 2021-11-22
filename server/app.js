const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

const PORT = 5001;

//Connect to database
connectDB();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ extended: false }));

//Define Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}...`);
});

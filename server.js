const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const dataSchema = require("./models/dataModel");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
dotenv.config();

connectDB();

// middleware
app.use(express.json()); // handle json response in application
app.use(cors());
app.use(morgan("dev"));

// data routes
app.use("/api", require("./routes/dataRoute"));

app.listen(5000, () => {
  console.log("server running on port 5000");
});

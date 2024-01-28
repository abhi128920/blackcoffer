const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connection successfull");
  } catch (error) {
    console.log("connextion error");
  }
};

module.exports = connectDB;

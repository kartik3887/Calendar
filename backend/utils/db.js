const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/Appointments";

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Connection successful to DB')
  } catch (error) {
    console.error("database connection failed", error);
    process.exit(0);
  }
};

module.exports = connectDB;
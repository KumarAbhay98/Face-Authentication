const express = require("express");
const path = require("path");
const faceapi = require("face-api.js");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const ImageRoute = require("./routes/imgRoutes");
const cors = require("cors");
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
connectDB();

// Face-API.js models loading
const loadModels = async () => {
  try {
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromDisk(path.join(__dirname, "model")),
      faceapi.nets.faceLandmark68Net.loadFromDisk(path.join(__dirname, "model")),
      faceapi.nets.faceRecognitionNet.loadFromDisk(path.join(__dirname, "model")),
    ]);
    console.log("Face-API.js models loaded");
  } catch (error) {
    console.error("Error loading Face-API.js models:", error);
  }
};
loadModels();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/images", ImageRoute);


app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"client","dist")));
  res.sendFile(path.resolve(__dirname,"client","dist","index.html"));
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const faceapi = require("face-api.js");


const createToken = (userData) => {
  const key = process.env.Key;
  return jwt.sign(userData, key, {
    expiresIn: "1h",
  });
};

exports.loginUser = async (req, res) => {
  const { descriptors, username, base64Img } = req.body;
  const filtered = username.toLowerCase();
  if (!descriptors) {
    return res.status(400).json({ message: "Face Not Found" });
  }
  try {
    const user = await User.findOne({ username: filtered });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const tempdata = new Map(user.faceData[0]);
    const storedDes = Array.from(tempdata.values());
    const received = Object.values(descriptors[0]);
    const float32recevied = new Float32Array(received);
    const float32stored = new Float32Array(storedDes);
    const faceMatcher = new faceapi.FaceMatcher(float32recevied);

    const match = faceMatcher.findBestMatch(float32stored);
    console.log(match);
    console.log(match.toString());
    if (match._label === "unknown") {
      return res.status(401).json({ message: "Face not recognized" });
    } else {
      const token = createToken({ username: user.username });
      res.status(200).json({ message: "Login successful", token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing image" });
  }
};

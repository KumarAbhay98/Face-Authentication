const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Check if the connection object exists and has a host property
        if (conn && conn.connection && conn.connection.host) {
            console.log(`MongoDB connected: ${conn.connection.host}`);
        } else {
            // Log an error if the connection object or host property is missing
            console.error("MongoDB connection object or host property is undefined.");
        }
    } catch (err) {
        console.error(`Error in MongoDB connection: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

// Import the express module
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from './routes/userRoutes'

dotenv.config();
// Create an instance of the express application
const app = express();
app.use(express.json());
app.use(cors());
setTimeout(() => {
  connectDB();
}, 3000);
// Define a port number
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || ''

//routes go here 
app.use('/users', userRoutes)



export async function connectDB() {
  await mongoose.connect(MONGO_URI);
}

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

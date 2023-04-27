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
connectDB();
// Define a port number
const PORT = process.env.PORT || 3000;

//routes go here 
app.use('/users', userRoutes)



export async function connectDB() {
  const uri =
    "mongodb+srv://ngdlmk:PX7cddyw83-*-@cluster0.ly9eqte.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(uri);
}

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

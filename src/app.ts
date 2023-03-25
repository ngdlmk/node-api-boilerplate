// Import the express module
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config()
// Create an instance of the express application
const app = express();
app.use(express.json())
// Define a port number
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});
// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
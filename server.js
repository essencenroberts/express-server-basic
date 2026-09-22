// 1. Import the express library
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;
const __filename = fileURLToPath(import.meta.url); // file absolute path
const __dirname = path.dirname(__filename); // directory full path

// Mount middleware
app.use(express.static(path.join(__dirname, 'public'))); // <- updated

// 4. Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    console.log(`Incoming Request| URL: ${req.url} | method: ${req.method}`);
    
    // res.send('<h1>Hello, Express!</h1>');
    // res.json({"user": "me"});
});

// 5. Start the server and have it listen for incoming connections
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// import express library
const express = req('express');
const path = req("path");

// create an instance of an Express app
const app = express();
// define the port the server will run on
const PORT = 3000;


// define a route handler for GET requests to the root URL ('/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// start the server and have it listen for incoming connection
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  
});
// Import the Express library
import express from "express";

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ("/") and send a response
app.get("/", (req, res) => {
  res.send(`Welcome to Home Page`);
});

// Define a route for the "/login" URL and send an HTML response
app.get("/login", (req, res) => {
  res.send(`<h1> Welcome to Login Page</h1>`);
});

// Define a route for the "/about" URL and send an HTML response
app.get("/about", (req, res) => {
  res.send(`<h2> Welcome to About Page</h2>`);
});

// Define a route for the "/contact" URL, but there's a typo in the response
app.get("/contact", (req, res) => {
  res.send(`<h2> Welcome to Contact Page</h2 )`);
});

// Set the port number for the server
const PORT = 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

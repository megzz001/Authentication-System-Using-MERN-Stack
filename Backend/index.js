require("dotenv").config(); // Load environment variables from a .env file into process.env
const express = require("express"); // Importing the Express library to create a web server.
const app = express();// Creating an instance of the Express application.

const PORT = process.env.PORT || 8080;// Define the port number to listen on, using an environment variable or defaulting to 8080.

app.get('/ping', (req, res) => {
    res.send('pong'); // Define a route that responds with 'pong' when a GET request is made to '/ping'.
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message to the console when the server starts successfully.
});
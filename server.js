const express = require("express");
const app = express();
// Set up Express
require("./server/config/mongoose.config");
// This sends our mongoose.connect statement to initialize our database connection

app.use(express.json(), express.urlencoded({ extended: true }));

// We import the jokes routes function from our joke.routes.js file
const AllMyJokeRoutes = require("./server/routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is ready on port 8000"));
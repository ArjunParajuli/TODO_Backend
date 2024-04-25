const express = require("express");
const app = express();


// connect to database
const dbConnect = require("./configs/database.js");
dbConnect(); 


// for using variables inside .env file in index.js (load config from env file)
require("dotenv").config(); 
const PORT = process.env.PORT || 3000;


// parsing: process of converting raw data from an HTTP request into a format that is usable and understandable by your application
// Middleware to parse incoming data in request body (It parses the JSON data and makes it available in req.body for further processing)
app.use(express.json());


// import routes
const todoRoutes = require("./routes/todoRoutes.js"); 

// mount api routes (sarey routes ko "/api/v1" iss path ke baad append karo for versioning of API eg: http://localhost:3000/api/v1/(created_routes))
app.use("/api/v1", todoRoutes);


// Start the server
app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + process.env.PORT);
});

// default route for app
app.get("/", (req, res)=>{
    res.send("<h1>Home</h1>")
})



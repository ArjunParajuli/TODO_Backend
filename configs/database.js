const mongoose = require("mongoose");

require("dotenv").config(); // import dotenv and use ".config()" so that variables defined on .env file become accessible through the process obj

// this function connects express with database
const dbConnect = () => {  
    // asynchronous func so returns a promise, hence we can use .then() and .catch()
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connection with DB sucessful");
    })
    .catch((err) => console.log("Error"));
};

module.exports = dbConnect;  



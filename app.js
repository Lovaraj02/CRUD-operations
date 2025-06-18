const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const employeeRoute = require('./routes/employeeRoutes')

const app = express();
dotenv.config();
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose.connect(process.env.uri)
    .then(() => {
        console.log("MongoDB connected successfully😁");
    })
    .catch((error) => {
        console.log("Error is", error);
    });


app.use('/employees',employeeRoute)

    
// Express server
app.listen(PORT, () => {
    console.log("Server running at -->", PORT);
});






// Start your es6 scripts here
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const book_routes = require('./routes/book');
// require("dotenv/config")

const app = express();

// ${process.env.DB_USER}:${process.env.DB_PASSWORD}@
console.log(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connecting to MongoDB...");
})

const con = mongoose.connection;
con.on('error', console.error.bind(console, "MongoDB connection error"))

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Up and running on docker")
})

app.use("/book", book_routes);

app.listen(8080, () => console.log("Running at 8080"));

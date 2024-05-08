const express = require("express");
const mongoose = require("mongoose"); // for mongoDB connection
const mongoDBURL = "mongodb://localhost/Student"; // specified mongodb url of our machine

const app = express(); //initialize express

mongoose.connect(mongoDBURL);

const conn = mongoose.connection;

conn.on("open", function () {
  console.log("MongoDB connected.."); //message to check whether connection works using event
});

const studentRouter = require("./routers/student");
app.use("/students", studentRouter);
app.listen(8082);

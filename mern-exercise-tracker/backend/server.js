const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;


app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

const mongo = process.env.con;
mongoose.connect(mongo, {useNewUrlParser: true,useCreateIndex: true});

const connection = mongoose.connection;
//once the connection is open , log the output.
connection.once('open',() =>{
    console.log('mongoDB is connected successfully');
})

const exerciseRouter = require('./Routes/exercises');
const userRouter = require('./Routes/users');


app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen(port ,() =>{
    console.log(`app is running at port ${port}`);
})

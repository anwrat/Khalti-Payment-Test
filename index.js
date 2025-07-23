const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const connectToMongo = require("./config/db");
app.use(bodyParser.json());

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
connectToMongo();

app.listen(3001,()=>{
    console.log('Backend listening at port 3001');
})
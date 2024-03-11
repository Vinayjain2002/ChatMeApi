const express = require("express")
const connectDb = require("./database/db");

const app= express();
app.use= express();
connectDb();

app.listen(4000,()=>{
    console.log("server is listening")
})
const express=require('express');
//body parser and data

const body_parser=require('body-parser');
const userRouter=require('./routes/user.route');

//to import express module
const app =express();
app.use(body_parser.json());

app.use('/',userRouter);
//to import from anywhere in app
module.exports=app;



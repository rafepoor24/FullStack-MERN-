const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');

//settings
app.set('port',process.env.PORT ||4000);

//middlewares
app.use(morgan('dev'));


//routes

module.exports=app;
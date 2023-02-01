const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');

//settings
app.set('port',process.env.PORT ||4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



//routes
app.use('/api/usuarios/',require('./routes/usurarios'));

module.exports=app;
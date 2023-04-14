const express = require('express')
const app = express()
const dotenv =require('dotenv');
const mongoose = require('mongoose');
const userRoutes =require('./routes/userRoutes')
const cors = require("cors");

dotenv.config();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json()); 
app.use('/users',userRoutes)

app.get('/',(req,res)=>{
    res.send("Welcome Home");
  })
  mongoose.connect(process.env.MONGO_URI).then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT} and connected to database`)
  })
}).catch(err=>console.log(err));
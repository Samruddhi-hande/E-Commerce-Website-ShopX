require('dotenv').config()
const express = require('express')
const app = express()
const port =3000
//there are ~6500 ports
app.get('/',(req,res)=>{
    res.send("hello World")
})
app.get('/twiter',(req,res) =>{
    res.send("hite")
})
app.listen(process.env.PORT ,()=>{
    console.log(`example app listen on port ${port}`);
})
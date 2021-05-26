const express = require('express');
const app = express()

data ={
    name : "kaushik",status :"programmer"
}
module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.render('home',{data:data})
    })
    app.get('/about',(req,res)=>{
        res.send("this is about page")
    })
}
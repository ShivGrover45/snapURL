const express=require('express')
const Router = require('./routes/url.router')
const app=express()

app.use(express.json())
app.use('/api',Router)

module.exports=app
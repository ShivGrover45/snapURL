const express=require('express')
const Router = require('./routes/url.router')
const app=express()

app.use(express.json())
app.use('/api',Router)
app.use(express.cors())
module.exports=app
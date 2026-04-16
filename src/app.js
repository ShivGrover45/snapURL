const express=require('express')
const Router = require('./routes/url.router')
const cors=require('cors')
const app=express()

app.use(cors())
app.use(express.json())
app.use('/api',Router)

module.exports=app
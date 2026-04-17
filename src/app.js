const express=require('express')
const Router = require('./routes/url.router')
const cors=require('cors')
const rateLimit=require('express-rate-limit')
const app=express()

const limiter=rateLimit({
    windowMs:5*60*100,
    max:10,
    message:"Too many requests try again later"
})

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' })
})
app.use('/api',limiter,Router)

module.exports=app
const express=require('express')
const { generateShortUrl } = require('../controller/url.controller')
const Router=express.Router()

Router.post('/link',generateShortUrl)

module.exports=Router
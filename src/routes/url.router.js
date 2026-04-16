const express=require('express')
const { generateShortUrl, getShortUrl, getAnalytics } = require('../controller/url.controller')
const Router=express.Router()

Router.post('/link',generateShortUrl)
Router.get('/:shortID',getShortUrl)
Router.get('/analytics',getAnalytics)

module.exports=Router
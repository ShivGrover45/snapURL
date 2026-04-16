const express=require('express')
const { generateShortUrl, getShortUrl, getAnalytics } = require('../controller/url.controller')
const Router=express.Router()

Router.post('/link', generateShortUrl)
Router.get('/analytics/:shortID', getAnalytics)  // ← move up + add :shortID
Router.get('/:shortID', getShortUrl)

module.exports=Router
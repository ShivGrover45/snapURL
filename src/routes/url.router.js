const express=require('express')
const { generateShortUrl, getShortUrl } = require('../controller/url.controller')
const Router=express.Router()

Router.post('/link',generateShortUrl)
Router.get('/:shortID',getShortUrl)

module.exports=Router
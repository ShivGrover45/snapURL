const {nanoid}=require('nanoid')
const url=require('../models/url.model')

const generateShortUrl=async(req,res)=>{
    const body=req.body
    if(!body.url){
        return res.status(400).json({
            message:"bad request"
        })
    }
    try
    {const shortId=nanoid(8)
    const newURl=await url.create({
        shortID:shortId,
        redirectURL:body.url,
        visitHistory:[]
    })
    res.status(200).json({
        message:"short url successfully created",
        
    })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message:err
        })
    }
    
}


const getShortUrl=async(req,res)=>{
    
}

module.exports={generateShortUrl}
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
    console.log(newURl)
    res.status(200).json({
        message:"short url successfully created",
        link:`localhost:3000/:${newURl.shortID}`
    })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message:err
        })
    }
    
}


const getShortUrl=async(req,res)=>{
   const shortID=req.params.shortID 
   const entry=await url.findOneAndUpdate({
    shortID
   },{
    $push:{
        visitHistory:{
            timestamp:Date.now()
        }
    }
   })
   res.redirect(entry.redirectURL)
}
const getAnalytics = async (req, res) => {
    const shortID = req.params.shortID
    const entry = await url.findOne({ shortID })

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" })
    }

    return res.status(200).json({
        totalVisits: entry.visitHistory.length,
        analytics: entry.visitHistory
    })
}

module.exports={generateShortUrl,getShortUrl,getAnalytics}
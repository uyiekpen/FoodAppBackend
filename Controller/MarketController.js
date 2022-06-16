const MarketModel = require("../Database/MarketDatabase")
const cloudinary = require("../utils/Cloudinary")

const getMarket = async (req, res ) =>{
    try {
        const userdata = await MarketModel.find()
        res.status(200).json({
            message : "data found successfully...",
            data : userdata
        })

        
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const getSingleMarket = async (req, res ) =>{
    try {
        const userdata = await MarketModel.findById(req.params.id)
        res.status(200).json({
            message : "data found successfully...",
            data : userdata
        })

        
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const CreateMarket = async (req, res ) =>{
    try {
        const {title , description , price } = req.body
        const Myimage = await cloudinary.uploader.upload(req.file.path)

      

        const userdata = await MarketModel.create({
            title , 
            description , 
            price ,
            image: Myimage.secure_url,
            imageID : Myimage.public_id,
        })

        res.status(200).json({
            message : "data created successfully...",
            data : userdata
        })

        
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const updateMarket = async (req, res ) =>{
    try {
        const {price } = req.body
        const userdata = await MarketModel.findByIdAndUpdate(req.params.id,
            {price}, {new : true})
        res.status(200).json({
            message : "data found successfully...",
            data : userdata
        })

        
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const deleteMarket = async (req, res ) =>{
    try {
        const userdata = await MarketModel.findByIdAndRemove(req.params.id)
        res.status(200).json({
            message : "deleted",
            data : userdata
        })

    } catch (err) {
        res.status(404).json(err.message)
    }
}

module.exports = {
    getMarket,
    getSingleMarket,
    CreateMarket,
    updateMarket,
    deleteMarket

}
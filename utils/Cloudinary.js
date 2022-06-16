const cloudinary = require("cloudinary")
require("dotenv").config()

cloudinary.config({
   cloud_name : process.env.CLOUD_NAME,
   api_key:539558784854174,
   api_secret: process.env.CLOUD_SECRET,
   secure: true, 
})

module.exports = cloudinary
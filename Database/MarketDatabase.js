const mongoose = require("mongoose")

const MarketModel = mongoose.Schema({
    title: {
        type : String
    },
    description: {
        type : String
    },
    price: {
        type : Number
    },
    image : {
        type: String
    },
    imageID : {
        type: String
    },
    
}, {timeStamp: true})


module.exports = mongoose.model("markets", MarketModel)
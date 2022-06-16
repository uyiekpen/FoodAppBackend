const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username: {
        type : String
    },
    email: {
        type : String,
        unique : true
    },
    password: {
        type : String
    },
    avatar: {
        type: String,
    },
    avatarID: {
        type: String,
    },

}, {timeStamp: true})


module.exports = mongoose.model("users", UserSchema)
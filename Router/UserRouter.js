const express = require("express")
const router = express.Router()
const {upload} = require("../utils/multer")
const {
    getUser,
    getSingleUser,
    CreateUser,
    SignInUser
} = require("../Controller/UserController") 

router.route("/").get(getUser);
router.route("/:id").get(getSingleUser);
router.route("/register").post(upload , CreateUser);
router.route("/signin").post(SignInUser)


module.exports = router
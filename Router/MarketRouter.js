const express = require("express")
const {Myimage} = require("../utils/multer")
const router = express.Router()
const {
    getMarket,
    getSingleMarket,
    CreateMarket,
    updateMarket,
    deleteMarket
} = require("../Controller/MarketController")

router.route("/").get(getMarket);
router.route("/:id").get(getSingleMarket);
router.route("/post").post(Myimage ,CreateMarket);
router.route("/:id").patch(updateMarket);
router.route("/").delete(deleteMarket);



module.exports = router;
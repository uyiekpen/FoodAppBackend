const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
require("./utils/db")
const port = process.env.PORT
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())


app.use("/api", require("./Router/UserRouter"))
app.use("/market", require("./Router/MarketRouter"))


app.listen(port, () =>{
    console.log(`app is listening to port ${port}...`)
})
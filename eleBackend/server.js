const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Info = require("./models/Data")
const cors = require("cors")

app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DBUSR}:${process.env.DBPAS}@cluster0.lgzgs.mongodb.net/data?authSource=admin&replicaSet=atlas-10ukxo-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`)

app.get("/data/:start", async (req, res)=>{

   let datum = await Info.find().skip(req.params.start).limit(100)
   let count = await Info.find().countDocuments()
   res.json({
    datum,
    count
   })
})

app.listen(3510, ()=>{
    console.log("ele app running");
})

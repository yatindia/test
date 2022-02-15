const mongo = require("mongoose")

const InfoSchema = new mongo.Schema({
    sno: String,
    source: String,
    name: String,
    mobile: String,
    whatsapp: String,
    area: String,
})

const Info =  mongo.model("Info", InfoSchema )

module.exports = Info
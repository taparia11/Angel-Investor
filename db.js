const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://taparia:220807@tapariaji.ohhta.mongodb.net/AngelInvestor"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to Mongo Successfully")
    })
}

module.exports = connectToMongo;
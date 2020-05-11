var mongoose = require("mongoose")
var Schema = mongoose.Schema

var articleSchema = new Schema({
    title:{
        type:String,
       required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    like:{
        type:Number,
        default:0

    },
    tags: [String]
}, {timestamps:true})


module.exports = mongoose.model("Article", articleSchema)
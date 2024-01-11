const mongoose = require('mongoose')
const GameSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    desarrolladora:{
        type:String,
        require: true
    },
    precio:{
        type:Number,
        require: true
    },
    creationDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('game',GameSchema)
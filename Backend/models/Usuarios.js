const mongoose = require('mongoose')
const UsuarioSchema = mongoose.Schema({
    user:{
        type:String,
        require: true
    },
    Fname:{
        type:String,
        require: true
    },
    Lname:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    creationDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('usuario',UsuarioSchema)
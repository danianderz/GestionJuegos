const Game = require("../models/Games")
const GamesSchema =require("../models/Games")
exports.addGame = async(req,res)=>{
    try{
        let game
        //Crear laagencia
        game = new Game(req.body)
        await game.save()
        res.send(game)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al registrar la agencia')
    }
}
exports.loadGames = async(req,res) =>{
    try{
    const games = await Game.find()
    res.json(games)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado')
    }
}

exports.loadGame = async(req,res) =>{
    try{
        let game = await Game.findById(req.params.id)
        if(!game){
            res.status(404).json({msg:'No existe el juego'})
        }
        res.json(game)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al cargar el registro')
    }
}

exports.updateGame=async(req,res)=>{
    try {
        const {name,desarrolladora,precio}=req.body
        let game=await Game.findById(req.params.id)
        if(!game){
        res.status(404).json({msg:'No existe la agencia'})
        }
        game.name=name
        game.desarrolladora=desarrolladora
        game.precio=precio
        game=await Game.findOneAndUpdate({_id:req.params.id},game,{new:true})
        res.json(game)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el registro')
    }
    
}

exports.deleteGame =  async(req,res) =>{
    try{
        let game = await Game.findById(req.params.id)
    if(!game){
        res.status(404).json({msg:'No existe la agencia'})
    }
    await Game.findOneAndRemove({_id:req.params.id})
    res.json({msg:'Agencia eliminada con exito'})
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el registro')
    }
}
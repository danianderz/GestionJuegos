const Usuario = require("../models/Usuarios")

exports.addUser = async(req,res)=>{
    try{
        let game
        //Crear laagencia
        game = new Usuario(req.body)
        await game.save()
        res.send(game)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al registrar la agencia')
    }
}
exports.loadUsers = async(req,res) =>{
    try{
    const games = await Usuario.find()
    res.json(games)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado')
    }
}

exports.loadUser = async(req,res) =>{
    try{
        let game = await Usuario.findById(req.params.id)
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

exports.updateUser=async(req,res)=>{
    try {
        const {user,Fname,Lname,password}=req.body
        let game=await Usuario.findById(req.params.id)
        if(!game){
        res.status(404).json({msg:'No existe la agencia'})
        }
        game.user=user
        game.Fname=Fname
        game.Lname=Lname
        game.password=password
        game=await Usuario.findOneAndUpdate({_id:req.params.id},game,{new:true})
        res.json(game)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el registro')
    }
    
}

exports.deleteUser =  async(req,res) =>{
    try{
        let game = await Usuario.findById(req.params.id)
    if(!game){
        res.status(404).json({msg:'No existe la agencia'})
    }
    await Usuario.findOneAndRemove({_id:req.params.id})
    res.json({msg:'Agencia eliminada con exito'})
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el registro')
    }
}
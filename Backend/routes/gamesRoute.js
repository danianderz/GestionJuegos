//Rutas para el esquema de agencia 
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/gamesController')
const usuariosController = require('../controllers/usuariosController')

//api/agencias
router.post('/',gamesController.addGame)
router.get('/',gamesController.loadGames)
router.put('/:id',gamesController.updateGame)
router.get('/:id',gamesController.loadGame)
router.delete('/:id',gamesController.deleteGame)



module.exports =router
//Rutas para el esquema de agencia 
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')

//api/users
router.post('/',usuariosController.addUser)
router.get('/',usuariosController.loadUsers)
router.put('/:id',usuariosController.updateUser)
router.get('/:id',usuariosController.loadUser)
router.delete('/:id',usuariosController.deleteUser)

module.exports =router
const express = require('express')
const routes = express.Router()

const CarroControllers = require('./controllers/carroControllers')

routes.get('/carro', CarroControllers.buscarTodos)

module.exports = routes
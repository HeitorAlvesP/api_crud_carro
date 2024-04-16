const express = require('express')
const routes = express.Router()

const CarroControllers = require('./controllers/carroControllers')

routes.get('/carros', CarroControllers.buscarTodos)
routes.get('/carro/:codigo', CarroControllers.buscarUm)
routes.post('/carro', CarroControllers.inserir)
routes.put('/carro/:codigo', CarroControllers.alterar)

module.exports = routes
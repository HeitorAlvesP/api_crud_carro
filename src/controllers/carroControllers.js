const CarroServices = require('../services/carroServices.js');

module.exports = {


    buscarTodos: async (req, res) => {
        let json = {error: '', result: []}

        let carros = await CarroServices.buscarTodos()

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            })
        }
        res.json(json)
    },


    buscarUm: async (req, res) => {
        let json = {error: '', result: {}}

        let codigo = req.params.codigo
        let carro = await CarroServices.buscarUm(codigo)

        if(carro){
            json.result = carro
            res.json(json.result)
        }
        else{
            json.error = `Carro, ID= ${codigo}, não foi encontrado`
            res.status(404).json(json.error)
        }
    },


    inserir: async (req, res) => {
        let json = {error: '', result: {}}

        let modelo = req.body.modelo
        let placa = req.body.placa
        
        if(modelo && placa){
            let CarroCodigo = await CarroServices.inserir(modelo, placa)
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            }
        }else{ 
            json.error = 'Campos não enviados'
        }
        res.json(json)
    },

    alterar: async (req, res) => {
        let json = {error: '', result: {}}

        let modelo = req.body.modelo
        let placa = req.body.placa
        let codigo = req.params.codigo
        
        if(modelo && placa && codigo){
            await CarroServices.alterar(modelo, placa, codigo)
            json.result = {
                codigo,
                modelo,
                placa
            }
        }else{ 
            json.error = 'Campos não enviados'
        }
        res.json(json)
    },

}
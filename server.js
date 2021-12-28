const cors = require('cors')
const express = require('express')
const server = express()
const bodyparser = require('body-parser')
const port = 3000

server.use(cors())
server.use(bodyparser.urlencoded({extended:false}))
server.use(bodyparser.json())


const frutas = ['Maça', 'Uva', 'Banana']


//retornar uma fruta
server.get('/frutas/:id', (req, res) => {
    const {id} = req.params
    
    return res.json(frutas[id])
})


//retornar todas as frutas
server.get('/frutas', (req, res) => {
    return res.json(frutas)
})

//adicionar nova fruta
server.post('/frutas', (req, res) => {
    const {nome} = req.body
    frutas.push(nome)

    return res.json(frutas)
})

//atualizar uma fruta
server.put('/frutas/:id', (req, res) => {
    const {id} = req.params
    const {nome} = req.body

    frutas[id] = nome

    return res.json(frutas)
})

//deletar uma fruta

server.delete('/frutas/:id', (req, res) => {
    const {id} = req.params

    frutas.splice(id, 1)

    res.json('Fruta deletada')
})


server.listen(port, () => {
    console.log('Para fechar o servidor: ctrl + c')
})
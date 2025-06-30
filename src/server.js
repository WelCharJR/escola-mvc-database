const express = require('express')

const cursoController = require('./controlers/curso.controller')

const app = express()

app.get('/cursos', cursoController.listar)

app.listen(3000, () => {
    console.log("Servidor rodando na porta")
})
const express = require('express')

const cursoController = require('./controlers/curso.controller')
const professorController = require('./controlers/professor.controller')
const alunoController = require('./controlers/aluno.controller')

const app = express()

app.get('/cursos', cursoController.listar)
app.post('/cadastrar-curso', cursoController.cadastrar)
app.delete('/deletar-curso', cursoController.deletar)

app.get('/professores', professorController.listar )
app.post('/cadastrar-professor', professorController.cadastrar)
app.delete('/deletar-professor', professorController.deletar)

app.get('/alunos', alunoController.listar )
app.post('/cadastrar-aluno', alunoController.cadastrar)
app.delete('/deletar-aluno', alunoController.deletar)

app.listen(3000, () => {
    console.log("Servidor rodando na porta")
})
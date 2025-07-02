const cursoModel = require("../models/curso.model")

async function listar(req, res){
    const cursos = await cursoModel.listarTodosCursos()
    console.log(cursos)
    res.json(cursos)
}

function cadastrar(req, res){
    res.send("Função criar cursos")
}

function deletar(req, res){
    res.send("Função responsavel por deletar um curso")
}

function atualizar(req, res){
    res.send("Atualizando informações")
}

module.exports = {
    listar,
    cadastrar,
    deletar,
    atualizar
}
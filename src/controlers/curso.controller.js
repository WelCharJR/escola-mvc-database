const bancoDados = require("../config/banco-dados")

async function listar(req, res){

    const cursos = await bancoDados.conexao.query("SELECT * FROM cursos")
    console.log('cursos', cursos)
    res.send("Função listar cursos")
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
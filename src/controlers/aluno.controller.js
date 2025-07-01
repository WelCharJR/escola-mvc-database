function listar(req, res){
    res.send("Função listar alunos")
}

function cadastrar(req, res){
    res.send("Função criar alunos")
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
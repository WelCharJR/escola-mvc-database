function listar(req, res){
    res.send("Função listar alunos")
}

function cadastrar(req, res){
    res.send("Função criar alunos")
}

function deletar(req, res){
    res.send("Função responsavel por deletar um curso")
}

module.exports = {
    listar,
    cadastrar,
    deletar
}
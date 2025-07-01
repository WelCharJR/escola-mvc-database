function listar(req, res){
    res.send("Função listar professores")
}

function cadastrar(req, res){
    res.send("Função criar professores")
}

function deletar(req, res){
    res.send("Função responsavel por deletar um professor")
}

module.exports = {
    listar,
    cadastrar,
    deletar
}
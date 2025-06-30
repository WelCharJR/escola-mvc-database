function listar(req, res){
    res.send("Função lista")
}

function cadastrar(req, res){
    res.send("Função cria curso")
}

function deletar(req, res){
    res.send("Função responsavel por deletar um curso")
}

module.exports = {
    listar,
    cadastrar,
    deletar
}
const bancoDados = require('../config/banco-dados')

async function listarTodosCursos() {
    const conexao = await bancoDados.conexao

    const [ cursos ] = await conexao.execute("SELECT * FROM cursos")

    return cursos
}

module.exports = {
    listarTodosCursos
}
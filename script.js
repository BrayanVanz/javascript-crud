function gerarID() {
    return Math.floor(Math.random() * 1000);
}

function cadastrarPessoa(pessoa) {
    let novoID = gerarID();
    let cadastro = Object.assign({id:novoID}, pessoa);

    listaDePessoas.push(cadastro);
}

function atualizarPessoa(id, atributo) {
    for (let pessoa of listaDePessoas) {
        if (pessoa.id == id) {
            const atualizado = Object.assign({}, pessoa, atributo);
            const index = listaDePessoas.indexOf(pessoa);
            listaDePessoas.splice(index, 1);
            listaDePessoas.splice(index, 0, atualizado);
        }
    }
}

function deletarPessoa(id) {
    for (let pessoa of listaDePessoas) {
        if (pessoa.id == id) {
            const index = listaDePessoas.indexOf(pessoa);
            listaDePessoas.splice(index, 1);
        }
    }
}

function listarPessoas() {
    return listaDePessoas;
}

const listaDePessoas = [{id: 1, nome: "João", idade: 30, cidade: "Brasília"}, {id: 2, nome: "Maria", idade: 25, cidade: "Rio de Janeiro"}];
cadastrarPessoa({nome: "Gabriel", idade: 40, cidade: "Porto Alegre"});
atualizarPessoa(2, {cidade: "Curitiba"});
deletarPessoa(1);
const pessoas = listarPessoas();
console.log(pessoas);
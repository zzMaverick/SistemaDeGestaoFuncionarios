class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    getNome() { return this.nome; }
    setNome(nome) { this.nome = nome; }
    getIdade() { return this.idade; }
    setIdade(idade) { this.idade = idade; }
    getCargo() { return this.cargo; }
    setCargo(cargo) { this.cargo = cargo; }
    getSalario() { return this.salario; }
    setSalario(salario) { this.salario = salario; }

    toString() {
        return `${this.nome} - ${this.idade} anos - ${this.cargo} - R$ ${this.salario.toFixed(2)}`;
    }
}

const funcionarios = [];
const form = document.getElementById('formFuncionario');
const tabelaBody = document.getElementById('tabelaFuncionarios').getElementsByTagName('tbody')[0];

function atualizarTabela() {
    tabelaBody.innerHTML = '';
    funcionarios.forEach(func => {
        const row = tabelaBody.insertRow();
        row.insertCell(0).textContent = func.nome;
        row.insertCell(1).textContent = func.idade;
        row.insertCell(2).textContent = func.cargo;
        row.insertCell(3).textContent = `R$ ${func.salario.toFixed(2)}`;
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cargo = document.getElementById('cargo').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const funcionario = new Funcionario(nome, idade, cargo, salario);
    funcionarios.push(funcionario);
    atualizarTabela();
    form.reset();
});
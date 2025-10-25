class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    getNome = () => this.nome;
    setNome = (nome) => this.nome = nome;
    getIdade = () => this.idade;
    setIdade = (idade) => this.idade = idade;
    getCargo = () => this.cargo;
    setCargo = (cargo) => this.cargo = cargo;
    getSalario = () => this.salario;
    setSalario = (salario) => this.salario = salario;

    toString = () => `${this.nome} - ${this.idade} anos - ${this.cargo} - R$ ${this.salario.toFixed(2)}`;
}

const funcionarios = [];
const form = document.getElementById('formFuncionario');
const tabelaBody = document.getElementById('tabelaFuncionarios').getElementsByTagName('tbody')[0];
let editIndex = null;

const atualizarTabela = () => {
    tabelaBody.innerHTML = '';
    funcionarios.forEach((func, index) => {
        const row = tabelaBody.insertRow();
        row.insertCell(0).textContent = func.getNome();
        row.insertCell(1).textContent = func.getIdade();
        row.insertCell(2).textContent = func.getCargo();
        row.insertCell(3).textContent = `R$ ${func.getSalario().toFixed(2)}`;

        const actionsCell = row.insertCell(4);

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => {
            document.getElementById('nome').value = func.getNome();
            document.getElementById('idade').value = func.getIdade();
            document.getElementById('cargo').value = func.getCargo();
            document.getElementById('salario').value = func.getSalario();
            editIndex = index;
        };

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => {
            funcionarios.splice(index, 1);
            atualizarTabela();
        };

        actionsCell.appendChild(btnEditar);
        actionsCell.appendChild(btnExcluir);
    });
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cargo = document.getElementById('cargo').value;
    const salario = parseFloat(document.getElementById('salario').value);

    if (editIndex === null) {
        funcionarios.push(new Funcionario(nome, idade, cargo, salario));
    } else {
        const func = funcionarios[editIndex];
        func.setNome(nome);
        func.setIdade(idade);
        func.setCargo(cargo);
        func.setSalario(salario);
        editIndex = null;
    }

    atualizarTabela();
    form.reset();
});

const buscarFuncionarioPorNome = nome => funcionarios.find(func => func.getNome() === nome);


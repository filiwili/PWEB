function Retangulo(x, y) {
    this.base = x;
    this.altura = y;
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

const retangulo1 = new Retangulo(5, 10);
const areaRetangulo = retangulo1.calcularArea();

const conteudo = document.getElementById('conteudo');
conteudo.innerHTML += `
    <div class="bloco">
        <h2>Retângulo</h2>
        <p><strong>Base:</strong> ${retangulo1.base}</p>
        <p><strong>Altura:</strong> ${retangulo1.altura}</p>
        <p><strong>Área:</strong> ${areaRetangulo}</p>
    </div>
`;

class Conta {
    constructor() {
        this._nomeCorrentista = "";
        this._banco = "";
        this._numeroConta = "";
        this._saldo = 0;
    }

    get nomeCorrentista() { return this._nomeCorrentista; }
    set nomeCorrentista(valor) { this._nomeCorrentista = valor; }

    get banco() { return this._banco; }
    set banco(valor) { this._banco = valor; }

    get numeroConta() { return this._numeroConta; }
    set numeroConta(valor) { this._numeroConta = valor; }

    get saldo() { return this._saldo; }
    set saldo(valor) { this._saldo = valor; }
}

class Corrente extends Conta {
    constructor() {
        super();
        this._saldoEspecial = 0;
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

class Poupanca extends Conta {
    constructor() {
        super();
        this._juros = 0;
        this._dataVencimento = "";
    }

    get juros() { return this._juros; }
    set juros(valor) { this._juros = valor; }

    get dataVencimento() { return this._dataVencimento; }
    set dataVencimento(valor) { this._dataVencimento = valor; }
}

const contaCorrente = new Corrente();
contaCorrente.nomeCorrentista = prompt("Digite o nome do correntista da Conta Corrente:");
contaCorrente.banco = prompt("Digite o nome do banco da Conta Corrente:");
contaCorrente.numeroConta = prompt("Digite o número da Conta Corrente:");
contaCorrente.saldo = parseFloat(prompt("Digite o saldo da Conta Corrente:"));
contaCorrente.saldoEspecial = parseFloat(prompt("Digite o saldo especial da Conta Corrente:"));

const contaPoupanca = new Poupanca();
contaPoupanca.nomeCorrentista = prompt("Digite o nome do correntista da Poupança:");
contaPoupanca.banco = prompt("Digite o nome do banco da Poupança:");
contaPoupanca.numeroConta = prompt("Digite o número da Conta Poupança:");
contaPoupanca.saldo = parseFloat(prompt("Digite o saldo da Poupança:"));
contaPoupanca.juros = parseFloat(prompt("Digite os juros da Poupança (ex: 0.5 para 0,5%):"));
contaPoupanca.dataVencimento = prompt("Digite a data de vencimento da Poupança (ex: 30/12/2025):");

conteudo.innerHTML += `
    <div class="bloco">
        <h2>Conta Corrente</h2>
        <p><strong>Nome do Correntista:</strong> ${contaCorrente.nomeCorrentista}</p>
        <p><strong>Banco:</strong> ${contaCorrente.banco}</p>
        <p><strong>Número da Conta:</strong> ${contaCorrente.numeroConta}</p>
        <p><strong>Saldo:</strong> R$ ${contaCorrente.saldo.toFixed(2)}</p>
        <p><strong>Saldo Especial:</strong> R$ ${contaCorrente.saldoEspecial.toFixed(2)}</p>
    </div>

    <div class="bloco">
        <h2>Conta Poupança</h2>
        <p><strong>Nome do Correntista:</strong> ${contaPoupanca.nomeCorrentista}</p>
        <p><strong>Banco:</strong> ${contaPoupanca.banco}</p>
        <p><strong>Número da Conta:</strong> ${contaPoupanca.numeroConta}</p>
        <p><strong>Saldo:</strong> R$ ${contaPoupanca.saldo.toFixed(2)}</p>
        <p><strong>Juros:</strong> ${contaPoupanca.juros}% ao mês</p>
        <p><strong>Data de Vencimento:</strong> ${contaPoupanca.dataVencimento}</p>
    </div>
`;

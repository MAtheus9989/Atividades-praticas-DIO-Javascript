class Contabancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada"
        }
        this.saldo = this.saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        return this._saldo;
    }
}

class ContaCorrente extends Contabancaria {
    constructor(agencia, nuemro, CartaoCredito) {
        super(agencia, nuemro);
        this.tipo= 'corente';
        this.CartaoCredito = CartaoCredito;
    }

    get CartaoCredito () {
        return this._CartaoCredito;
    }

    set CartaoCredito(valor) {
        this._CartaoCredito = valor;
    }
}

class ContaPoupanca extends Contabancaria {
    constructor(agencia, nuemro) {
        super(agencia, nuemro);
        this.tipo= 'poupaça';
        
    }
}

class ContaUniversitaria extends Contabancaria {
    constructor(agencia, nuemro) {
        super(agencia, nuemro);
        this.tipo= 'Universitaria';
        
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação negada!";
        }

        this._saldo = this._saldo - valor;
    }
}



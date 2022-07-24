function comparaNumero(numero1, numero2) {
    const primeiraFrase = criaPrimeiraFrase(numero1, numero2);
    const segundaFrase = criaSegundaFrase(numero1, numero2);

    return  `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(numero1, numero2) {
    let saoIguais = '';

    if(numero1 !== numero2) {
        saoIguais = 'não';

    }
return `Os números ${numero1} e ${numero2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(numero1, numero2) {
    const soma = numero1 + numero2;

    let Resultado10 = 'menor';
    let Resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        Resultado10 = 'maior';
    }

    if (compara20){
        Resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${Resultado10}que 10 e ${Resultado20} que 20.`
}

console.log(comparaNumero(1, 1));
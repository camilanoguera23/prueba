function invertirNumero(numero){
    return Number(numero.toString().split('').reverse().join(''))
}

let valor = 12345;

console.log(valor);
console.log(invertirNumero(valor));
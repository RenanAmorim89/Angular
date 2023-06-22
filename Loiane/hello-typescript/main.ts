var minhaVar = 'Minha variavel'

function minhaFunc(x, y){
  return x + y;
}

// ES 6 ou ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
  return valor * 2;
})

// ES 2015
numeros.map(valor => valor * 2); 

class Matematica {
  soma(x, y){
    return x + y;
  }
}

// Tipagem de variáveis
var n1: string = 'string';
var n2: number = 4;
var n3: any = 'string';
n3 = 4;
 
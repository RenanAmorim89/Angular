var minhaVar = 'minha variavel';

function minhaFunc(x, y){
    return x + y;
}

// ES 6 ou ES 2015
let num = 2
const PI = 3.14

// Arrow functions
var numeros = [0, 1, 2, 3]
numeros.map(function(valor){
  return valor * 2
})
// ES 2015
numeros.map(valor => valor * 2) // ES 2015

// Classes
class Matematica1 {
  soma(x, y){
    return x + y
  }
}

var Matematica = (function() {
  function Matematica(){
  }
  Matematica.prototype.soma = function(x, y){
    return x + y
  };
  return Matematica
}());

//  Tipagem de variáveis
var n1: string = 'sdfsdf'
n1 = 4 // erro

//
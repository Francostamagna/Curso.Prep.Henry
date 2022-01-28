franco.js
function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num2 < num1 > num3 && num1 < 0){
    return ("Número 1 es mayor y positivo")
  }
  if (num1 < 0 || num2 < 0 || num3 < 0){
    return ("Hay negativos")
  }
  if (num1 < num3 > num2){
    return (num3 + 1)
      }
  if (num1 === 0 || num2 === 0 || num3 === 0){
    return ("Error")
  }    
}

var fran = operadoresLogicos(1,2,3)
console.log(fran)
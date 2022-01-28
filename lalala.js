function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    let num = n.toString()
    if(num[0] === "9"){
      return true
    }
    return false
  }
  console.log(empiezaConNueve(456546))
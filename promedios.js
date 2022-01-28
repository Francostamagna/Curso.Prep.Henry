



 var resultadosTest = []

function promedioResultadosTest(resultadosTest) {
    var resultados = 0;
         for (i=0; i < resultadosTest.length; i++){
      resultados = (resultadosTest[i] + resultados)
     }
    var promedio = (resultados / resultadosTest.lenght)
    return promedio
    }
    console.log(promedioResultadosTest[20,10,50,60]) 
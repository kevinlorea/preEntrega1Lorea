
  let salario;
  while (true) {
        let input = prompt("ingresa el salario en valores numericos")
        salario = parseFloat(input);
        if (!isNaN(salario)){
            break;
        }else{
            alert("por favor, ingresa un numero valido");
        }
    }
  let porcentajeIncapacidad;
  while (true) {
        let input = prompt("ingresa el porcentaje de incapacidad en valores numericos")
        porcentajeIncapacidad = parseFloat(input);
        if (!isNaN(porcentajeIncapacidad) && porcentajeIncapacidad >= 1 && porcentajeIncapacidad <= 99){
            break;
        }else{
            alert("el porcentaje de capacidad tiene un minimo de 1 y maximo de 99");
        }
    }   
  let edad;
  while (true) {
        let input = prompt("ingresa la edad en valores numericos")
        edad = parseFloat(input);
        if (!isNaN(edad) && edad >= 18 && edad <= 65 ){
            break;
        }else{
            alert("recuerda que la edad debe estar entre 18/65");
        }
}

  const indemnizacionCalculada = calcularIndemnizacion(salario, porcentajeIncapacidad, edad);

  alert ("la indemnizacion deberia ser de: $ " + indemnizacionCalculada.toFixed(2));

  function calcularIndemnizacion(salario, porcentajeIncapacidad, edad) {
    const factorEdad = 65;
    const indemnizacion = 53 * salario * (porcentajeIncapacidad / 100) * (factorEdad / edad);
    return indemnizacion;
  }

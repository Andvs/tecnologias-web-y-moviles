function calcular() {
    // Obtener el valor del input con id "numero"
    var numeroInput = document.getElementById("numero");
    var numeroPorcenInput = document.getElementById("porcentaje");

    // Obtener el elemento donde mostrar el resultado
    var resultadoElement = document.getElementById("resultadoPropina");
    var resultadoElement2 = document.getElementById("resultadoTotal");

    // Verificar si el valor ingresado es válido (es un número)
    if ((!isNaN(numeroInput.value)) && (!isNaN(numeroPorcenInput.value))) {
        // Realizar el cálculo (por ejemplo, duplicar el número)
        var numeroPropina = parseFloat(numeroInput.value)*(parseFloat(numeroPorcenInput.value)/100);
        var resultadoNumTotal = numeroPropina;

        // Mostrar el resultado
        resultadoElement.textContent = numeroPropina;
        resultadoElement2.texContent = resultadoNumTotal;
    } else {
        // Manejar el caso en el que el valor ingresado no es un número
        resultadoElement.textContent = "Por favor, ingresa un número válido.";
    }
}
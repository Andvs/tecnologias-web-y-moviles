let numeros = prompt("Ingresa una serie de número separados por comas (ej: 1,2,3,4)")

numeros = numeros.split(",")
let mayor = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

alert("El número mayor de la serie de números es " + mayor)
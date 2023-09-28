let sum = 0;
let numero = parseInt(prompt("Ingresa un número positivo"));

if (numero > 0) {
    for (let i = 1; i <= numero; i++) {
        if (i%2 === 0) {
            sum += i;
            alert(i)
        }
    }
    alert(sum)
}


let nota1 = prompt("Ingresa la nota 1 (1.0 a 7.0)");

while (nota1 < 1.0 || nota1 > 7.0) {
    alert("Te has equivocado.")
    nota1 = prompt("Ingresa la nota 1 (1.0 a 7.0)");
}

let nota2 = prompt("Ingresa la nota 2 (1.0 a 7.0)");
while (nota2 < 1.0 || nota2 > 7.0) {
    alert("Te has equivocado.")
    nota2 = prompt("Ingresa la nota 2 (1.0 a 7.0)");
}

let nota3 = prompt("Ingresa la nota 3 (1.0 a 7.0)");
while (nota3 < 1.0 || nota3 > 7.0) {
    alert("Te has equivocado.")
    nota3 = prompt("Ingresa la nota 3 (1.0 a 7.0)");
}

let promedio = Number(nota1)*0.4 + Number(nota2)*0.3 + Number(nota3)*0.4;
if (promedio < 3.95) {
    alert("Ha reprobado la asignatura :C")
} else if (promedio < 4.94) {
    alert("Debera ir a examen");
} else if (numero >= 4.94 || numero <= 7.0) {
    alert("Se exime de la asignatura.")
}


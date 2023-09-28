//utilizando las sentencias if y else
let yeat = prompt("¿en qué año se creo Javacript", "");
if (year == 1995) {
    alert("¡Correcto, en el año 1995!");
} else {
    alert("Respuesta incorrecta");
}

let edad = prompt("¿A que edad puedes tener licencia", "");
if (edad >= 18) {
    alert("correcto, a partir de los 18 años!");
} else if (edad == 17) {
    alert("correcto, pero no puede manejar  solo un menor de 17 año!");
} else {
    alert("Respuesta Incorrecta");
}
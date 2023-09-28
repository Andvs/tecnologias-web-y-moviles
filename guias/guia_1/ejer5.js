const peso = prompt("Ingrese su peso (kg)")
let estatura = prompt("Ingrese su estatura (cm)")

estatura = estatura / 100 //paso de cm a metros

let calculo = peso / (estatura)**2

if (calculo < 18.5) {
    alert("Bajo peso")
} else if (calculo >= 18.5 && calculo < 24.9) {
    alert("Normal")
} else {
    alert("Sobrepeso")
}

alert(calculo)

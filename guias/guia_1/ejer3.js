
function validarContrasena(contra) {

    let mayuscula = false;
    let numero = false;
    let especial = false;
    let numeroCaracteres = false;

    const especiales = "!@#$%^&*()_+{}[]:;<>,.?~\\-";

    if (contrasena.length >= 8) {
        numeroCaracteres = true;
    } else {
        alert("La contraseña no tiene un minimo de 8 caracteres.")
    }

    for (let i = 0; i < contra.length; i++) {
        const caracter = contrasena[i];
        
        if (caracter >= "A" && caracter <= "Z") {
            mayuscula = true;
        } else if (!isNaN(parseInt(caracter))) {
            numero = true;
        } else if (especiales.includes(caracter)) {
            especial = true;
        }
    }

    if (mayuscula === false) {
        alert("La contraseña no tiene al menos una mayuscula.")
    } 
    
    if (numero === false) {
        alert("La contraseña no tiene al menos un numero.")
    }
    
    if (especial === false) {
        alert("La contraseña no contiene al menos un caracter especial")
    } 

    return numeroCaracteres && mayuscula && numero && especial;
}

const contrasena = prompt("Ingrese una contraseña");

if (validarContrasena(contrasena)) {
    alert("La contraseña es válida.");
} else {
    alert("La contraseña no cumple con los criterios de seguridad.")
}
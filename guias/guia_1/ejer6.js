
let inventario = {};

function agregarProducto(nombre, precio, stock) {
    let producto = {
        nombre:nombre,
        precio:precio,
        stock:stock
    }
    inventario[nombre] = producto;
}

function verificarStock() {
    let claves = Object.keys(inventario);
    let stockTodoBien = true;

    for (let i = 0; i < claves.length; i++) {
        if (inventario[claves[i]].stock < 1000) {
            console.log(inventario[claves[i]].nombre + " tiene un stock critico. Menor que 1000 unidades.")
        }
        
        if (!(inventario[claves[i]].stock >= 1000)) {
            stockTodoBien = false;
        }
    }

    if (stockTodoBien) {
        console.log("El inventario esta en buen estado.")
    } 
}

while (true) {
    let siAgregar = prompt("¿quieres agregar un producto al inventario? (s o n)")
    if (siAgregar === "s") {
        let nombreProducto = prompt("nombre producto");
        let precioProducto = parseInt(prompt("precio producto"));
        let stockProducto = parseInt(prompt("stock producto"));
        agregarProducto(nombreProducto, precioProducto, stockProducto)
        console.log(inventario)
    }

    let siVerificarStock = prompt("¿Quieres verificar stock? (s o n)");
    if (siVerificarStock === "s") {
        verificarStock()
    }

    let salir = prompt("¿Quieres salir? (s o n)");
    if (salir === "s") {
        break;
    }
}

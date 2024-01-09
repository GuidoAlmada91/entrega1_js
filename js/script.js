

alert("Bienvenido a supermercado Carrefour: \nIngrese su productos y respectivos valores")
const productos = [];

const agregarProducto = () => {
    let seguirAgregando;

    do {
        const nombre = prompt("Ingresa el nombre del producto: ");
        const valor = prompt("Ingresa el valor del producto: ");
        const precio = parseFloat(valor);
        const producto = { nombre, precio };
        productos.push(producto);

        seguirAgregando = confirm("¿Desea agregar más productos? ");
    } while (seguirAgregando);
};

agregarProducto();

let precioTotal = 0;

for (const producto of productos) {
    precioTotal += producto.precio;
}

let detalleCarrito = "Detalle del carrito:\n";

for (const producto of productos) {
    detalleCarrito += producto.nombre + ": $" + producto.precio + "\n";
}

detalleCarrito += "\nPrecio Total: $" + precioTotal;

alert(detalleCarrito);
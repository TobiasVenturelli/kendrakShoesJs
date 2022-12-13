class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.stock = true;

    }
    sumarIva() {
        return this.precio * 1.21;
    }
    vender() {
        this.stock = false;
    }
    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }
}
var arrayProductos = [];
do {
    let comprobacion = prompt("Ingrese un nombre del producto o fin para terminar de agregar")
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin") {
        break;
    } else {
        nombreP = comprobacion;
        let precioP = prompt("Ingrese el precio del producto");
        let detalleP = prompt("Ingrese el detalle del producto");
        let cantidadP = prompt("Ingrese la cantidad que desea comprar");
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));

    }
}
while (comprobacion != "fin"|| comprobacion != "FIN" || comprobacion != "Fin" )

console.log(arrayProductos);

for (var producto of arrayProductos) {
    document.write(producto.nombre);
    document.write(producto.detalle);
    document.write(producto.cantidad);
    document.write(producto.precio);
    document.write(producto.sumarIva())
    console.log(producto.nombre)
    console.log(producto.detalle)
    console.log(producto.cantidad)
    console.log(producto.sumarIva())

}

let pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
console.log("Productos con poco Stock, comprar nuevamente: ");
console.log(pocoStock);

document.write("Lista  de productos con poco stock (menos de 3 unidades): ");

for (let producto of pocoStock) {
    document.write(producto.nombre);
    document.write(producto.detalle);
    document.write(producto.cantidad);

}

let sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("Lista de  Productos sin stock (cantidad = 0 o disponible = false):");

for (let producto of sinStock) {
    document.write(producto.nombre);
    document.write(producto.detalle);
    document.write(producto.cantidad);
}

/* BUSCAR PRODUCTO ESPECIFICO POR NOMBRE INGRESADO */

let ingresado = prompt("Ingresar el producto que quiero buscar");
let prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
document.write("Lista de  productos ingresados para busqueda: ");

for (let producto of prodIngresado) {
    document.write("Nombre: " + producto.nombre);
    document.write("Detalle: " + producto.detalle);
    document.write("Precio: " + producto.precio);
}

/* ORDENADOS POR CANTIDAD */

let ordenadosCantidad = [];
ordenadosCantidad = arrayProductos.map(elemento => elemento);
ordenadosCantidad.sort(function (a, b) {
    return a.cantidad - b.cantidad;
});

console.log("Ordenados por cantidad ascendente");
console.log(ordenadosCantidad);
document.write("Lista de productos ordenados por cantidad ");

for (let producto of ordenadosCantidad) {
    document.write("Nombre: " + producto.nombre);
    document.write("Detalle: " + producto.detalle);
    document.write("Cantidad: " + pruducto.cantidad);

}

/* ORDENADOS POR PRECIO */

var ordenadosPrecio = [];

ordenadosPrecio = arrayProductos.map(elemento => elemento);
var ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function (a, b) {
    return a.precio - b.precio;
});
console.log("Ordenados por Precio ascendentes");
console.log(ordenadosPrecio);
document.write("Lista de productos ordenados por precio ascendente: ");

for (let producto of ordenadosPrecio) {
    document.write("Nombre: " + producto.nombre);
    document.write("Detalle: " + producto.detalle);
    document.write("Precio: " + producto.precio);

}

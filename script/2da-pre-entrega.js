let nombre = prompt("Por favor, ingrese su nombre...");
if (nombre == "") {
    alert("No ingresaste nada");
}
else {
    alert("Hola " + nombre);
    console.log("Hola " + nombre)
}

class Producto {
    constructor(nombre, color, talle, precio) {
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
    }
} 
const productos = [];
productos.push(new Producto("ATHENEA", "Rojo" , 40, '100000'));
productos.push(new Producto("AURORA", "Negro" , 39, '130000'));
productos.push(new Producto("GAIA", "Rosa" , 38, '120000'));
productos.push(new Producto("DELIA", "Gris" , 37, '110000'));
productos.push(new Producto("CIRSE", "Blanco" , 36, '150000'));
console.log(productos);


let cantidad;
function buscarProducto(nombre, talle){
    return nombre.find(objeto => objeto.nombre === talle.toUpperCase());
}
let busqueda = buscarProducto(productos, prompt('INGRESAR NOMBRE DEL ZAPATO \n\n 1- ATHENEA \n\n 2- AURORA \n\n 3- DELIA \n\n 4- GAIA'));
    if(busqueda != undefined){
    cantidad =prompt('nombre: '+ busqueda.nombre +' \n\ncolor: '+ busqueda.color+' \n\ntalle: '+ busqueda.talle + '\n\nprecio: ' + busqueda.precio + " \n\nElegi la cantidad del producto...");
    }else{
        alert('NO EXISTE ZAPATO CON ESE NOMBRE');
    }

console.log(buscarProducto);
console.log(cantidad * busqueda.precio);


let correo = prompt("El precio total es " + cantidad * busqueda.precio + " \nLe mandaremos un mail con el detalle de la compra, por favor introduzca su correo electronico");
alert("Se enviara el detalle al siguiente correo: " + correo + " \nGracias por realizar su compra");




let nombre = prompt("Por favor, ingrese su nombre...");
if (nombre == "") {
    alert("No ingresaste nada");
}
else {
    alert("Hola " + nombre);
    console.log("Hola " + nombre)
}

let precio = prompt("Cual es el monto que quieres verificar con el descuento?");
alert("ingresaste " + precio);

const iva = 0.21
const descuento = 0.15
const suma  = function (a,b) { return a + b }
const resta = function (a,b) { return a - b }
const calcDescuento = function (x) {return x * descuento};

let nuevoPrecio = resta(precio, calcDescuento(precio));
alert("El precio con el descuento es " + nuevoPrecio)
console.log(nuevoPrecio);

const calcIva = function () {return nuevoPrecio * iva};

let respuesta = prompt(
    "¿Quieres verificar el precio con IVA?\n si\n no\n")
    console.log (respuesta);
    
    if(respuesta=="si"){
        calcularIva()
    }
    function calcularIva(){
            let precioConIva = alert("el precio con el iva incluido y el descuento es " +  nuevoPrecio + calcIva());
            console.log(alert("el precio con el iva incluido y el descuento es " +  nuevoPrecio + calcIva()));
        }
    
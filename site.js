let nombre = prompt("Por favor, ingrese su nombre...");
if (nombre == ""){
    alert("No ingresaste nada");
}
 else {
    alert("Hola " + nombre);
    console.log ("Hola " + nombre)
 }

 let precio = prompt ("Cual es el monto que quieres verificar con el descuento?");
 alert ("ingresaste " + precio);

const descuento = 0.15
const resta = (a,b) => { return a - b }
const calcDescuento = x => x * descuento;

let nuevoPrecio = alert("El precio con el descuento es " + resta(precio, calcDescuento(precio)));
console.log(nuevoPrecio);
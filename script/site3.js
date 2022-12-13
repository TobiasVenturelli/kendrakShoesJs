/* 
const zapatos = ['atenea', 'withe', 'militar', 'botas'];
for (let index = 0; index < zapatos.length; index++) {
    alert("Ubicacion " + index + " Zapato " + zapatos[index]);
}

console.log(zapatos);



let entrada = prompt("Ingresar zapato");
const tipo = [];
while (entrada != 'ESC') {
    tipo.push(entrada);
    entrada = prompt("Ingresar zapato");
}
for (let index = 0; index < tipo.length; index++) {
    alert("Ubicacion " + index + " Zapato " + zapatos[index]);
}
console.log(tipo)


} */

class Producto {
    constructor(nombre, color, talle, disponible) {
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.disponible = disponible;
    }
} 
const productos = [];
productos.push(new Producto("ATHENEA", "Rojo" , 40, true));
productos.push(new Producto("AURORA", "Negro" , 39, true));
productos.push(new Producto("GAIA", "Rosa" , 38, true));
productos.push(new Producto("DELIA", "Gris" , 37, false));
productos.push(new Producto("CIRSE", "Blanco" , 36, false));
console.log(productos);



function buscarProducto(nombre, talle){
    return nombre.find(objeto => objeto.nombre === talle.toUpperCase());
}
for (let index = 0; index < 3; index++) {
productos.push(new Producto("GAIA", "Rosa" , 38, true));
let busqueda = buscarProducto(productos, prompt('INGRESAR NOMBRE DEL ZAPATO \n\n 1- ATHENEA \n\n 2- AURORA \n\n 3- DELIA \n\n 4- GAIA'));
    if(busqueda != undefined){
        alert('nombre '+ busqueda.nombre+' color '+ busqueda.color+' talle '+ busqueda.talle);
    }else{
        alert('NO EXISTE ZAPATO CON ESE NOMBRE');
    }
}
console.log(buscarProducto);



/* class Jugador {
    constructor(nombre, camiseta, edad, lesionado) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}
const jugadores = [];
jugadores.push(new Jugador("BART", 15 , 11, false));
jugadores.push(new Jugador("NELSON", 2 , 18, false));
jugadores.push(new Jugador("MILHOUSE", 68 , 12, true));
jugadores.push(new Jugador("MARTIN", 0 , 11, false));
jugadores.push(new Jugador("ROD", 98 , 12, false));
console.log(jugadores);

function buscarJugador(equipo, jugador){
    return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarJugador(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if(busqueda != undefined){
        alert('JUGADOR '+busqueda.nombre+' CAMISETA '+busqueda.camiseta+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }
}
 */
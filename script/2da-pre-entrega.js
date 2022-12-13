let zapato1 = 1;
let zapato2 = 2;
let zapato3 = 3;
let zapato4 = 4;

let nombre = prompt("Por favor, ingrese su nombre...");
if (nombre == "") {
    alert("No ingresaste nada");
}
else {
    alert("Hola " + nombre);
}

const carrito = []

function elegirZapato() {

    let zapato;
        do {
        zapato = parseInt(prompt("Ingrese el zapato que mas le guste.\n\nEjemplo seleccione '1' para Top.\n\n1- Zapato1\n2- Zapato2\n3- Zapato3\n4- Zapato4"));
    } while (zapato !=1 && zapato !=2 && zapato !=3 && zapato !=4);
    switch (zapato) {
        case 1:
        return "zapato1";
        case 2:
        return "zapato2";
        case 3:
        return "zapato3";
        case 4:
        return "zapato4";

        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            break;
    }
}



// PRODUCTOS
const productos = [
    // Borcegos
    {
        id: "borcego-01",
        titulo: "Borcego 01",
        imagen: "./img/borcegos/01.JPG",
        categoria: {
            nombre: "Borcegos",
            id: "borcegos"
        },
        precio: 1000
    },
    {
        id: "borcego-02",
        titulo: "Borcego 02",
        imagen: "./img/borcegos/02.JPG",
        categoria: {
            nombre: "Borcegos",
            id: "borcego"
        },
        precio: 1000
    },
    {
        id: "borcego-03",
        titulo: "Borcego 03",
        imagen: "./img/borcegos/03.jpeg",
        categoria: {
            nombre: "Borcegos",
            id: "borcego"
        },
        precio: 1000
    },
    {
        id: "borcego-04",
        titulo: "Borcego 04",
        imagen: "./img/borcegos/04.jpg",
        categoria: {
            nombre: "Borcegos",
            id: "borcegos"
        },
        precio: 1000
    },
    {
        id: "borcego-05",
        titulo: "Borcego 05",
        imagen: "./img/borcegos/05.PNG",
        categoria: {
            nombre: "Borcegos",
            id: "borcegos"
        },
        precio: 1000
    },
    // Sandalias
    {
        id: "sandalia-01",
        titulo: "Sandalia 01",
        imagen: "./img/sandalias/01.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-02",
        titulo: "Sandalia 02",
        imagen: "./img/sandalias/02.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-03",
        titulo: "Sandalia 03",
        imagen: "./img/sandalias/03.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalias-04",
        titulo: "Sandalias 04",
        imagen: "./img/sandalias/04.jpeg",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },
    {
        id: "sandalia-05",
        titulo: "Sandalia 05",
        imagen: "./img/sandalias/05.JPG",
        categoria: {
            nombre: "Sandalias",
            id: "sandalias"
        },
        precio: 1000
    },

    // Texanas
    {
        id: "texana-01",
        titulo: "Texana 01",
        imagen: "./img/texanas/01.JPEG",
        categoria: {
            nombre: "Texanas",
            id: "texanas"
        },
        precio: 1000
    },
    {
        id: "texana-02",
        titulo: "Texanas 02",
        imagen: "./img/texanas/02.JPEG",
        categoria: {
            nombre: "Texanas",
            id: "texanas"
        },
        precio: 1000
    },
    {
        id: "texana-03",
        titulo: "Texana 03",
        imagen: "./img/texanas/03.JPG",
        categoria: {
            nombre: "Texanas",
            id: "texanas"
        },
        precio: 1000
    },
    {
        id: "texana-04",
        titulo: "Texana 04",
        imagen: "./img/texanas/04.webp",
        categoria: {
            nombre: "Texanas",
            id: "texanas"
        },
        precio: 1000
    },
    {
        id: "texana-05",
        titulo: "Texana 05",
        imagen: "./img/texanas/05.webp",
        categoria: {
            nombre: "Texanas",
            id: "texanas"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
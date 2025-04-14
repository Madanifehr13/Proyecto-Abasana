// main.js
const carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    const botonesCompra = document.querySelectorAll('.btn1');
    botonesCompra.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const producto = boton.parentElement.querySelector('h2').textContent;
            carrito.push(producto);
            alert(`Agregado al carrito: ${producto}`);
        });
    });

    const botonVerCarrito = document.getElementById('verCarrito');
    botonVerCarrito.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('El carrito está vacío.');
        } else {
            alert(`Productos en el carrito: ${carrito.join(', ')}`);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Aquí tu código para que funcione correctamente
    console.log("El DOM está listo y el JavaScript funciona.");
});

const image = document.getElementById('image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const close = document.getElementById('close');

// Abrir modal al hacer clic en la imagen
image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
});

// Cerrar modal al hacer clic en la "x"
close.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

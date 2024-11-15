// Obtener el modal y la imagen modal
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var closeModal = document.getElementById("closeModal");

// Obtener todas las imágenes de la galería
var images = document.querySelectorAll(".gallery img");

// Agregar un event listener para cada imagen
images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Cerrar el modal cuando se haga clic en el botón de cerrar
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

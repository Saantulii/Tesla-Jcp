function jajamodal(nombre, id, element) {
    // Seleccionamos el modal y el contenedor de contenido
    var modal = document.getElementById("modaLoco");
    var modalContent = document.querySelector(".el-amor-q-no-le-declare-a-ella");
    var closeBtn = document.querySelector(".chau.btn");

    // Establecer solo el nombre de la autoridad en el modal
    modalContent.querySelector("h3").textContent = nombre;

    // Obtener la imagen de la autoridad (el <img> dentro de la autoridad que fue clickeada)
    var img = element.querySelector("img").src;

    // Eliminar cualquier imagen previa y agregar la nueva imagen al modal
    var imgElement = modalContent.querySelector("img");
    if (imgElement) {
        imgElement.src = img;
    } else {
        var newImgElement = document.createElement("img");
        newImgElement.src = img;
        modalContent.prepend(newImgElement);
    }

    // Mostrar el modal
    modal.classList.add("show");

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeBtn.onclick = function() {
        modal.classList.remove("show");
    };

    // También cerramos el modal si el usuario hace clic fuera del contenido
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    };
}
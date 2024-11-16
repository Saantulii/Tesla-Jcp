function mostrarModal(nombre, numero) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');

    modal.style.display = 'flex';
    modalImg.textContent = numero;
    modalName.textContent = nombre;
}

function cerrarModal(event) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');

    // Verifica si el clic ocurrió fuera del contenido del modal
    if (!modalContent.contains(event.target) || event.target.classList.contains('close-btn')) {
        modal.style.display = 'none';
    }
}

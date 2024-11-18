// Selecciona el botón de buscar y el input de búsqueda
const searchButton = document.getElementById('search-button');
const searchInput = document.querySelector('.input');

// Función para manejar la búsqueda
function handleSearch() {
    // Normaliza el texto ingresado en el campo de búsqueda
    const searchText = normalizeText(searchInput.value);

    // Variable para guardar la URL de la página encontrada
    let foundPage = null;

    // Recorre el objeto pagesData para buscar coincidencias
    for (const page in pagesData) {
        // Normaliza el texto de cada página
        const pageTexts = pagesData[page].map(text => normalizeText(text));
        // Verifica si alguno de los textos de la página incluye el texto buscado
        if (pageTexts.some(text => text.includes(searchText))) {
            foundPage = page; // Guarda la página que coincide
            break; // Salir del bucle una vez que se encuentra una coincidencia
        }
    }

    // Si se encuentra una página, redirige al usuario
    if (foundPage) {
        window.location.href = foundPage; // Redirigir a la página encontrada
    } else {
        // Mostrar mensaje si no se encuentra ninguna coincidencia
        document.querySelector('.search-message').style.display = 'block';
    }
}

// Agrega un evento al botón de buscar
searchButton.addEventListener('click', handleSearch);

// Agrega un evento al campo de entrada para capturar la tecla Enter
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleSearch(); // Llama a la función de búsqueda
    }
});

// Evento para cerrar el mensaje de búsqueda
document.querySelector('.close-message').addEventListener('click', function () {
    document.querySelector('.search-message').style.display = 'none'; // Ocultar el mensaje al hacer clic en cerrar
});

// Función para normalizar texto eliminando acentos y convirtiendo a minúsculas
function normalizeText(text) {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normaliza el texto
}


// Asegúrate de que el contenido de data.js esté disponible aquí
document.addEventListener('DOMContentLoaded', function() {
    // Crear un contenedor para los cursos
    const container = document.createElement('div');
    container.className = 'course-container'; // Asigna una clase para estilos
    
    // Datos de horarios (días y grupos)
    pagesData["cursos.html"] = [
        "Lunes","Aula",
        "Martes","Aula",
        "Miércoles","Aula",
        "Jueves","Aula",
        "Viernes","Aula",
        "Grupo A","Lunes",
        "Grupo A","Martes",
        "Grupo A","Miércoles",
        "Grupo A","Jueves",
        "Grupo A","Viernes",
        "Grupo B","Lunes",
        "Grupo B","Martes",
        "Grupo B","Miércoles",
        "Grupo B","Jueves",
        "Grupo B","Viernes"
    ];

    // Agregar cada horario al contenedor
    pagesData["horario.html"].forEach(schedule => {
        const scheduleElement = document.createElement('p'); // Crear un elemento para cada horario
        scheduleElement.textContent = schedule; // Asignar el texto del horario
        container.appendChild(scheduleElement); // Añadir el horario al contenedor
    });

    document.body.appendChild(container); // Añadir el contenedor al body o un lugar específico
});

// Función para abrir el modal y expandir la imagen
function openImage() {
    const modal = document.getElementById('modal');
    const modalImg = document.querySelector('.modal-img');

    modal.classList.add('show');
    modalImg.classList.add('expand');
}

// Función para cerrar el modal
function closeImage() {
    const modal = document.getElementById('modal');
    const modalImg = document.querySelector('.modal-img');

    modal.classList.remove('show');
    modalImg.classList.remove('expand');
}


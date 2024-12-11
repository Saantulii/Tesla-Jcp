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

// Función para cerrar el modal DE LA IMAGEN
function closeImage() {
    const modal = document.getElementById('modal');
    const modalImg = document.querySelector('.modal-img');

    modal.classList.remove('show');
    modalImg.classList.remove('expand');
}

// Función para abrir un modal
function openModal(modalId) {
    // Seleccionar el modal por su ID
    const modal = document.getElementById(`${modalId}-modal`);
    if (modal) {
        modal.style.display = "block"; // Mostrar el modal
    }
}

// Función para cerrar un modal
function closeModal(modalId) {
    // Seleccionar el modal por su ID
    const modal = document.getElementById(`${modalId}-modal`);
    if (modal) {
        modal.style.display = "none"; // Ocultar el modal
    }
}

// Detectar clic fuera del contenido del modal para cerrarlo
window.onclick = function(event) {
    // Obtener todos los modales
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Ocultar modal si se hace clic fuera del contenido
        }
    });
};

// Función para abrir el modal
function openModal(modalId) {
    // Mostrar el modal
    var modal = document.getElementById(modalId + '-modal');
    modal.style.display = 'block';  // Mostrar el modal
  }
  
  // Función para cerrar el modal
  function closeModal(modalId) {
    // Obtener el modal
    var modal = document.getElementById(modalId + '-modal');
    
    // Agregar clase 'closing' para la animación de cierre
    modal.classList.add('closing');
    
    // Después de la animación, ocultar el modal
    setTimeout(function() {
      modal.style.display = 'none';  // Ocultar el modal
      modal.classList.remove('closing');  // Eliminar la clase 'closing' para la próxima vez
    }, 500);  // 500ms es la duración de la animación
  }
  
  // Cerrar el modal si se hace clic fuera de él
  window.addEventListener('click', function(event) {
    var modals = document.querySelectorAll('.modal-nav');  // Obtener todos los modales con la clase 'modal-nav'
    modals.forEach(function(modal) {
      if (event.target === modal) {
        var modalId = modal.id.replace('-modal', '');  // Obtener el ID del modal
        closeModal(modalId);  // Llamar a la función de cerrar modal
      }
    });
  });
  
  // Cerrar el modal si se presiona la tecla "Esc"
  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      var openModals = document.querySelectorAll('.modal-nav[style="display: block;"]');  // Buscar modales visibles
      openModals.forEach(function(modal) {
        var modalId = modal.id.replace('-modal', '');  // Obtener el ID del modal
        closeModal(modalId);  // Cerrar todos los modales visibles
      });
    }
  });
  
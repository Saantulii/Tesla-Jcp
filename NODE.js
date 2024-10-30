// ESTO ES PARA EL BUSCADOR EN TODOS LOS HTML


document.getElementById('search-button').addEventListener('click', function() {
    // Normaliza el texto ingresado en el campo de búsqueda
    const searchText = normalizeText(document.querySelector('.input').value);
    
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
});

// Evento para cerrar el mensaje de búsqueda
document.querySelector('.close-message').addEventListener('click', function() {
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
    // Agregar cada curso al contenedor
    pagesData["cursos.html"].forEach(curso => {
        const cursoElement = document.createElement('h2'); // Crear un elemento h2 para cada curso
        cursoElement.textContent = curso; // Asignar el nombre del curso
        container.appendChild(cursoElement); // Añadir el elemento del curso al contenedor
    });

    document.body.appendChild(container); // Añadir el contenedor a tu body o un lugar específico
});

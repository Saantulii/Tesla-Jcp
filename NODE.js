// ESTO ES PARA EL BUSCADOR EN TODOS LOS HTML

document.getElementById('search-button').addEventListener('click', function() {
    const searchText = normalizeText(document.querySelector('.input').value);
    const items = document.querySelectorAll('a, h2, h3, h4, .class');
    let found = false;
    
    // Limpiar estilos previos y mensaje
    document.querySelector('.search-message').style.display = 'none';
    items.forEach(item => {
        item.style.backgroundColor = '';
        item.style.color = '';
    });

    if (!searchText) return;

    items.forEach(item => {
        const itemText = normalizeText(item.textContent);

        if (itemText.includes(searchText)) {
            item.style.backgroundColor = 'yellow';
            item.style.color = 'black';

            if (!found) {
                // Desplazar a la primera coincidencia encontrada
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            }
        }
    });

    // Mostrar mensaje si no se encuentra ninguna coincidencia
    if (!found) {
        document.querySelector('.search-message').style.display = 'block';
    }
});

// Evento para cerrar el mensaje de búsqueda
document.querySelector('.close-message').addEventListener('click', function() {
document.querySelector('.search-message').style.display = 'none';
});


// Función para normalizar texto eliminando acentos y convirtiendo a minúsculas
function normalizeText(text) {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
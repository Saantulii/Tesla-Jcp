const pagesData = {
    "index.html": [
        "¡Bienvenidos a Tesla José C. Paz! Nos complace recibirte en nuestra comunidad educativa.",
        "En nuestra institución, creemos en la formación integral de nuestros estudiantes.",
        "Fomentamos la curiosidad intelectual y el pensamiento crítico.",
        "inicio",
        "Ubicación: José C. Paz, Buenos Aires",
    ],

    "1ro 1ra.html": ["1ro 1ra", "Horario de 1ro 1ra"],
    "1ro 2da.html": ["1ro 2da"],
    "1ro 3ra.html": ["1ro 3ra"],
    "1ro 4ta.html": ["1ro 4ta"],
    "2do 1ra.html": ["2do 1ra"],
    "2do 2da.html": ["2do 2da"],
    "2do 3ra.html": ["2do 3ra"],
    "2do 4ta.html": ["2do 4ta"],
    "3ro 1ra.html": ["3ro 1ra"],
    "3ro 2da.html": ["3ro 2da"],
    "3ro 3ra.html": ["3ro 3ra"],
    "3ro 4ta.html": ["3ro 4ta"],
    "4to 1ra.html": ["4to 1ra"],
    "4to 2da.html": ["4to 2da"],
    "4to 3ra.html": ["4to 3ra"],
    "4to 4ta.html": ["4to 4ta"],
    "4to 5ta.html": ["4to 5ta"],
    "5to 1ra.html": ["5to 1ra"],
    "5to 2da.html": ["5to 2da"],
    "5to 3ra.html": ["5to 3ra"],
    "6to 1ra.html": ["6to 1ra"],
    "6to 2da.html": ["6to 2da"],
    "6to 3ra.html": ["6to 3ra"],
    "7mo 1ra.html": ["7mo 1ra"],
    "7mo 2da.html": ["7mo 2da"],
    "7mo 3ra.html": ["7mo 3ra"],

    "novedades.html": [
        "Últimas noticias",
        "Eventos recientes",
        "Nuevas propuestas educativas."
    ],
    "nosotros.html": [
        "Sobre Nosotros",
        "Tesla José C. Paz tiene una historia de excelencia educativa.",
        "Nuestro equipo docente está comprometido con el desarrollo personal y profesional de los estudiantes.",
        "Estamos aquí para ayudarte en todo lo que necesites.",
        "Ubicación: José C. Paz, Buenos Aires",
        "Historia del Colegio",
        "Misión y Visión",
        "Valores Institucionales",
        "Equipo Docente",
        "Infraestructura",
        "Actividades y Programas",
        "Testimonios",
        "Contacto",
        "Fotografías",
        "Logros y Reconocimientos",
    ],

    "calendario.html": [
        "Calendario",
        "Feriado",
        "Días festivos del Colegio",
        "Trasladables",
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ],

    "cd.html": [
        "Centro de estudiantes",
        "Nuestras Propuestas",
        "Próximos Eventos",
        "presidentes",
    ],
    
    "login.html": [
        "Iniciar sesión",
        "Registrarse",
        "login",
    ],

    "previas.html": [
        "Previas",
    ],

    "equipo.html": [
        "directivo",
        "directivos",
    ],

    "nikolatesla.html": [
        "nikola tesla",
        "nicola tesla",
        "mi cola apesta"
    ]

};

document.addEventListener("DOMContentLoaded", function() {
    const moreButton = document.getElementById("moreButton");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Agrega un evento de clic al botón "Más"
    moreButton.addEventListener("click", function() {
        // Alterna la clase 'show' para mostrar/ocultar el submenú
        dropdownContent.classList.toggle("show");
    });
});

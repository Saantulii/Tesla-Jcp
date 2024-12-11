const pagesData = {
    "index.php": [
        "¡Bienvenidos a Tesla José C. Paz! Nos complace recibirte en nuestra comunidad educativa.",
        "En nuestra institución, creemos en la formación integral de nuestros estudiantes.",
        "Fomentamos la curiosidad intelectual y el pensamiento crítico.",
        "inicio",
        "Ubicación: José C. Paz, Buenos Aires",
    ],

    "1ro 1ra.php": ["1ro 1ra", "Horario de 1ro 1ra"],
    "1ro 2da.php": ["1ro 2da"],
    "1ro 3ra.php": ["1ro 3ra"],
    "1ro 4ta.php": ["1ro 4ta"],
    "2do 1ra.php": ["2do 1ra"],
    "2do 2da.php": ["2do 2da"],
    "2do 3ra.php": ["2do 3ra"],
    "2do 4ta.php": ["2do 4ta"],
    "3ro 1ra.php": ["3ro 1ra"],
    "3ro 2da.php": ["3ro 2da"],
    "3ro 3ra.php": ["3ro 3ra"],
    "3ro 4ta.php": ["3ro 4ta"],
    "4to 1ra.php": ["4to 1ra"],
    "4to 2da.php": ["4to 2da"],
    "4to 3ra.php": ["4to 3ra"],
    "4to 4ta.php": ["4to 4ta"],
    "4to 5ta.php": ["4to 5ta"],
    "5to 1ra.php": ["5to 1ra"],
    "5to 2da.php": ["5to 2da"],
    "5to 3ra.php": ["5to 3ra"],
    "6to 1ra.php": ["6to 1ra"],
    "6to 2da.php": ["6to 2da"],
    "6to 3ra.php": ["6to 3ra"],
    "7mo 1ra.php": ["7mo 1ra"],
    "7mo 2da.php": ["7mo 2da"],
    "7mo 3ra.php": ["7mo 3ra"],

    "novedades.php": [
        "Últimas noticias",
        "Eventos recientes",
        "Nuevas propuestas educativas."
    ],
    "nosotros.php": [
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

    "calendario.php": [
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

    "cd.php": [
        "Centro de estudiantes",
        "Nuestras Propuestas",
        "Próximos Eventos",
        "presidentes",
    ],
    
    "login.php": [
        "Iniciar sesión",
        "Registrarse",
        "login",
    ],

    "previas.php": [
        "Previas",
    ],

    "equipo.php": [
        "directivo",
        "directivos",
    ],

    "nikolatesla.php": [
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

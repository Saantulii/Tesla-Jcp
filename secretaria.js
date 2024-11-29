document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const curso = document.getElementById('curso').value;
    const email = document.getElementById('email').value;

    const estudiantesList = document.getElementById('estudiantes');
    const nuevoEstudiante = document.createElement('li');
    nuevoEstudiante.textContent = `${nombre} - ${curso} - ${email}`;
    estudiantesList.appendChild(nuevoEstudiante);

    document.getElementById('studentForm').reset();
});

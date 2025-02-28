// Datos de usuarios (en un caso real, esto se almacenaría en una base de datos segura)
const usuarios = {
    "usuario1": "password123", // Usuario 1
    "usuario2": "password456", // Usuario 2
    "usuario3": "password789"  // Usuario 3
};

// Obtener elementos del DOM
const loginForm = document.getElementById("loginForm");
const loginSection = document.getElementById("loginSection");
const notaFormSection = document.getElementById("notaFormSection");
const errorMessage = document.getElementById("errorMessage");
const notaForm = document.getElementById("notaForm");

// Función para manejar el login
function handleLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar las credenciales
    if (usuarios[username] && usuarios[username] === password) {
        // Si las credenciales son correctas, mostramos el editor de notas
        loginSection.style.display = "none";
        notaFormSection.style.display = "block";
    } else {
        // Si las credenciales son incorrectas, mostramos un mensaje de error
        errorMessage.style.display = "block";
    }
}

// Evento para manejar el submit del formulario de login
loginForm.addEventListener("submit", handleLogin);

// Función para manejar el submit del formulario de notas y generar el archivo .md
function handleNotaSubmit(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Obtener los valores del formulario
    const titulo = document.getElementById("titulo").value;
    const subtitulo_1 = document.getElementById("subtitulo_1").value;
    const parrafo_1 = document.getElementById("parrafo_1").value;
    const subtitulo_2 = document.getElementById("subtitulo_2").value;
    const parrafo_2 = document.getElementById("parrafo_2").value;

    // Crear el contenido para el archivo .md
    const contenidoMD = `---
titulo: ${titulo}
descripcion: ${parrafo_1.substring(0, 100)}...  # Extracto del primer párrafo
fecha_publicacion: ${new Date().toISOString().split('T')[0]}  # Fecha actual en formato YYYY-MM-DD
publicado_por: Nombre del autor
rol: Marketing
subtitulo_1: ${subtitulo_1}
parrafo_1: ${parrafo_1}
subtitulo_2: ${subtitulo_2}
parrafo_2: ${parrafo_2}
---`;

    // Crear un Blob para el archivo .md
    const blob = new Blob([contenidoMD], { type: 'text/markdown' });

    // Crear un enlace para descargar el archivo
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${titulo.replace(/\s+/g, '_').toLowerCase()}.md`;  // Nombre del archivo .md basado en el título
    link.click();  // Iniciar la descarga
}

// Evento para manejar el submit del formulario de notas
notaForm.addEventListener("submit", handleNotaSubmit);

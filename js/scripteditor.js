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

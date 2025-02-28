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

// Función para manejar el formulario y enviar los datos al backend
function handleNotaForm(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto

    const titulo = document.getElementById("titulo").value;
    const subtitulo_1 = document.getElementById("subtitulo_1").value;
    const parrafo_1 = document.getElementById("parrafo_1").value;
    const subtitulo_2 = document.getElementById("subtitulo_2").value;
    const parrafo_2 = document.getElementById("parrafo_2").value;

    // Datos a enviar al servidor
    const data = {
        titulo,
        subtitulo_1,
        parrafo_1,
        subtitulo_2,
        parrafo_2
    };

    // Enviar los datos al backend
    fetch('http://localhost:3000/saveNote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Nota guardada correctamente');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al guardar la nota');
    });
}

// Conectar el formulario de notas con la función handleNotaForm
document.getElementById("notaForm").addEventListener("submit", handleNotaForm);

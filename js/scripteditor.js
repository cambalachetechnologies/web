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

    // Enviar los datos al backend de Netlify
    fetch('/.netlify/functions/saveNote', {
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

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint para guardar el archivo .md
app.post('/saveNote', (req, res) => {
    const { titulo, subtitulo_1, parrafo_1, subtitulo_2, parrafo_2 } = req.body;

    // Crear el contenido del archivo .md
    const markdownContent = `
# ${titulo}

## ${subtitulo_1}
${parrafo_1}

## ${subtitulo_2}
${parrafo_2}
    `;

    // Ruta donde se guardarán los archivos
    const filePath = path.join(__dirname, 'notes', `${titulo.replace(/\s+/g, '_').toLowerCase()}.md`);

    // Guardar el archivo
    fs.writeFile(filePath, markdownContent, (err) => {
        if (err) {
            return res.status(500).send('Error al guardar la nota');
        }
        res.status(200).send('Nota guardada correctamente');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

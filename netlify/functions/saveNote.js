const fs = require('fs');
const path = require('path');

// Función para manejar la solicitud POST
exports.handler = async function(event, context) {
    if (event.httpMethod === 'POST') {
        try {
            // Obtener los datos del cuerpo de la solicitud
            const { titulo, subtitulo_1, parrafo_1, subtitulo_2, parrafo_2 } = JSON.parse(event.body);

            // Crear el contenido del archivo .md
            const markdownContent = `
# ${titulo}

## ${subtitulo_1}
${parrafo_1}

## ${subtitulo_2}
${parrafo_2}
            `;

            // Definir la ruta donde se guardará el archivo .md
            const filePath = path.join(__dirname, '../../content/notas', `${titulo.replace(/\s+/g, '_').toLowerCase()}.md`);

            // Escribir el archivo en el sistema de archivos de Netlify (sólo persiste durante la ejecución)
            fs.writeFileSync(filePath, markdownContent);

            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Nota guardada correctamente' }),
            };
        } catch (err) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Error al guardar la nota', error: err.message }),
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Método no permitido' }),
        };
    }
};

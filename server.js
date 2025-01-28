const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/validate-recaptcha", async (req, res) => {
  const { token } = req.body; // Token enviado desde el cliente
  const apiKey = "TU_API_KEY_DE_GOOGLE"; // Reemplaza con tu API Key
  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/web-c-tech-1738067301735/assessments?key=${apiKey}`;

  try {
    const response = await axios.post(url, {
      event: {
        token: token,
        expectedAction: "submit_form",
        siteKey: "6LeSNsUqAAAAAPaYycj4-442l4Zzy5cFr__XwqXM",
      },
    });

    if (response.data.tokenProperties.valid) {
      res.status(200).json({ success: true, message: "Token válido." });
    } else {
      res.status(400).json({ success: false, message: "Token inválido." });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error en la validación." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

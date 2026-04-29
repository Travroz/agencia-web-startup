require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend'); // Importar Resend

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend te da este por defecto para probar
      to: 'jygsolutionss@gmail.com', // A donde quieres que llegue
      subject: `🔥 Nueva Cotización: ${nombre}`,
      html: `<p>Nombre: ${nombre}</p><p>Email: ${email}</p><p>Mensaje: ${mensaje}</p>`
    });

    res.status(200).json({ success: true, message: 'Enviado vía Resend API' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
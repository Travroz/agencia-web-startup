require('dotenv').config(); // Carga las variables del archivo .env
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Importamos nodemailer

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Configuración del "Transportador" de correos
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true para puerto 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    // Esto ayuda a evitar errores de conexión en ciertos entornos cloud
    rejectUnauthorized: false
  }
});

app.get('/', (req, res) => {
  res.send('Servidor de la Agencia funcionando correctamente.');
});

app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  
  try {
    // Configuramos cómo se verá el correo que te llegará a ti
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Te lo envías a ti mismo
      subject: `🔥 Nueva Cotización de Agencia: ${nombre}`,
      text: `Has recibido un nuevo mensaje desde tu Landing Page.\n\nNombre del cliente: ${nombre}\nCorreo de contacto: ${email}\n\nMensaje:\n${mensaje}`
    };

    // Le pedimos a Nodemailer que envíe el correo
    await transporter.sendMail(mailOptions);
    
    console.log(`Correo enviado exitosamente para el cliente: ${nombre}`);
    
    res.status(200).json({ 
      success: true, 
      message: 'Mensaje recibido con éxito. Te contactaremos pronto.' 
    });
    
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Hubo un error al procesar tu solicitud.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en el puerto ${PORT}`);
});
import { useState } from 'react';

export default function Contact() {
  // Aquí guardaremos lo que el cliente escriba
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Esta función actualiza los datos en tiempo real
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Esta función se ejecuta al hacer clic en "Enviar"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    try {
      // Usamos fetch para enviar los datos al backend
      const response = await fetch('https://agencia-web-startup.onrender.com/api/contacto', {
        method: 'POST', // Método de envío
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convertimos los datos a texto JSON
      });

      const data = await response.json(); // Esperamos la respuesta del servidor

      if (data.success) {
        alert('¡Mensaje enviado! ' + data.message);
        // Limpiamos el formulario
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        alert('Hubo un problema al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('Error de conexión con el servidor. Verifica que el backend esté encendido.');
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto bg-[#111111] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Trabajemos <span className="text-brand-primary">Juntos</span></h2>
          <p className="text-gray-400">
            Cuéntanos sobre tu proyecto y te responderemos a la brevedad con una propuesta a medida.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo Nombre */}
            <div className="flex flex-col">
              <label htmlFor="nombre" className="mb-2 text-sm text-gray-400 font-medium">Nombre Completo</label>
              <input 
                type="text" 
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="bg-brand-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-white"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            {/* Campo Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm text-gray-400 font-medium">Correo Electrónico</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-brand-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-white"
                placeholder="juan@empresa.com"
              />
            </div>
          </div>

          {/* Campo Mensaje */}
          <div className="flex flex-col">
            <label htmlFor="mensaje" className="mb-2 text-sm text-gray-400 font-medium">¿En qué podemos ayudarte?</label>
            <textarea 
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="5"
              className="bg-brand-dark border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-white resize-none"
              placeholder="Describe brevemente tu idea o necesidad..."
            ></textarea>
          </div>

          {/* Botón de Envío */}
          <button 
            type="submit" 
            className="w-full bg-brand-primary hover:brightness-110 text-white font-bold py-4 rounded-lg transition-all text-lg"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
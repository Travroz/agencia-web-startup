export default function Services() {
  const services = [
    {
      title: "Desarrollo Web a Medida",
      description: "Creamos páginas rápidas, responsivas y optimizadas. Desde landing pages hasta sitios corporativos completos que representan tu marca.",
      icon: "💻"
    },
    {
      title: "Hosting y Despliegue",
      description: "Alojamiento seguro y de alto rendimiento para que tu sitio web esté siempre disponible, sin complicaciones técnicas para ti.",
      icon: "🚀"
    },
    {
      title: "Chatbots y Automatización",
      description: "Integramos asistentes virtuales con Inteligencia Artificial para atender a tus clientes 24/7 y mejorar la comunicación de tu negocio.",
      icon: "🤖"
    }
  ];

  return (
    <section id="servicios" className="py-24 px-4 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros <span className="text-brand-primary">Servicios</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para impulsar tu presencia digital y optimizar tus procesos.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-dark p-8 rounded-2xl border border-gray-800 hover:border-brand-primary transition-colors duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
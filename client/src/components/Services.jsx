// 1. Importa la imagen de fondo de la oficina (la que generamos antes)
import servicesBg from '../assets/Gemini_Generated_Image_mur76qmur76qmur7.png';
// 2. Importa las imágenes para cada servicio
 import webImg from '../assets/web.png';
 import hostingImg from '../assets/hosting.png';
 import aiImg from '../assets/ia.png';

export default function Services() {
  const services = [
    {
      title: "Desarrollo Web a Medida",
      description: "Creamos páginas rápidas, responsivas y optimizadas. Desde landing pages hasta sitios corporativos completos.",
      image: webImg, // Reemplazar por webImg
    },
    {
      title: "Hosting y Despliegue",
      description: "Alojamiento seguro y de alto rendimiento para que tu sitio web esté siempre disponible sin complicaciones.",
      image: hostingImg, // Reemplazar por hostingImg
    },
    {
      title: "Chatbots y Automatización",
      description: "Integramos asistentes virtuales con Inteligencia Artificial para atender a tus clientes 24/7.",
      image: aiImg, // Reemplazar por aiImg
    }
  ];

  return (
    <section 
      id="servicios" 
      className="relative py-24 px-4 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Efecto Parallax opcional
      }}
    >
      {/* Overlay oscuro para que las tarjetas resalten sobre el fondo de la oficina */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nuestros <span className="text-brand-primary">Servicios</span></h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para impulsar tu presencia digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-dark/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand-primary transition-all duration-300 group"
            >
              {/* Contenedor de Imagen de Servicio (Reemplaza al emoji) */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-brand-primary/30 group-hover:border-brand-primary transition-colors">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
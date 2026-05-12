// 1. Importa la imagen desde tu carpeta de assets
import heroBg from '../assets/Gemini_Generated_Image_4kqk494kqk494kqk.png';

export default function Hero() {
  return (
    <section 
      className="relative flex flex-col items-center justify-center text-center py-32 px-4 text-white min-h-[85vh] overflow-hidden"
      style={{
        // 2. Fondo con la imagen profesional
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 3. Capa oscura (Overlay) para que el texto sea siempre legible */}
      <div className="absolute inset-0 bg-black/75 z-0"></div>

      {/* 4. Contenido (con z-10 para quedar sobre la capa oscura) */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Llevamos tu idea al <span className="text-brand-primary">siguiente nivel</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
          Somos un equipo de desarrolladores enfocados en crear soluciones web modernas, rápidas y a la medida de tu negocio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contacto" 
            className="bg-brand-primary hover:brightness-110 px-8 py-3 rounded-full font-semibold transition-all text-lg inline-block shadow-lg"
          >
            Iniciar Proyecto
          </a>
          <a 
            href="#servicios" 
            className="border border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-semibold transition-all text-lg inline-block"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  )
}
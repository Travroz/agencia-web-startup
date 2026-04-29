export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-brand-dark text-white min-h-[85vh]">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        Llevamos tu idea al <span className="text-brand-primary">siguiente nivel</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
        Somos un equipo de desarrolladores enfocados en crear soluciones web modernas, rápidas y a la medida de tu negocio.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Cambiamos los botones por etiquetas <a> apuntando a sus respectivas secciones */}
        <a 
          href="#contacto" 
          className="bg-brand-primary hover:brightness-110 px-8 py-3 rounded-full font-semibold transition-all text-lg inline-block"
        >
          Iniciar Proyecto
        </a>
        <a 
          href="#servicios" 
          className="border border-gray-600 hover:border-white hover:bg-white hover:text-brand-dark px-8 py-3 rounded-full font-semibold transition-all text-lg inline-block"
        >
          Ver Servicios
        </a>
      </div>
    </section>
  )
}
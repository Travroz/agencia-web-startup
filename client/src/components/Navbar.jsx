export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-brand-dark text-white border-b border-gray-800">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        Tu<span className="text-brand-primary">Agencia.</span>
      </div>
      
      {/* Enlaces de navegación (ocultos en móviles, visibles en pantallas medianas o más) */}
      <div className="hidden md:flex gap-8 font-medium">
        <a href="#servicios" className="hover:text-brand-primary transition-colors">Servicios</a>
        <a href="#equipo" className="hover:text-brand-primary transition-colors">Nuestro Equipo</a>
        <a href="#contacto" className="hover:text-brand-primary transition-colors">Contacto</a>
      </div>

      {/* Botón Call to Action */}
      <button className="bg-brand-primary hover:brightness-110 px-5 py-2 rounded-md font-semibold transition-all">
        Cotizar
      </button>
    </nav>
  )
}
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      
      {/* Footer simple integrado */}
      <footer className="bg-[#0a0a0a] text-gray-500 py-8 text-center border-t border-gray-900">
        <p>© {new Date().getFullYear()} JyGsolutions. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
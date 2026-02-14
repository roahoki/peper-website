'use client';

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Logística que Protege
          <br />
          <span className="text-blue-400">Tu Carga de Valor</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transporte especializado con enfoque en seguridad, puntualidad y cuidado extremo 
          de productos terminados para el sector retail.
        </p>
        
        <button 
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
        >
          Cotizar mi Ruta
        </button>
      </div>
    </section>
  );
}

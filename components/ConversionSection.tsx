'use client';

export default function ConversionSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Conversemos sobre sus
          <br />
          <span className="text-blue-400">Necesidades Logísticas</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Diseñamos soluciones a medida para el transporte de productos terminados y retail. 
          Hablemos de cómo podemos optimizar su cadena de suministro.
        </p>
        
        <button 
          onClick={scrollToContact}
          className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
        >
          Agendar una Llamada
        </button>
      </div>
    </section>
  );
}

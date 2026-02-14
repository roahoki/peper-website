export default function FlexProofSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12">
          Partner Logístico Exclusivo de
        </h2>
        
        <div className="flex justify-center items-center">
          {/* Placeholder para el logo de FLEX - se puede reemplazar con imagen real */}
          <div className="bg-white rounded-2xl shadow-2xl p-12 sm:p-16 md:p-20 border-4 border-blue-100">
            <div className="text-6xl sm:text-7xl md:text-8xl font-black text-blue-900 tracking-wider">
              FLEX
            </div>
            <p className="text-sm sm:text-base text-gray-600 mt-4 font-semibold">
              Colchones & Muebles
            </p>
          </div>
        </div>
        
        <p className="mt-12 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Confianza construida través de años de servicio impecable en el transporte 
          de productos de alto valor para el líder del mercado.
        </p>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1 - Marca */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Transportes <span className="text-blue-400">PEPER</span>
            </h3>
            <p className="text-sm text-gray-400">
              Excelencia en logística y transporte especializado.
            </p>
          </div>

          {/* Columna 2 - Enlaces */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <p className="text-sm text-gray-400">
              Email: contacto@transportespeper.cl
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Tel: +56 9 1234 5678
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Transportes PEPER SPA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

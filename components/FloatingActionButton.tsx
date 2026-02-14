'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingActionButton() {
  const handleWhatsAppClick = () => {
    // Reemplazar con el número real de WhatsApp
    const phoneNumber = '56912345678';
    const message = encodeURIComponent('Hola, me gustaría cotizar un servicio de transporte.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    </button>
  );
}

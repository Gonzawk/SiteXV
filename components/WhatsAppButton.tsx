"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({ phone, message }: any) {
  const handleSend = () => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <button
      onClick={handleSend}
      className="w-full py-3 rounded-full bg-[#25D366] text-white font-semibold text-[15px] hover:bg-[#1ebe5d] transition"
    >
      <FaWhatsapp className="inline mr-2" />
      Confirmar asistencia
    </button>
  );
}

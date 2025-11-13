"use client";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationButton({
  label = "Ver ubicación",
}: {
  label?: string;
}) {
  const url = "https://maps.app.goo.gl/w7hnk2V9MswB2ev29";

  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className="w-full py-3 rounded-full bg-[#f38bb0] text-white font-semibold text-[15px] hover:bg-[#e77faa] transition flex items-center justify-center"
    >
      <FaMapMarkerAlt className="mr-2" />
      {label}
    </button>
  );
}

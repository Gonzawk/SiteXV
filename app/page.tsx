"use client";
import Image from "next/image";
import Turntable from "../components/Turntable";
import Countdown from "../components/Countdown";

export default function Invitacion() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5493515551122?text=" +
        encodeURIComponent("¡Hola! Confirmo mi asistencia a los 15 de Bianca. Muchas gracias por la invitación. Aguardo la informacion adicional."),
      "_blank"
    );
  };

  const handleMap = () => {
  const url = "https://maps.app.goo.gl/w7hnk2V9MswB2ev29";
  window.open(url, "_blank");
};


  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "442px",
          height: "2550px",
        }}
      >
        <Image
          src="/plantillafondohd.png"
          alt="Invitación Bianca 15"
          width={442}
          height={5000}
          priority
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "442px",
            height: "auto",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />

        {/* 🎵 Tocadiscos */}
        <div
          style={{
            position: "absolute",
            top: "370px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <Turntable
            width={250}
            rpm={100}
            audioSrc="/tema.mp3"
            coverSrc="/portadadiscoo.png"
            vinylSrc="/discopng.png"
          />
        </div>

        {/* 🕒 CONTADOR DE TIEMPO */}
        <div
          style={{
            position: "absolute",
            top: "920px",          // ← ajustá este valor para moverlo
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            padding: "0 20px",     // 🔥 agrega margen lateral
            zIndex: 10,
          }}
        >
          <Countdown targetDate="2025-12-06T21:00:00-03:00" />
        </div>

        {/* 🔘 CLIC: Ver ubicación */}
        <button
          onClick={handleMap}
          aria-label="Ver ubicación"
          style={{
            position: "absolute",
            top: "1280px",
            left: "10px",
            width: "390px",
            height: "70px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />

        {/* 🔘 CLIC: Confirmar asistencia */}
        <button
          onClick={handleWhatsApp}
          aria-label="Confirmar asistencia"
          style={{
            position: "absolute",
            top: "2150px",
            left: "10px",
            width: "390px",
            height: "65px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
      </div>
    </main>
  );
}

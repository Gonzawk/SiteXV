"use client";
import Image from "next/image";
import Turntable from "../components/Turntable";
import Countdown from "../components/Countdown";

export default function Invitacion() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5493515551122?text=" +
        encodeURIComponent(
          "¡Hola! Confirmo mi asistencia a los 15 de Bianca. Muchas gracias por la invitación. Aguardo la informacion adicional."
        ),
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
          width: "100vw",
          maxWidth: "480px",
          height: "auto",
          margin: "0 auto",
        }}
      >
        <style jsx>{`
          /* === ESCRITORIO SIN CAMBIOS === */
          @media (min-width: 481px) {
            .tocadiscos {
              top: 420px;
              left: 50%;
              transform: translateX(-50%);
              width: 250px;
            }
            .contador {
              top: 1000px;
              left: 50%;
              transform: translateX(-50%);
              width: 80%;
            }
            .btn-ubicacion {
              top: 1390px;
              left: 10px;
              width: 430px;
              height: 70px;
            }
            .btn-confirmar {
              top: 2330px;
              left: 10px;
              width: 430px;
              height: 70px;
            }
          }

          /* === MOBILE CORREGIDO (basado en 6240px reales) === */
          @media (max-width: 480px) {
            .tocadiscos {
              top: 340px;
              left: 50%;
              transform: translateX(-50%);
              width: 52%;
            }

            .contador {
              top: 860px;
              left: 50%;
              transform: translateX(-50%);
              width: 80%;
            }

            .btn-ubicacion {
              top: 1200px;
              left: 2%;
              width: 90%;
              height: 60px;
            }

            .btn-confirmar {
              top: 2010px;
              left: 2%;
              width: 90%;
              height: px;
            }
          }
        `}</style>

        <Image
          src="/plantilla.png"
          alt="Invitación Bianca 15"
          width={1080}
          height={6240}
          priority
          style={{
            width: "100%",
            height: "auto",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
          }}
        />

        <div className="tocadiscos" style={{ position: "absolute", zIndex: 10 }}>
          <Turntable
            width={250}
            rpm={100}
            audioSrc="/tema.mp3"
            coverSrc="/portadadiscoo.png"
            vinylSrc="/discopng.png"
          />
        </div>

        <div
          className="contador"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            padding: "0 20px",
            zIndex: 10,
          }}
        >
          <Countdown targetDate="2025-12-06T21:00:00-03:00" />
        </div>

        <button
          className="btn-ubicacion"
          onClick={handleMap}
          aria-label="Ver ubicación"
          style={{
            position: "absolute",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
        />

        <button
          className="btn-confirmar"
          onClick={handleWhatsApp}
          aria-label="Confirmar asistencia"
          style={{
            position: "absolute",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
        />
      </div>
    </main>
  );
}

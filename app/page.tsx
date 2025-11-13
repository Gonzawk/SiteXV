"use client";
import Image from "next/image";
import Turntable from "../components/Turntable";
import Countdown from "../components/Countdown";

export default function Invitacion() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5493515551122?text=" +
        encodeURIComponent("Hola! Confirmo mi asistencia.")
    );
  };

  const handleMap = () => {
    window.open("https://maps.app.goo.gl/w7hnk2V9MswB2ev29");
  };

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <div className="inv-wrapper">
        <style jsx>{`
          .inv-wrapper {
            position: relative;
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
          }

          .inv-bg {
            width: 100%;
            height: auto;
            display: block;
            pointer-events: none;
            user-select: none;
          }

          /* POSICIONES EXACTAS BASADAS EN PX DEL DISEÑO */
          .tocadiscos {
            position: absolute;
            top: 340px;
            left: 50%;
            transform: translateX(-50%);
            width: 250px;
            z-index: 10;
          }

          .contador {
            position: absolute;
            top: 860px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            z-index: 10;
          }

          .btn-ubicacion {
            position: absolute;
            top: 1200px;
            left: 5%;
            width: 90%;
            height: 60px;
            background: transparent;
            border: none;
            z-index: 20;
          }

          .btn-confirmar {
            position: absolute;
            top: 2010px;
            left: 5%;
            width: 90%;
            height: 60px;
            background: transparent;
            border: none;
            z-index: 20;
          }

          /* ======================================
   📱 Celulares muy pequeños (≤ 700px alto)
   ====================================== */
@media (max-height: 700px) {
  .tocadiscos {
    top: 280px;       /* sube todo */
    width: 200px;     /* achica */
  }

  .contador {
    top: 735px;
    width: 350px; 
  }

  .btn-ubicacion {
    top: 1030px;
    height: 50px;
  }

  .btn-confirmar {
    top: 1680px;
    height: 50px;
  }
}

/* ======================================
   📱 Celulares pequeños (701px – 800px alto)
   ====================================== */
@media (max-height: 800px) and (min-height: 701px) {
  .tocadiscos {
    top: 280px;
    width: 220px;
  }

  .contador {
    top: 710px;
    width: 260px;
    left: 130px;

  }

  .btn-ubicacion {
    top: 990px;

  }

  .btn-confirmar {
    top: 1670px;
  }
}

/* ======================================
   📱 Celulares medianos (801px – 900px)
   ====================================== */
@media (max-height: 900px) and (min-height: 801px) {
  .tocadiscos {
    top: 330px;
    width: 240px;
  }

  .contador {
    top: 830px;
    left: 165px;
    width: 330px;
  }

  .btn-ubicacion {
    top: 1155px;
    left: 10px;
    width: 355px;
  }

  .btn-confirmar {
    top: 1935px;
    left: 10px;
    width: 355px;
  }
}

/* ======================================
   📱 Celulares grandes (≥ 901px)
   ====================================== */
@media (min-height: 901px) {
  .tocadiscos {
    top: 330px;
    width: 250px;
  }

  .contador {
  position: absolute;
    top: 820px;
    left: 165px
    
  }

  

  .btn-ubicacion {
    top: 1145px;
    left: 5px;
  }

  .btn-confirmar {
    top: 1925px;
    left: 5px;
  }
}

        `}</style>

        {/* Fondo */}
        <img
          src="/plantilla.png"
          alt="Invitación Bianca"
          className="inv-bg"
        />

        {/* Overlays */}
        <div className="tocadiscos">
          <Turntable
            width={250}
            rpm={100}
            audioSrc="/tema.mp3"
            coverSrc="/portadadiscoo.png"
            vinylSrc="/discopng.png"
          />
        </div>

        <div className="contador">
          <Countdown targetDate="2025-12-06T21:00:00-03:00" />
        </div>

        <button className="btn-ubicacion" onClick={handleMap} />
        <button className="btn-confirmar" onClick={handleWhatsApp} />
      </div>
    </main>
  );
}

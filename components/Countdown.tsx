"use client";
import { useEffect, useMemo, useState } from "react";

type Props = { targetDate: string };

function to2(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Countdown({ targetDate }: Props) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [diff, setDiff] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const id = setInterval(
      () => setDiff(Math.max(0, target - Date.now())),
      1000
    );
    return () => clearInterval(id);
  }, [target]);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <div className="contador">
      <div className="fila">
        <Bloque n={days} label="DÍAS" />
        <Sep />
        <Bloque n={hours} label="HORAS" />
        <Sep />
        <Bloque n={minutes} label="MINUTOS" />
        <Sep />
        <Bloque n={seconds} label="SEGUNDOS" />
      </div>

      <style jsx>{`
        .contador {
          width: 100%;
          max-width: 390px;
          background: #f8a9d1;
          padding: 28px 36px;
          margin: 0 auto;
          border-radius: 22px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .fila {
          display: flex;
          justify-content: center;
          align-items: center; /* ⭐ corrección principal */
          gap: 22px;
        }

        .num {
          font-family: var(--font-bodoni);
          font-weight: 500;
          color: white;
          font-size: 58px; /* ⭐ tamaño real visible */
          line-height: 54px;
        }

        .label {
          font-family: "Poppins", sans-serif;
          font-size: 11px;
          margin-top: 10px;
          letter-spacing: 0.22em;
          color: white;
        }

        .sep {
          font-family: var(--font-bodoni);
          font-size: 40px;
          color: white;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

function Bloque({ n, label }: { n: number; label: string }) {
  return (
    <div className="text-center">
      <div className="num">{to2(n)}</div>
      <div className="label">{label}</div>
    </div>
  );
}

function Sep() {
  return <span className="sep">:</span>;
}

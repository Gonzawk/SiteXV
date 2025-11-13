"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type TurntableProps = {
  audioSrc?: string;
  coverSrc?: string;
  vinylSrc?: string;
  width?: number;
  rpm?: number;
};

export default function Turntable({
  audioSrc = "/tema.mp3",
  coverSrc = "/discopng.png",
  vinylSrc = "/portadadiscoo.png",
  width = 320,
  rpm = 33,
}: TurntableProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const spinSeconds = 60 / rpm;
  const height = Math.round(width * 0.62);

  const toggle = async () => {
    if (!audioRef.current) return;
    try {
      if (!playing) {
        await audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const stop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setPlaying(false);
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const update = () => {
      if (el.duration) setProgress(el.currentTime / el.duration);
    };

    const ended = () => setPlaying(false);

    el.addEventListener("timeupdate", update);
    el.addEventListener("ended", ended);

    return () => {
      el.removeEventListener("timeupdate", update);
      el.removeEventListener("ended", ended);
    };
  }, []);

  return (
    <div className="wrap" style={{ width, height }}>
      {/* Audio */}
      <audio ref={audioRef} src={audioSrc} preload="auto" />

      {/* Disco atrás */}
      <div className={`vinyl ${playing ? "spin" : ""}`}>
        <Image src={vinylSrc} alt="Vinilo" fill priority sizes={`${width}px`} />
      </div>

      {/* Portada adelante */}
      <div className="cover">
        <Image src={coverSrc} alt="Cover" fill priority sizes={`${width}px`} />
      </div>

      {/* Controles */}
      <div className="controls">
        {/* PLAY / PAUSE */}
        <button className="icon-btn primary" onClick={toggle}>
          {!playing ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M6 19h4V5H6zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>

        {/* STOP */}
        <button className="icon-btn secondary" onClick={stop}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="6" width="12" height="12" rx="2" />
          </svg>
        </button>

        {/* Progress bar */}
        <div className="bar">
          <div className="fill" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>

      <style jsx>{`
        .wrap {
          position: relative;
          user-select: none;
        }

        /* Disco atrás */
        .vinyl {
          position: absolute;
          right: -18%;
          top: 50%;
          width: 100%;
          height: 100%;
          transform: translateY(-50%);
          transform-origin: center;
          filter: drop-shadow(0 12px 22px rgba(0, 0, 0, 0.25));
          z-index: 0;
        }
        .vinyl :global(img) {
          object-fit: contain;
        }

        /* Portada adelante */
        .cover {
          position: absolute;
          left: 0;
          top: 0;
          width: 68%;
          height: 100%;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
          z-index: 2;
        }
        .cover :global(img) {
          object-fit: cover;
        }

        /* Animación del disco */
        @keyframes spin {
          from {
            transform: translateY(-50%) rotate(0deg);
          }
          to {
            transform: translateY(-50%) rotate(360deg);
          }
        }
        .spin {
          animation: spin ${spinSeconds}s linear infinite;
        }

        /* Controles */
        .controls {
          position: absolute;
          left: 0;
          bottom: -55px;
          width: 100%;
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .icon-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
          transition: all 0.25s ease;
        }

        .primary {
          background: #f38bb0;
        }
        .primary:hover {
          background: #ff9fc7;
          transform: scale(1.07);
        }

        .secondary {
          background: #444;
        }
        .secondary:hover {
          background: #666;
          transform: scale(1.07);
        }

        .bar {
          position: relative;
          flex: 1;
          height: 6px;
          background: #ddd;
          border-radius: 999px;
          max-width: 130px;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          background: #f38bb0;
          transform-origin: left;
          transform: scaleX(0);
        }
      `}</style>
    </div>
  );
}

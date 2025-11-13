export default function Sparkles({ count = 22 }: { count?: number }) {
  const dots = Array.from({ length: count });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((_, i) => {
        const top = Math.random() * 88 + 6;
        const left = Math.random() * 88 + 6;
        const delay = Math.random() * 2.5;
        const scale = Math.random() * 0.9 + 0.5;
        return (
          <span
            key={i}
            className="sparkle"
            style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s`, transform: `scale(${scale})` }}
          />
        );
      })}
    </div>
  );
}

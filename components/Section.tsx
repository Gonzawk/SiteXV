import { ReactNode } from "react";

export default function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`w-full py-16 ${className}`}>
      <div className="container-pro">{children}</div>
    </section>
  );
}

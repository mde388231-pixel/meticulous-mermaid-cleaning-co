import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Shell({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M32 56 C14 52 6 36 10 22 C14 10 26 6 32 6 C38 6 50 10 54 22 C58 36 50 52 32 56Z" />
      {[-24, -12, 0, 12, 24].map((x) => <path key={x} d={`M32 56 Q${32 + x * 0.6} 30 ${32 + x} 9`} />)}
    </svg>
  );
}

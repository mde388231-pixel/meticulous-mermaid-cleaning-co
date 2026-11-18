import { Marquee } from "@/components/ui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export type Testimonial = { name: string; location: string; body: string; img?: string };

function TestimonialCard({ img, name, location, body }: Testimonial) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <Card className="w-56 border-pearl/20 bg-pearl/10 text-pearl shadow-glow backdrop-blur-md">
      <CardContent className="p-5">
        <Quote className="mb-3 h-5 w-5 text-champagne" />
        <p className="text-sm leading-relaxed text-pearl/85">{body}</p>
        <div className="mt-4 flex items-center gap-3">
          <Avatar className="h-9 w-9 ring-1 ring-champagne/60">
            {img ? <AvatarImage src={img} alt={name} /> : null}
            <AvatarFallback className="bg-coral/80 text-xs text-deep">{initials}</AvatarFallback>
          </Avatar>
          <div>
            <figcaption className="font-display text-base">{name}</figcaption>
            <p className="text-xs text-pearl/60">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials3D({ items }: { items: Testimonial[] }) {
  const cols = [0, 1, 2, 3].map((c) => items.filter((_, i) => i % 4 === c).concat(items.slice(0, 2)));
  return (
    <div className="relative flex h-[34rem] w-full items-center justify-center overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{ transform: "translateX(-60px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)" }}
      >
        {cols.map((col, ci) => (
          <Marquee key={ci} vertical pauseOnHover reverse={ci % 2 === 1} repeat={3} className="[--duration:45s]">
            {col.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </Marquee>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-deep" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-deep" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-deep" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-deep" />
    </div>
  );
}

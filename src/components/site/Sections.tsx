import { useState } from "react";
import { Phone, Sparkles, ShieldCheck, MapPin, Waves, Gem, Heart, Play, ArrowUpRight } from "lucide-react";
import { business, images, services, reasons, process, gallery, testimonials, reels, nav, beforeImage, afterImage, aboutImage } from "@/content/site";
import ImageGallery from "@/components/ui/image-gallery";
import Testimonials3D from "@/components/ui/3d-testimonails";
import { Reveal, Shell } from "./Reveal";

function CallButton({ light = false }: { light?: boolean }) {
  return (
    <a href={business.phoneHref} className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:-translate-y-0.5 ${light ? "bg-pearl text-deep hover:bg-champagne" : "bg-ocean text-pearl shadow-glow hover:shadow-soft"}`}>
      <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" /> Book · {business.phone}
    </a>
  );
}

function Heading({ eyebrow, title, accent, center = false, light = false }: { eyebrow: string; title: string; accent?: string; center?: boolean; light?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className={`eyebrow ${light ? "!text-champagne" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl leading-[1.05] md:text-6xl ${light ? "text-pearl" : "text-deep"}`}>
        {title} {accent && <em className={`font-script text-5xl not-italic md:text-7xl ${light ? "text-gold" : "text-teal"}`}>{accent}</em>}
      </h2>
    </Reveal>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-pearl/30 bg-pearl/70 px-5 py-3 shadow-soft backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2 text-deep">
          <Shell className="h-8 w-8 text-teal" />
          <span className="font-display text-xl leading-none">Meticulous <em className="text-teal">Mermaids</em></span>
        </a>
        <nav className="hidden gap-7 text-xs uppercase tracking-[0.2em] text-deep/80 lg:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="transition-colors hover:text-teal">{n.label}</a>)}
        </nav>
        <a href={business.phoneHref} className="hidden rounded-full bg-deep px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-pearl transition-colors hover:bg-teal sm:inline-flex">{business.phone}</a>
        <button onClick={() => setOpen(!open)} className="text-xs uppercase tracking-widest text-deep lg:hidden" aria-label="Menu">{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 flex max-w-7xl flex-col rounded-3xl bg-pearl/95 p-6 shadow-soft backdrop-blur-xl lg:hidden">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 font-display text-2xl text-deep">{n.label}</a>)}
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ocean pb-16 pt-32 text-pearl">
      <div className="absolute inset-0 waves opacity-70" />
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className="bubble" style={{ left: `${(i * 37) % 100}%`, width: 6 + (i % 5) * 6, height: 6 + (i % 5) * 6, animationDuration: `${10 + (i % 6) * 3}s`, animationDelay: `${i * 1.3}s` }} />
      ))}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-champagne/50 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.35em] text-champagne">
              <ShieldCheck className="h-3.5 w-3.5" /> {business.status} · {business.serviceArea}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-8 text-6xl leading-[0.92] sm:text-7xl xl:text-8xl">
              The Best Clean <br /> on the <span className="font-script text-gold text-7xl sm:text-8xl xl:text-9xl">Coast</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-pearl/80">
              {business.message}. Meticulous residential, commercial and vacation-rental cleaning across {business.serviceArea}.
            </p>
          </Reveal>
          <Reveal delay={450} className="mt-10 flex flex-wrap items-center gap-6">
            <CallButton light />
            <a href="#services" className="text-xs uppercase tracking-[0.3em] text-pearl/80 underline-offset-8 hover:underline">Explore services</a>
          </Reveal>
        </div>
        <div className="relative lg:col-span-6">
          <Reveal delay={200} className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute -inset-4 shell-mask border border-champagne/40" />
            <img src={images.hero} alt="Luxury coastal living room, freshly cleaned" className="shell-mask h-full w-full object-cover shadow-soft" />
            <div className="absolute -left-10 bottom-16 hidden w-40 animate-float overflow-hidden rounded-2xl border-4 border-pearl shadow-soft sm:block">
              <img src={images.bath} alt="Spotless spa bathroom" className="aspect-square w-full object-cover" />
            </div>
            <div className="absolute -right-4 top-10 flex h-28 w-28 items-center justify-center rounded-full bg-coral text-center text-deep shadow-soft sm:-right-10">
              <span className="font-display text-sm italic leading-tight">A Cleaner<br />Home,<br />A Happier You</span>
            </div>
          </Reveal>
        </div>
      </div>
      <svg className="absolute inset-x-0 bottom-0 w-full text-pearl" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor" aria-hidden>
        <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,64 L1440,120 L0,120Z" />
      </svg>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal className="relative">
          <img src={aboutImage} alt="Our cleaner caring for a glass table" className="aspect-[4/5] w-full rounded-t-full object-cover shadow-soft" />
          <div className="absolute -bottom-8 right-6 rounded-2xl bg-card px-8 py-6 shadow-soft">
            <p className="font-script text-4xl text-teal">Meticulous</p>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">by name & by nature</p>
          </div>
        </Reveal>
        <div>
          <Heading eyebrow="About us" title="Care that flows like the" accent="tide" />
          <Reveal delay={150}>
            <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
              {business.name} brings a calm, detail-obsessed approach to every space we touch. From coastal homes to busy offices and guest-ready rentals, we treat your space as if it were our own.
            </p>
            <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground">
              Locally rooted in {business.serviceArea} and fully {business.status.toLowerCase()}, we believe a cleaner home truly means a happier you.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex gap-10 border-t border-border pt-8">
            {[business.status, business.serviceArea, "Homes & Businesses"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-deep"><Sparkles className="h-4 w-4 text-champagne" />{t}</div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-secondary/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Heading eyebrow="Premium services" title="Every space," accent="perfected" />
          <Reveal><p className="max-w-sm text-muted-foreground">Six signature offerings, each delivered with the same meticulous standard.</p></Reveal>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <article className={`group relative h-[26rem] overflow-hidden rounded-[2rem] shadow-soft ${i % 3 === 1 ? "lg:translate-y-12" : ""}`}>
                <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-pearl">
                  <span className="font-display text-sm italic text-champagne">0{i + 1}</span>
                  <h3 className="mt-1 text-3xl">{s.title}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm font-light text-pearl/80 opacity-0 transition-all duration-700 group-hover:max-h-24 group-hover:opacity-100">{s.text}</p>
                </div>
                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-pearl opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasonIcons = [ShieldCheck, Gem, Waves, Heart];
export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-deep py-28 text-pearl">
      <Shell className="absolute -right-24 -top-24 h-[30rem] w-[30rem] text-pearl/5" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Heading light eyebrow="Why choose us" title="The mermaid" accent="difference" />
          <Reveal delay={150}><p className="mt-6 max-w-sm font-light text-pearl/70">{business.tagline} — a promise we keep in every room.</p></Reveal>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[2rem] bg-pearl/10 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = reasonIcons[i] ?? Sparkles;
            return (
              <Reveal key={r.title} delay={i * 100} className="group h-full bg-deep p-10 transition-colors duration-500 hover:bg-teal/40">
                <Icon className="h-8 w-8 text-champagne transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-8 text-3xl">{r.title}</h3>
                <p className="mt-3 font-light text-pearl/70">{r.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Heading center eyebrow="Our process" title="Four steps to" accent="serenity" />
        <div className="relative mt-20 grid gap-12 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-champagne to-transparent md:block" />
          {process.map((p, i) => (
            <Reveal key={p.title} delay={i * 150} className="relative text-center">
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-champagne bg-background font-display text-3xl italic text-teal transition-all duration-500 hover:bg-ocean hover:text-pearl">
                {i + 1}
              </div>
              <h3 className="mt-6 text-2xl text-deep">{p.title}</h3>
              <p className="mx-auto mt-3 max-w-[15rem] text-sm text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="bg-secondary/60 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Heading eyebrow="Before & after" title="The transformation," accent="revealed" />
          <Reveal delay={150}><p className="mt-6 text-muted-foreground">Drag the pearl handle to see the difference a meticulous clean makes.</p></Reveal>
        </div>
        <Reveal>
          <div className="relative aspect-[4/3] select-none overflow-hidden rounded-[2rem] shadow-soft">
            <img src={afterImage} alt="After cleaning" className="absolute inset-0 h-full w-full object-cover" />
            <img src={beforeImage} alt="Before cleaning" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
            <span className="absolute left-5 top-5 rounded-full bg-deep/70 px-4 py-1 text-xs uppercase tracking-widest text-pearl">Before</span>
            <span className="absolute right-5 top-5 rounded-full bg-pearl/80 px-4 py-1 text-xs uppercase tracking-widest text-deep">After</span>
            <div className="pointer-events-none absolute inset-y-0 w-px bg-pearl" style={{ left: `${pos}%` }}>
              <div className="absolute top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-pearl bg-champagne shadow-soft" />
            </div>
            <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Before and after slider" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Heading center eyebrow="Gallery" title="Spaces we've made" accent="shine" />
        <Reveal className="mt-16"><ImageGallery images={gallery} /></Reveal>
      </div>
    </section>
  );
}

export function Reels() {
  return (
    <section className="relative overflow-hidden bg-ocean py-28 text-pearl">
      <div className="absolute inset-0 waves opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Heading light center eyebrow="Reels" title="Watch the" accent="magic" />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {reels.map((r, i) => (
            <Reveal key={r.title} delay={i * 150} className={i === 1 ? "sm:-translate-y-8" : ""}>
              <div className="group relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-[2.5rem] border border-champagne/40 bg-pearl/10 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2">
                {r.src ? (
                  <video src={r.src} controls playsInline className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-5 p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-champagne/60 transition-colors group-hover:bg-champagne group-hover:text-deep">
                      <Play className="ml-1 h-6 w-6" />
                    </div>
                    <p className="font-display text-2xl italic">{r.title}</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-pearl/60">Video coming soon</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-deep py-28 text-pearl">
      <div className="mx-auto max-w-7xl px-6">
        <Heading light center eyebrow="Kind words" title="Client" accent="love notes" />
        <Reveal className="mt-10"><Testimonials3D items={testimonials} /></Reveal>
      </div>
    </section>
  );
}

export function ServiceMap() {
  const src = "https://www.openstreetmap.org/export/embed.html?bbox=-81.15%2C27.80%2C-80.40%2C28.82&layer=mapnik";
  return (
    <section id="area" className="py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.7fr]">
        <div>
          <Heading eyebrow="Service area" title="Proudly serving" accent="Brevard" />
          <Reveal delay={150}>
            <p className="mt-6 text-muted-foreground">Along the Space Coast and throughout {business.serviceArea}, Florida. Call to confirm availability in your neighborhood.</p>
            <a href={business.phoneHref} className="mt-8 inline-flex items-center gap-2 text-teal underline-offset-8 hover:underline"><MapPin className="h-4 w-4" /> Check my area · {business.phone}</a>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative h-[28rem] overflow-hidden rounded-[2rem] border-8 border-card shadow-soft md:h-[32rem]">
            <iframe title={`${business.serviceArea} service area map`} src={src} className="h-full w-full" loading="lazy" />
            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-deep/85 px-4 py-2 text-xs uppercase tracking-widest text-pearl">{business.serviceArea}, FL</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-28">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-ocean px-8 py-20 text-center text-pearl shadow-soft md:py-28">
        <img src={images.detail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay" />
        <div className="relative">
          <Shell className="mx-auto h-14 w-14 text-champagne" />
          <p className="eyebrow mt-6 !text-champagne">Contact & booking</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl leading-tight md:text-7xl">Ready for the best clean on the <span className="font-script text-gold">Coast?</span></h2>
          <a href={business.phoneHref} className="mt-10 block font-display text-5xl italic transition-colors hover:text-champagne md:text-7xl">{business.phone}</a>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-pearl/70">Tap to call · {business.status}</p>
          <div className="mt-10 flex justify-center"><CallButton light /></div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-deep pt-20 pb-10 text-pearl">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3"><Shell className="h-10 w-10 text-champagne" /><span className="font-display text-2xl">{business.shortName}</span></div>
          <p className="mt-4 font-script text-3xl text-coral">{business.tagline}</p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm text-pearl/70">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-champagne">{n.label}</a>)}
        </nav>
        <div className="space-y-2 text-sm text-pearl/70">
          <a href={business.phoneHref} className="block font-display text-3xl text-pearl hover:text-champagne">{business.phone}</a>
          <p>Serving {business.serviceArea}, FL</p>
          <p>{business.status}</p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-pearl/10 px-6 pt-6 text-xs text-pearl/50">© {new Date().getFullYear()} {business.name}. {business.message}.</div>
    </footer>
  );
}

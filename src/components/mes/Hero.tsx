import { ArrowRight, MapPin } from "lucide-react";
import logo from "@/assets/logo-mes.png.asset.json";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-warm-gradient pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <Reveal>
          <img
            src={logo.url}
            alt="Montijo Energia do Sol"
            className="mx-auto h-28 sm:h-36 w-auto"
            fetchPriority="high"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/70 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Energia 100% solar própria · Ribeirão das Neves, MG
          </div>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
            <span className="sr-only">Montijo Energia do Sol — </span>
            Carregando o futuro
            <br />
            <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_45)] bg-clip-text text-transparent">
              com energia limpa.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={280}>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-foreground/70 leading-relaxed">
            Infraestrutura de recarga elétrica movida por energia solar própria.
            Mobilidade limpa, rápida e 100% digital.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#app"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow-amber transition-all"
            >
              Baixe o app
              <span className="rounded-full bg-accent/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                Em breve
              </span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#eletropostos"
              className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/60 px-7 py-3.5 text-sm font-semibold text-primary hover:bg-background transition-colors"
            >
              <MapPin size={16} />
              Encontre um eletroposto
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

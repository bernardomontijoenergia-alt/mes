import { Leaf, TrendingDown, Car, Building2 } from "lucide-react";
import { Reveal } from "./Reveal";

const bullets = [
  { icon: TrendingDown, text: "Menor dependência de combustíveis fósseis." },
  { icon: Car, text: "Incentivo à adoção de veículos elétricos." },
  { icon: Building2, text: "Contribuição às metas locais de energia limpa." },
];

const ods = [
  { n: 7, title: "Energia Limpa e Acessível", color: "oklch(0.78 0.16 75)" },
  { n: 9, title: "Indústria, Inovação e Infraestrutura", color: "oklch(0.65 0.16 35)" },
  { n: 11, title: "Cidades e Comunidades Sustentáveis", color: "oklch(0.7 0.14 55)" },
  { n: 13, title: "Ação Contra a Mudança Global do Clima", color: "oklch(0.5 0.13 145)" },
];

export function Sustentabilidade() {
  return (
    <section id="sustentabilidade" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Sustentabilidade
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl font-bold text-primary">
            Neutralidade de carbono, na prática.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border/70 bg-card p-8 sm:p-10 shadow-soft">
              <Leaf className="text-[oklch(0.55_0.18_150)]" size={34} strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-2xl font-bold text-primary">
                Compromisso ambiental
              </h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                Cada recarga na rede Montijo representa uma redução direta nas
                emissões de CO₂ — energia gerada e consumida em um ciclo
                sustentável.
              </p>
              <ul className="mt-6 space-y-4">
                {bullets.map((b) => (
                  <li key={b.text} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                      <b.icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm sm:text-base text-foreground/80">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-border/70 bg-card p-8 sm:p-10 shadow-soft">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Objetivos de Desenvolvimento Sustentável · ONU
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-primary">
                ODS que cumprimos
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {ods.map((o) => (
                  <div
                    key={o.n}
                    className="group relative overflow-hidden rounded-2xl p-5 text-white transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: o.color }}
                  >
                    <div className="font-display text-4xl font-bold leading-none">
                      {o.n}
                    </div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-wide leading-snug">
                      {o.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

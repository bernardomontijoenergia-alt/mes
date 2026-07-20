import { Plug, Zap, Timer, Smartphone, Car, Cable, SunMedium, Activity } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Car, value: "2", unit: "vagas", label: "exclusivas e adjacentes por eletroposto" },
  { icon: Zap, value: "120", unit: "kW", label: "por ponto · CCS2 (dois conectores por ponto)" },
  { icon: Timer, value: "30–40", unit: "min", label: "para uma recarga completa" },
  { icon: Smartphone, value: "100%", unit: "digital", label: "processo via aplicativo próprio" },
];

const passos = [
  { icon: Plug, title: "Conexão do veículo", desc: "Conector padrão CCS2 disponível em ambos os pontos." },
  { icon: Activity, title: "Distribuição dinâmica", desc: "Energia balanceada em tempo real entre os veículos conectados." },
  { icon: SunMedium, title: "Priorização solar", desc: "Uso preferencial da energia da nossa usina em Ribeirão das Neves." },
  { icon: Cable, title: "Monitoramento 24/7", desc: "Operação e firmware atualizados remotamente, sem interrupções." },
];

export function Infraestrutura() {
  return (
    <section id="infraestrutura" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Infraestrutura
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl font-bold text-primary">
            Alta potência, gestão inteligente.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
                <s.icon className="text-accent" size={28} strokeWidth={1.75} />
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-primary tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">{s.unit}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Distribuição inteligente */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">
              Distribuição Inteligente de Potência
            </h3>
            <p className="mt-3 max-w-2xl text-foreground/70">
              O sistema aloca energia automaticamente conforme a demanda de
              cada vaga, entregando o máximo desempenho a cada veículo.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-border/70 bg-card p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent font-bold">
                    1
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Veículo conectado
                  </span>
                </div>
                <div className="mt-6 font-display text-5xl font-bold text-primary tracking-tight">
                  120 <span className="text-2xl font-semibold text-muted-foreground">kW</span>
                </div>
                <p className="mt-2 text-sm text-foreground/70">
                  Potência dedicada — recarga na velocidade máxima.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-border/70 bg-card p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-accent font-bold">
                    2
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Veículos conectados
                  </span>
                </div>
                <div className="mt-6 font-display text-5xl font-bold text-primary tracking-tight">
                  60 <span className="text-2xl text-muted-foreground">+</span> 60{" "}
                  <span className="text-2xl font-semibold text-muted-foreground">kW</span>
                </div>
                <p className="mt-2 text-sm text-foreground/70">
                  Energia distribuída automaticamente entre os dois pontos.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Como funciona */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">
              Como funciona
            </h3>
          </Reveal>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <li className="relative h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
                  <span className="font-display text-sm font-bold text-accent">
                    0{i + 1}
                  </span>
                  <p.icon className="mt-3 text-primary" size={26} strokeWidth={1.75} />
                  <h4 className="mt-4 font-display text-lg font-semibold text-primary">
                    {p.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

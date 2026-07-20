import { Ruler, Cable, Wifi, Sun } from "lucide-react";
import { Reveal } from "./Reveal";

const specs = [
  { icon: Ruler, label: "Dimensões", value: "1,7 m × 0,6 m × 0,3 m", hint: "altura × largura × profundidade" },
  { icon: Cable, label: "Padrão de conexão", value: "CCS2", hint: "dois conectores por ponto" },
  { icon: Wifi, label: "Monitoramento", value: "Remoto 24/7", hint: "firmware atualizado online" },
  { icon: Sun, label: "Gestão energética", value: "Priorização solar", hint: "usina própria em Ribeirão das Neves" },
];

export function Especificacoes() {
  return (
    <section id="especificacoes" className="bg-primary py-24 sm:py-32 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Especificações técnicas
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl font-bold">
            Engenharia pensada para durar.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <s.icon className="text-accent" size={26} strokeWidth={1.75} />
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
                  {s.label}
                </h3>
                <div className="mt-2 font-display text-xl font-bold">{s.value}</div>
                <div className="mt-1 text-sm text-primary-foreground/60">{s.hint}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

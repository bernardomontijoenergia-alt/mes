import { Sun } from "lucide-react";
import eletroposto from "@/assets/eletroposto.jpg";
import { Reveal } from "./Reveal";

const dados = [
  { label: "Razão Social", value: "Montijo Energia do Sol LTDA." },
  { label: "CNPJ", value: "44.608.844/0001-95" },
  { label: "Fundação", value: "16 / 12 / 2021" },
];

export function QuemSomos() {
  return (
    <section id="quem-somos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Quem somos
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl font-bold text-primary">
            Especialistas em recarga elétrica sustentável.
          </h2>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-foreground/70 leading-relaxed">
            Expandindo o acesso à mobilidade limpa a partir de energia solar
            própria — combinando infraestrutura confiável com processo 100%
            digital.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dados.map((d, i) => (
            <Reveal key={d.label} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {d.label}
                </div>
                <div className="mt-3 font-display text-lg font-semibold text-primary">
                  {d.value}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-3xl bg-primary p-8 sm:p-12 shadow-soft">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <Sun className="text-accent" size={36} strokeWidth={1.75} />
                <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold text-primary-foreground leading-tight">
                  Nossa missão
                </h3>
                <p className="mt-4 text-primary-foreground/85 text-base sm:text-lg leading-relaxed max-w-xl">
                  Expandir o acesso à mobilidade elétrica limpa, utilizando
                  energia proveniente de fonte solar — especialmente da usina da
                  Montijo Energia do Sol em Ribeirão das Neves, MG.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <div className="h-full overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft">
              <img
                src={eletroposto}
                alt="Eletroposto Montijo em operação ao pôr do sol"
                loading="lazy"
                width={1600}
                height={1100}
                className="h-full w-full object-cover min-h-[280px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

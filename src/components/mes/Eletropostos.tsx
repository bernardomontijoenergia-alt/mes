import { MapPin, Sun } from "lucide-react";
import { Reveal } from "./Reveal";

const pontos = [
  {
    nome: "Ponto 01",
    endereco: "Av. Raja Gabaglia · Belo Horizonte, MG",
    detalhes: [
      "2 carregadores de alta potência",
      "Duas saídas de 120 kW cada",
      "Acesso público · monitoramento 24h",
      "Pagamento 100% digital",
    ],
    ativo: false,
  },
  {
    nome: "Ponto 02",
    endereco: "Rua do Ouro, 340 · Belo Horizonte, MG",
    detalhes: [
      "1 carregador de alta potência",
      "Duas saídas de 120 kW",
      "Área de fluxo urbano intenso",
      "Localização estratégica",
    ],
    ativo: false,
  },
  {
    nome: "Ponto 03",
    endereco: "Av. Eduardo Brandão, 1115 · Ribeirão das Neves, MG",
    detalhes: [
      "1 carregador de alta potência",
      "Duas saídas de 120 kW cada",
      "Acesso público · monitoramento 24h",
      "Pagamento 100% digital",
    ],
    ativo: true,
  },
];

export function Eletropostos() {
  return (
    <section id="eletropostos" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Nossos eletropostos
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl font-bold text-primary">
            Onde estamos.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pontos.map((p, i) => (
            <Reveal key={p.nome} delay={i * 100}>
              <article className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-sm font-bold uppercase tracking-widest text-accent">
                    {p.nome}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                      p.ativo
                        ? "bg-[oklch(0.9_0.13_145)] text-[oklch(0.35_0.1_150)]"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        p.ativo ? "bg-[oklch(0.55_0.18_150)] animate-pulse" : "bg-muted-foreground/60"
                      }`}
                    />
                    {p.ativo ? "Ativo" : "Em breve"}
                  </span>
                </div>
                <div className="mt-5 flex items-start gap-2">
                  <MapPin className="mt-0.5 shrink-0 text-primary" size={18} />
                  <p className="font-display text-lg font-semibold text-primary leading-snug">
                    {p.endereco}
                  </p>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm text-foreground/75">
                  {p.detalhes.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-sm font-medium text-muted-foreground">
            Em breve, mais localizações.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 rounded-3xl border border-[oklch(0.75_0.14_145)]/40 bg-[oklch(0.94_0.08_145)] p-8 shadow-soft">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[oklch(0.55_0.18_150)] text-white">
              <Sun size={26} strokeWidth={1.75} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[oklch(0.28_0.08_150)]">
                Operação 100% Solar
              </h3>
              <p className="mt-1 text-sm sm:text-base text-[oklch(0.35_0.06_150)]">
                Todos os pontos alimentados por energia solar — operação limpa e
                de baixo impacto ambiental.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

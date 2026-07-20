import { MapPin, QrCode, Clock, CreditCard, FileText, History, Apple, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: MapPin, title: "Localização em tempo real", desc: "Encontre o eletroposto mais próximo e sua disponibilidade." },
  { icon: QrCode, title: "QR Code", desc: "Inicie e encerre a recarga com um toque, sem cartões físicos." },
  { icon: Clock, title: "Acompanhamento ao vivo", desc: "kWh entregues e tempo restante atualizados a cada segundo." },
  { icon: CreditCard, title: "Pagamento flexível", desc: "Pix, cartão de crédito ou débito direto no aplicativo." },
  { icon: FileText, title: "Nota fiscal automática", desc: "Emissão instantânea ao final de cada sessão." },
  { icon: History, title: "Histórico de uso", desc: "Todas as recargas, sessões e consumos em um só lugar." },
];

export function Aplicativo() {
  return (
    <section id="app" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Aplicativo próprio
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-primary">
              O eletroposto no seu bolso.
            </h2>
            <p className="mt-4 max-w-2xl text-foreground/70 text-base sm:text-lg">
              Processo 100% digital em iOS e Android — do início da recarga
              à nota fiscal.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-2 text-sm text-primary">
                <Apple size={16} /> iOS
                <span className="rounded bg-accent/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-accent-foreground">
                  em breve
                </span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-2 text-sm text-primary">
                <Smartphone size={16} /> Android
                <span className="rounded bg-accent/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-accent-foreground">
                  em breve
                </span>
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow-amber">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <f.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

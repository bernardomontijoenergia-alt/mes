import { MapPin, Phone, Smartphone, Instagram } from "lucide-react";
import logo from "@/assets/logo-mes.png.asset.json";


const nav = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#infraestrutura", label: "Infraestrutura" },
  { href: "#app", label: "Aplicativo" },
  { href: "#eletropostos", label: "Eletropostos" },
  { href: "#sustentabilidade", label: "Sustentabilidade" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img src={logo.url} alt="Montijo Energia do Sol" className="h-16 w-auto" />
            <p className="mt-5 max-w-sm text-sm text-foreground/70 leading-relaxed">
              Infraestrutura de recarga elétrica movida por energia solar
              própria, expandindo o acesso à mobilidade limpa no Brasil.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contato
            </div>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-foreground/80">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  Av. Raja Gabaglia, 4055, Sala 211 C<br />
                  Belo Horizonte · MG
                </span>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Phone size={18} className="shrink-0 text-accent" />
                <a href="tel:+553197026566" className="hover:text-primary transition-colors">
                  +55 31 99702-6566
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Smartphone size={18} className="shrink-0 text-accent" />
                <span>
                  App iOS & Android
                  <span className="ml-2 rounded bg-accent/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
                    em breve
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Instagram size={18} className="shrink-0 text-accent" />
                <a
                  href="https://www.instagram.com/montijoenergiadosol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @montijoenergiadosol
                </a>
              </li>
            </ul>
          </div>


          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navegação
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/75 hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Montijo Energia do Sol LTDA. · CNPJ 44.608.844/0001-95</div>
          <div>Energia 100% solar · Belo Horizonte · Ribeirão das Neves, MG</div>
        </div>
      </div>
    </footer>
  );
}

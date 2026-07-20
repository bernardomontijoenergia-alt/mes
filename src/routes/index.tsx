import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/mes/Navbar";
import { Hero } from "@/components/mes/Hero";
import { QuemSomos } from "@/components/mes/QuemSomos";
import { Infraestrutura } from "@/components/mes/Infraestrutura";
import { Aplicativo } from "@/components/mes/Aplicativo";
import { Eletropostos } from "@/components/mes/Eletropostos";
import { Sustentabilidade } from "@/components/mes/Sustentabilidade";
import { Especificacoes } from "@/components/mes/Especificacoes";
import { Contato } from "@/components/mes/Contato";

import { Footer } from "@/components/mes/Footer";
import { WhatsAppButton } from "@/components/mes/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Montijo Energia do Sol | Recarga Elétrica 100% Solar" },
      {
        name: "description",
        content:
          "Montijo Energia do Sol: infraestrutura de recarga elétrica movida por energia solar própria. Eletropostos de 120 kW (CCS2) em Belo Horizonte e Ribeirão das Neves, MG.",
      },
      {
        name: "keywords",
        content:
          "Montijo Energia do Sol, eletroposto, recarga carro elétrico, carregador veicular, energia solar, energia fotovoltaica, CCS2, mobilidade elétrica, Belo Horizonte, Ribeirão das Neves, MG",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Montijo Energia do Sol | Recarga Elétrica 100% Solar" },
      {
        property: "og:description",
        content:
          "Montijo Energia do Sol: infraestrutura de recarga elétrica movida por energia solar própria. Eletropostos de 120 kW (CCS2) em Belo Horizonte e Ribeirão das Neves, MG.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://montijoenergia.lovable.app/" },
      { name: "twitter:title", content: "Montijo Energia do Sol | Recarga Elétrica 100% Solar" },
      {
        name: "twitter:description",
        content:
          "Infraestrutura de recarga elétrica movida por energia solar própria em Minas Gerais.",
      },
    ],
    links: [{ rel: "canonical", href: "https://montijoenergia.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://montijoenergia.lovable.app/#organization",
              name: "Montijo Energia do Sol",
              legalName: "Montijo Energia do Sol LTDA.",
              url: "https://montijoenergia.lovable.app/",
              telephone: "+55-31-99702-6566",
              sameAs: ["https://www.instagram.com/montijoenergiadosol/"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Raja Gabaglia, 4055, Sala 211 C",
                addressLocality: "Belo Horizonte",
                addressRegion: "MG",
                addressCountry: "BR",
              },
            },
            {
              "@type": "LocalBusiness",
              name: "Montijo Energia do Sol — Eletroposto Raja Gabaglia",
              image: "https://montijoenergia.lovable.app/favicon.png",
              telephone: "+55-31-99702-6566",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Raja Gabaglia",
                addressLocality: "Belo Horizonte",
                addressRegion: "MG",
                addressCountry: "BR",
              },
            },
            {
              "@type": "LocalBusiness",
              name: "Montijo Energia do Sol — Eletroposto Rua do Ouro",
              image: "https://montijoenergia.lovable.app/favicon.png",
              telephone: "+55-31-99702-6566",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua do Ouro, 340",
                addressLocality: "Belo Horizonte",
                addressRegion: "MG",
                addressCountry: "BR",
              },
            },
            {
              "@type": "LocalBusiness",
              name: "Montijo Energia do Sol — Eletroposto Ribeirão das Neves",
              image: "https://montijoenergia.lovable.app/favicon.png",
              telephone: "+55-31-99702-6566",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Eduardo Brandão, 1115",
                addressLocality: "Ribeirão das Neves",
                addressRegion: "MG",
                addressCountry: "BR",
              },
            },
          ],
        }),
      },
    ],
  }),
});


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <QuemSomos />
        <Infraestrutura />
        <Aplicativo />
        <Eletropostos />
        <Sustentabilidade />
        <Especificacoes />
        <Contato />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

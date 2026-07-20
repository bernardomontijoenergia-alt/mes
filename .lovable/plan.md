
## Montijo Energia do Sol — Landing Page

Single-page institucional com navegação por âncoras, estética premium (Apple/Tesla-like) em creme/azul-marinho/âmbar, usando a logo enviada.

### Design system (src/styles.css)
- Paleta em oklch: background creme `#FAF7F0`, marinho `#1A2332`, âmbar `#F5A623`, verde suave para faixa solar.
- Gradiente quente creme→âmbar para hero.
- Tipografia: **Space Grotesk** (títulos, geométrica bold) + **Inter** (corpo), via `<link>` no `__root.tsx`.
- Cards: `rounded-2xl`, sombras suaves, bastante whitespace.
- Ícones: `lucide-react` (outline monocromático).

### Assets
- Logo via `lovable-assets create` a partir de `/mnt/user-uploads/Logo_MES_2560.png` → `src/assets/logo-mes.png.asset.json`.
- Foto eletroposto: placeholder gerado (`imagegen`) ou `unsplash` de EV charger.
- Selos ODS 7/9/11/13: SVGs simples inline (quadrados coloridos oficiais com número) — sem baixar assets externos da ONU para evitar problemas de licença.

### Arquitetura
- Substituir `src/routes/index.tsx` (placeholder) por landing completa.
- Atualizar `src/routes/__root.tsx`: title/description/og reais em português, `<link>` das fontes Google.
- Componentes em `src/components/mes/`:
  - `Navbar.tsx` (fixa, scroll suave, logo + links)
  - `Hero.tsx`
  - `QuemSomos.tsx`
  - `Infraestrutura.tsx` (stat cards + distribuição de potência + 4 passos)
  - `Aplicativo.tsx` (grid 6 features)
  - `Eletropostos.tsx` (3 cards + faixa verde solar)
  - `Sustentabilidade.tsx` (neutralidade + ODS)
  - `Especificacoes.tsx`
  - `Footer.tsx`
- Micro-animações: hook `useInView` + Tailwind `transition/opacity/translate` (fade-in on scroll), sem libs extras.

### Conteúdo
Todos os textos exatamente como no briefing (headline, missão, dados CNPJ, 3 endereços com status ativo/inativo, telefone, dimensões, etc.).

### Requisitos técnicos
- Mobile-first (grid responsivo, header colapsa em menu simples).
- Scroll suave via `scroll-behavior: smooth` no `html`.
- Alt text em todas imagens, contraste AA nas combinações marinho/creme/âmbar.
- SEO: title "Montijo Energia do Sol — Recarga elétrica 100% solar", meta description, og tags.

### Fora de escopo
- App real / backend / mapa interativo / formulário de contato funcional (só telefone e endereço exibidos).

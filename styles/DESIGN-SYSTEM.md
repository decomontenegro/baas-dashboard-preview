# BaaS Design System v2.0

Um sistema de design sofisticado e profissional para o Dashboard Bot-as-a-Service.

## 🎨 Filosofia de Design

- **Elegante, não genérico**: Afastamos do indigo padrão do Tailwind para uma paleta única
- **Profissional mas acessível**: Cores sofisticadas com boa acessibilidade
- **Consistente**: Sistema baseado em grid de 8px
- **Performático**: Transições suaves sem comprometer performance

---

## 🎨 Sistema de Cores

### Primary - Deep Teal
Uma cor primária sofisticada que transmite tecnologia, confiança e inovação.

| Token | Hex | Uso |
|-------|-----|-----|
| `primary-50` | `#f0fdfa` | Backgrounds sutis |
| `primary-100` | `#ccfbf1` | Hover states leves |
| `primary-200` | `#99f6e4` | Borders ativos |
| `primary-300` | `#5eead4` | Icons secundários |
| `primary-400` | `#2dd4bf` | Links, texto ativo |
| `primary-500` | `#14b8a6` | **Cor principal** |
| `primary-600` | `#0d9488` | Hover em botões |
| `primary-700` | `#0f766e` | Active states |
| `primary-800` | `#115e59` | Texto em light bg |
| `primary-900` | `#134e4a` | Headings escuros |
| `primary-950` | `#042f2e` | Backgrounds escuros |

### Accent - Warm Coral
Para CTAs, alertas positivos e elementos que precisam de destaque.

| Token | Hex | Uso |
|-------|-----|-----|
| `accent-400` | `#fb923c` | Destaques |
| `accent-500` | `#f97316` | **Cor de destaque** |
| `accent-600` | `#ea580c` | Hover |

### Neutrals - Cool Slate
Base neutra com tom ligeiramente azulado para melhor harmonia.

```css
neutral-0:   #ffffff  /* Pure white */
neutral-50:  #f8fafc  /* Page background */
neutral-100: #f1f5f9  /* Card backgrounds */
neutral-200: #e2e8f0  /* Borders */
neutral-300: #cbd5e1  /* Disabled states */
neutral-400: #94a3b8  /* Placeholder text */
neutral-500: #64748b  /* Secondary text */
neutral-600: #475569  /* Body text */
neutral-700: #334155  /* Headings */
neutral-800: #1e293b  /* Dark mode surfaces */
neutral-900: #0f172a  /* Dark mode background */
neutral-950: #020617  /* Darkest */
```

### Cores Semânticas

```
Success: #10b981 (green-500)
Warning: #f59e0b (amber-500)  
Error:   #ef4444 (red-500)
Info:    #3b82f6 (blue-500)
```

---

## 📝 Tipografia

### Fontes

| Tipo | Fonte | Uso |
|------|-------|-----|
| Display | **Plus Jakarta Sans** | Títulos, headlines, hero |
| Body | **Inter** | Texto corrido, UI, labels |
| Mono | **JetBrains Mono** | Código, dados técnicos |

### Import das Fontes

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
```

### Escala Tipográfica

```css
text-xs:   12px / 16px  /* Labels pequenos */
text-sm:   14px / 20px  /* Body secundário */
text-base: 16px / 24px  /* Body principal */
text-lg:   18px / 28px  /* Lead text */
text-xl:   20px / 28px  /* Subtítulos */
text-2xl:  24px / 32px  /* Títulos de seção */
text-3xl:  30px / 36px  /* Títulos de página */
text-4xl:  36px / 40px  /* Headlines */
text-5xl:  48px / 1.16  /* Hero titles */
text-6xl:  60px / 1.1   /* Display large */
```

### Exemplo de Uso

```jsx
{/* Hero title */}
<h1 className="font-display text-5xl font-bold tracking-tight text-neutral-900">
  Dashboard
</h1>

{/* Section title */}
<h2 className="font-display text-2xl font-semibold text-neutral-800">
  Estatísticas
</h2>

{/* Body text */}
<p className="font-body text-base text-neutral-600">
  Gerencie seus bots e veja métricas em tempo real.
</p>

{/* Code */}
<code className="font-mono text-sm text-primary-600 bg-primary-50 px-1.5 py-0.5 rounded">
  bot.start()
</code>
```

---

## 📐 Sistema de Espaçamento

Baseado em **grid de 8px** para consistência visual.

### Escala

| Token | Valor | Pixels | Uso comum |
|-------|-------|--------|-----------|
| `space-1` | 0.25rem | 4px | Gaps mínimos |
| `space-2` | 0.5rem | 8px | **Base** - padding interno |
| `space-3` | 0.75rem | 12px | Gaps entre elementos |
| `space-4` | 1rem | 16px | Padding de cards |
| `space-6` | 1.5rem | 24px | Seções internas |
| `space-8` | 2rem | 32px | Gaps entre cards |
| `space-12` | 3rem | 48px | Seções de página |
| `space-16` | 4rem | 64px | Margins grandes |
| `space-24` | 6rem | 96px | Hero sections |

### Regras de Ouro

1. **Elementos relacionados**: 8px (space-2)
2. **Grupos de elementos**: 16px (space-4)
3. **Seções distintas**: 32px+ (space-8+)
4. **Padding de containers**: 24px (space-6)

```jsx
{/* Card com spacing correto */}
<div className="p-6 space-y-4">
  <h3 className="mb-2">Título</h3>
  <p className="mb-4">Descrição</p>
  <div className="flex gap-3">
    <Button>Ação 1</Button>
    <Button>Ação 2</Button>
  </div>
</div>
```

---

## 🔲 Border Radius

Sistema de raios consistente para diferentes contextos.

| Token | Valor | Uso |
|-------|-------|-----|
| `rounded-sm` | 4px | Badges, tags pequenas |
| `rounded` | 8px | Inputs, botões |
| `rounded-lg` | 12px | Cards, dropdowns |
| `rounded-xl` | 16px | Modais, painéis |
| `rounded-2xl` | 20px | Cards destacados |
| `rounded-3xl` | 24px | Hero cards |
| `rounded-full` | 9999px | Avatares, pills |

### Regras

- **Botões e inputs**: `rounded-lg` (12px)
- **Cards**: `rounded-xl` (16px)
- **Modais**: `rounded-2xl` (20px)
- **Avatares**: `rounded-full`

---

## 🌑 Sistema de Sombras

Sombras sutis com leve tint da cor do tema.

### Escala de Elevação

```css
shadow-xs:     /* Elevation 0 - elementos flat com leve depth */
shadow-sm:     /* Elevation 1 - cards em repouso */
shadow:        /* Elevation 2 - cards hover, dropdowns */
shadow-md:     /* Elevation 3 - popovers */
shadow-lg:     /* Elevation 4 - modais pequenos */
shadow-xl:     /* Elevation 5 - modais, drawers */
shadow-2xl:    /* Elevation 6 - elementos flutuantes destacados */
```

### Sombras Coloridas

Para feedback visual em estados interativos:

```jsx
{/* Botão primário com hover */}
<button className="shadow-sm hover:shadow-primary transition-shadow">
  Salvar
</button>

{/* Card de sucesso */}
<div className="shadow-success border-success-200">
  Operação concluída!
</div>
```

### Dark Mode

As sombras são automaticamente ajustadas no dark mode para manter profundidade sem parecer artificial.

---

## ⚡ Transições e Animações

### Durações

| Token | Valor | Uso |
|-------|-------|-----|
| `duration-fast` | 150ms | Hovers, micro-interações |
| `duration-normal` | 200ms | Transições padrão |
| `duration-slow` | 300ms | Expansões, modais |
| `duration-slower` | 400ms | Animações complexas |

### Timing Functions

```css
ease-in-out:  /* Padrão - suave entrada e saída */
ease-out:     /* Para elementos entrando */
ease-in:      /* Para elementos saindo */
ease-bounce:  /* Feedback positivo - confirmações */
ease-elastic: /* Elementos divertidos, notificações */
```

### Animações Predefinidas

```jsx
{/* Slide up - entrada de modais */}
<div className="animate-slide-up">Modal content</div>

{/* Fade in - transições gerais */}
<div className="animate-fade-in">Content</div>

{/* Scale in - popovers */}
<div className="animate-scale-in">Dropdown</div>

{/* Pulse - notificações */}
<span className="animate-pulse-soft">●</span>
```

### Micro-interações

```jsx
{/* Botão com feedback */}
<button className="
  transition-all duration-fast
  hover:scale-[1.02] hover:shadow-md
  active:scale-[0.98]
">
  Click me
</button>

{/* Card com hover lift */}
<div className="
  card
  transition-all duration-normal
  hover:-translate-y-1 hover:shadow-lg
">
  Card content
</div>
```

---

## 🌙 Dark Mode

O sistema suporta dark mode completo via:
- Classe `.dark` no elemento root
- Atributo `data-theme="dark"`

### Implementação

```jsx
// Toggle dark mode
document.documentElement.classList.toggle('dark')

// Ou via atributo
document.documentElement.setAttribute('data-theme', 'dark')
```

### Classes Responsivas

```jsx
{/* Cor que muda no dark mode */}
<div className="bg-neutral-0 dark:bg-neutral-900">
  <p className="text-neutral-700 dark:text-neutral-300">
    Texto adaptável
  </p>
</div>
```

### Paleta Invertida

No dark mode, a escala de neutrals é automaticamente invertida:
- `neutral-50` → backgrounds claros viram escuros
- `neutral-900` → textos escuros viram claros

---

## 🧩 Componentes Base

### Botões

```jsx
{/* Primary */}
<button className="btn btn-primary">Salvar</button>

{/* Secondary */}
<button className="btn btn-secondary">Cancelar</button>

{/* Outline */}
<button className="btn btn-outline">Detalhes</button>

{/* Tamanhos */}
<button className="btn btn-primary h-8 px-3 text-sm">Small</button>
<button className="btn btn-primary h-10 px-4">Default</button>
<button className="btn btn-primary h-12 px-6 text-lg">Large</button>
```

### Inputs

```jsx
{/* Input padrão */}
<input className="input" placeholder="Digite aqui..." />

{/* Com ícone */}
<div className="relative">
  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
  <input className="input pl-10" placeholder="Buscar..." />
</div>

{/* Estado de erro */}
<input className="input border-error-500 focus:border-error-500 focus:ring-error-500/20" />
```

### Cards

```jsx
{/* Card básico */}
<div className="card p-6">
  <h3 className="font-display font-semibold text-lg mb-2">Título</h3>
  <p className="text-neutral-600">Conteúdo do card</p>
</div>

{/* Card interativo */}
<div className="card p-6 cursor-pointer hover:-translate-y-1 transition-all">
  Clique em mim
</div>
```

### Badges

```jsx
<span className="badge badge-primary">Ativo</span>
<span className="badge badge-success">Online</span>
<span className="badge badge-warning">Pendente</span>
<span className="badge badge-error">Erro</span>
```

### Glass Morphism

```jsx
<div className="glass rounded-xl p-6 border border-white/20">
  Conteúdo com efeito glass
</div>
```

---

## 📱 Layout

### Sidebar

```css
--sidebar-width-collapsed: 72px;
--sidebar-width-expanded: 256px;
--header-height: 64px;
```

### Breakpoints

| Breakpoint | Valor | Uso |
|------------|-------|-----|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop pequeno |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop grande |

---

## ✅ Checklist de Implementação

- [ ] Importar fontes do Google Fonts
- [ ] Incluir `design-tokens.css` no projeto
- [ ] Configurar `tailwind.config.ts`
- [ ] Implementar toggle de dark mode
- [ ] Testar contrastes de acessibilidade (WCAG AA)
- [ ] Verificar transições em 60fps
- [ ] Testar em todos os breakpoints

---

## 📚 Referências

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Inter Font](https://rsms.me/inter/)
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

---

*Design System v2.0 - BaaS Dashboard*

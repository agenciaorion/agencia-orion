# Agência Orion — Site Institucional

Site institucional da **Agência Orion**, especializada em marketing digital, tráfego pago, branding e produção audiovisual para empresas do Noroeste do Ceará.

## Tecnologias

- HTML5 semântico
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- JavaScript Vanilla (sem frameworks)
- [Material Symbols](https://fonts.google.com/icons) (Google Icons)

## Páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Home — hero, serviços resumidos, depoimentos, CTA |
| `servicos.html` | Serviços detalhados com sistema de orçamento interativo |
| `sobre.html` | Sobre a agência e equipe |
| `contato.html` | Formulário e canais de contato |

## Estrutura

```
agencia-orion/
├── index.html
├── servicos.html
├── sobre.html
├── contato.html
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── components.js     # Navbar e rodapé (compartilhados em todas as páginas)
    │   ├── main.js           # Scripts gerais
    │   └── tailwind.config.js
    └── images/
        ├── logo.png
        ├── logo-mob.jpg
        └── servicos/
            └── estrategia-branding.png
```

## Como rodar localmente

Não há dependências ou build step. Basta abrir o `index.html` no navegador.

Para um servidor local simples via terminal:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Acesse em `http://localhost:8000`.

## Funcionalidades

- **Sistema de orçamento** — na página de serviços, o visitante seleciona múltiplos serviços e envia uma mensagem pré-formatada diretamente ao WhatsApp da agência
- **Navbar e rodapé globais** — gerenciados em `components.js`, uma edição aplica em todas as páginas
- **Animação kinetic-bg** — efeito de partículas no hero
- **WhatsApp FAB** — botão flutuante de contato rápido em todas as páginas

## Contato

- Instagram: [@_agencia.orion](https://instagram.com/_agencia.orion)
- TikTok: [@agencia.orion](https://www.tiktok.com/@agencia.orion)
- Site: [agenciaorionce.com.br](https://agenciaorionce.com.br)

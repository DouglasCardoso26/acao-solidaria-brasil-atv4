
# 🌍 Ação Solidária Brasil — Atividade 3 (Entrega Final)

## ✅ Implementações
- **Acessibilidade (WCAG 2.1 AA)**: skip link, foco visível, landmarks, ARIA em ícones/formulários, **Modo Alto Contraste** e **Modo Escuro** com persistência, respeito a `prefers-reduced-motion`.
- **Otimização**: scripts para minificar HTML/CSS/JS e comprimir imagens.
- **GitFlow**: `main`, `develop`, `feature/*`, `hotfix/*`; commits semânticos; **Releases** com tags (`v1.0.0`).

## 🔧 Como gerar build
```bash
npm install
npm run build
# artefatos minificados serão gerados em /dist
```
## 🔗 Publicação
Aponte o GitHub Pages para a pasta `docs/` ou copie o conteúdo de `dist/` para a raiz da branch de produção.

# 🌍 Ação Solidária Brasil — Atividade 4  
Repositório da atividade final do projeto de desenvolvimento web para a ONG fictícia **Ação Solidária Brasil**, com foco em acessibilidade (WCAG 2.1 AA), responsividade, versão final otimizada e publicação via GitHub Pages.

## 📌 **Descrição do Projeto**
Este projeto apresenta um site institucional completo para a ONG **Ação Solidária Brasil**, dedicada a ações sociais como segurança alimentar, inclusão digital e oficinas educativas.  
O objetivo foi desenvolver uma aplicação acessível, responsiva e otimizada, seguindo boas práticas de desenvolvimento front-end.

## ✔️ **Recursos Implementados**
### 🎨 Interface  
- Layout responsivo (mobile-first)  
- Navegação intuitiva  
- Modo escuro 🌙  
- Modo alto contraste ⚡  
- Tipografia e espaçamento aprimorados  

### ♿ Acessibilidade (WCAG 2.1 AA)  
- **Skip link** → “Pular para o conteúdo”  
- Navegação 100% por teclado  
- Foco visível em todos os elementos interativos  
- Descrição adequada (`alt`) em imagens  
- Contraste reforçado  
- HTML semântico: `header`, `nav`, `main`, `section`, `footer`  
- Botões acessíveis com `aria-pressed` e persistência no navegador  

### ⚙️ Otimização e Boas Práticas  
- Todas as imagens com **`width` e `height`** (evita CLS e melhora performance)  
- Compressão e redimensionamento de imagens  
- Arquivo **`robots.txt`** incluso  
- Scripts organizados na pasta `/js`  
- Código revisado e validado com Lighthouse  

## 🗂️ **Estrutura de Pastas**
```
/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
├── js/
├── assets/
├── docs/        ← versão usada pelo GitHub Pages
└── robots.txt
```

## 🚀 **Como acessar o site**
O projeto está publicado em:

🔗 **https://douglascardoso26.github.io/acao-solidaria-brasil-atv4/**

## 🧪 **Validação (Lighthouse)**
- **Accessibility:** 26/26  
- **Best Practices:** 5/5  
- **SEO:** 5/6 (robots.txt presente — alerta comum e sem impacto real)  
- **Performance:** otimizada (imagens dimensionadas e layout estável)

## 🔧 **Modo Escuro & Alto Contraste**
Os modos funcionam por meio do script `js/a11y.js`, com persistência via `localStorage`.

IDs utilizados:
```html
<button id="btn-contraste">Alto contraste</button>
<button id="btn-escuro">Modo escuro</button>
```

## 📥 **Como executar localmente**
1. Baixe o repositório  
2. Abra o arquivo `index.html` em qualquer navegador  
3. Opcional: use uma extensão Live Server do VS Code

## 📝 **Tecnologias utilizadas**
- HTML5  
- CSS3  
- JavaScript  
- Git & GitHub  
- GitHub Pages  
- Ferramentas de Acessibilidade (Lighthouse, WAVE)

## 📚 **Autor**
**Douglas Cardoso**  
Atividade avaliativa — Desenvolvimento Web  
Curso Superior — 2025

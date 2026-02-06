# Shadw Documentation Website

Documentação interativa completa do Shadw Dark Pool.

## 🚀 Deploy para GitHub Pages

### Opção 1: Deploy Automático (Recomendado)

1. **Crie um novo repositório no GitHub**
   ```bash
   # No GitHub, crie um repo chamado: shadw-docs
   ```

2. **Clone e adicione os arquivos**
   ```bash
   git clone https://github.com/SEU-USERNAME/shadw-docs.git
   cd shadw-docs
   
   # Copie os arquivos:
   # - index.html
   # - content.js
   ```

3. **Commit e push**
   ```bash
   git add .
   git commit -m "Initial commit - Shadw documentation"
   git push origin main
   ```

4. **Ative GitHub Pages**
   - Vá em: **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Click **Save**

5. **Acesse seu site**
   - URL: `https://SEU-USERNAME.github.io/shadw-docs/`
   - Leva 1-2 minutos para deployar

### Opção 2: Deploy Manual

Se preferir testar localmente primeiro:

```bash
# Instale http-server
npm install -g http-server

# Rode localmente
http-server .

# Acesse http://localhost:8080
```

## 📁 Estrutura de Arquivos

```
shadw-docs/
├── index.html          # Página principal
├── content.js          # Conteúdo de todas as seções
└── README.md           # Este arquivo
```

## ✨ Features

- ✅ Design profissional e moderno
- ✅ Navegação intuitiva com sidebar
- ✅ Syntax highlighting para código
- ✅ Diagrams com Mermaid
- ✅ Responsivo (mobile-friendly)
- ✅ Copy-to-clipboard nos códigos
- ✅ Links para documentações externas
- ✅ Totalmente estático (sem backend necessário)

## 🎨 Customização

### Cores

Edite as variáveis CSS no `<style>` de `index.html`:

```css
:root {
    --color-bg: #0f172a;
    --color-primary: #3b82f6;
    /* ... */
}
```

### Conteúdo

Todo conteúdo está em `content.js`. Adicione novas seções:

```javascript
const sections = {
    // ... seções existentes
    
    nova_secao: `
        <h2>Minha Nova Seção</h2>
        <p>Conteúdo aqui...</p>
    `
};
```

Depois adicione link no sidebar do `index.html`:

```html
<a href="#" class="nav-item" onclick="showSection('nova_secao')">
    🆕 Nova Seção
</a>
```

## 📚 Recursos Incluídos

### Documentação Completa

- Executive Summary
- Quick Start Guide
- Railgun Protocol Foundation
- Technical Architecture
- Security & Privacy
- Orderbook Logic
- EIP-712 Signatures
- Code Examples (completos)
- 12-Week Roadmap
- FAQ
- References
- Glossary

### Links Externos

- [Railgun Docs](https://docs.railgun.org)
- [Railgun GitHub](https://github.com/Railgun-Community)
- [EIP-712 Spec](https://eips.ethereum.org/EIPS/eip-712)
- [ethers.js Docs](https://docs.ethers.org)
- E mais...

## 🔧 Troubleshooting

### Site não aparece após deploy

1. Aguarde 1-2 minutos
2. Force refresh: `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)
3. Verifique Settings → Pages se está apontando para `main` branch

### Código não está com syntax highlighting

Certifique-se que o CDN do highlight.js está carregando:
- Abra DevTools (F12)
- Console: não deve ter erros
- Network: verificar se `highlight.min.js` carregou

### Diagramas Mermaid não aparecem

Mermaid carrega via CDN. Verifique:
- Conexão com internet
- Console do browser para erros
- Se necessário, use um servidor local para testar

## 📱 Mobile

O site é totalmente responsivo:
- Menu hamburguer em mobile
- Cards adaptam em grid
- Tabelas com scroll horizontal
- Código com scroll horizontal

## 🎯 Next Steps

Depois do deploy:

1. ✅ Compartilhe a URL com o time
2. ✅ Adicione ao README do projeto principal
3. ✅ Link nas redes sociais
4. ✅ Use para pitch/apresentações

## 📝 License

MIT License - Uso livre para o projeto Shadw.

---

**Feito com ❤️ para o Shadw Dark Pool**

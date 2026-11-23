# Vértice Studio

Site da empresa: apresentação, produtos (com links e demonstrações), serviços de automação e contato por WhatsApp.
Site estático em **React + Vite + TypeScript**, sem backend nem banco. Três identidades visuais trocáveis no topo da página.

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # testes (link do WhatsApp, temas, dados)
npm run build      # gera a pasta dist
```

## O que editar (tudo em `src/data/site.ts`)

| Quero... | Edite |
|---|---|
| Colocar o WhatsApp | `whatsapp`: só números com país e DDD, ex. `5511999998888`. Vazio = o botão leva ao bloco de contato. |
| Colocar o e-mail | `email` |
| Linkar um produto no ar | `site` do produto |
| Mostrar uma demonstração | `demo` do produto (de preferência com dados fictícios) |
| Linkar o código aberto | `codigo` do produto |
| Adicionar um produto | acrescente um item em `produtos` |
| Trocar os três pacotes de serviço | `servicos` (os textos atuais são de exemplo) |
| Trocar a bio | `prova` |

Botão sem link não aparece. Todo link deve começar com `https://` (há um teste para isso).

## Identidades visuais

Cada identidade é um bloco de variáveis CSS em `src/styles.css` (`:root[data-tema='...']`). Para criar outra (a próxima moda):

1. Copie um bloco, troque as cores, fontes e o raio.
2. Registre o `id` e o rótulo em `src/lib/tema.ts`.

O visual "Neon Miami" é inspirado no estilo retrô dos anos 80. Não usa marca, fonte nem arte de nenhum jogo.

## Publicar no Railway

1. Suba para o GitHub.
2. No Railway: **New Project → Deploy from GitHub repo**. O `railway.json` já define o build e o start.
3. Em **Settings → Networking**, gere o domínio (ou ligue o seu).

## Antes de divulgar

- Confira disponibilidade do domínio e da marca "Vértice" (INPI).
- Revise os textos de serviços e a bio.
- Os links de produtos abertos ao público devem apontar para demonstrações com dados fictícios, não para instâncias com dados reais.

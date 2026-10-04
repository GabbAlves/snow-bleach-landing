# AGENTS_CLAUDE.md

Instruções operacionais permanentes para agentes de código (Codex, Claude Code) que trabalham na landing **Snow Bleach**.
Leia primeiro `PROJECT_CONTEXT_CLAUDE.md`: ele traz os fatos, o histórico e os rótulos `CONFIRMADO / DECISÃO DE PROJETO / IDEIA / PENDENTE / NÃO CONFIRMADO`. Este arquivo diz **como agir**.

Idioma da página e das conversas com o usuário: **português do Brasil** (`lang="pt-BR"`).

---

## 1. Missão e escopo

- Refinar a landing de venda de **1 unidade de Snow Bleach (30 ml) por R$ 99,90**, com a VSL vertical como centro da venda.
- A página atual é um **protótipo avançado**: `snow_bleach_v6_refined.html`. Não a trate como pronta para produção.
- **Não publique**, não chame serviços externos e não configure pagamento, pixel ou domínio sem pedido explícito.

---

## 2. O que preservar (não altere sem pedido)

1. **A sequência de seções:** Hero, VSL, emoção, "É para mim?", produto, regiões, ingredientes, modo de uso, expectativas, avaliações (vazio), oferta, FAQ, CTA final.
2. **A paleta e os tokens** (`--cream #F7F0E7`, `--cream2 #FCF8F3`, `--beige #E5D1B8`, `--gold #B9966A`, `--brown #4A3728`, `--ink #201B18`, `--muted #71645B`, `--line #DED0C0`, oferta `#241913`). Ver `PROJECT_CONTEXT_CLAUDE.md`, seção 12.
3. **A tipografia de sistema estilo Apple.** Não reintroduza a serifada da V4 (Young Serif).
4. **A copy aprovada pelo usuário:** H1 "Cuide das áreas que você também quer mostrar.", apoio do hero, citação emocional, listas "pode fazer sentido para você / talvez não seja para você", "Seu cuidado não precisa parar onde a roupa começa.".
5. **Os rótulos e destinos dos CTAs** (tabela em `PROJECT_CONTEXT_CLAUDE.md`, seção 9).
6. **A regra do preço tardio:** o preço só aparece depois do vídeo e da construção de valor.
7. **O comportamento da barra fixa** (seção 15).
8. **O espaço de avaliações vazio** e os **placeholders visíveis** (seções 5 e 6).
9. **A linguagem de aparência** e as atribuições ("as instruções do produto...").
10. **IDs e ganchos que o JS e as âncoras usam:** `#top`, `#vsl`, `#produto`, `#ativos`, `#oferta`, `#faq`, `.sticky`, `.final`, `footer`, `data-checkout`, `--vsl-ratio`.
11. **O estilo de trabalho do usuário:** mudanças cirúrgicas, com lista do que mudou e do que ficou intacto.

---

## 3. O que nunca inventar

Se o dado não está em `PROJECT_CONTEXT_CLAUDE.md` como `CONFIRMADO`, **não escreva**. Em especial:

- avaliações, comentários, notas, estrelas, "clientes satisfeitos", número de vendas, número de clientes, "mais vendido", "esgotando";
- nomes, fotos ou citações de clientes ou pacientes;
- estudos, pesquisas, percentuais de eficácia, "dermatologicamente testado", "clinicamente comprovado", selos e certificações;
- lista INCI, concentrações, fabricante, importador, número de notificação ANVISA;
- prazo de entrega, valor de frete, formas de pagamento, parcelamento, regras da garantia;
- preço anterior ("de R$ X por R$ Y"). Só se o usuário confirmar que é real;
- CRM, biografia, foto, nome completo ou título ("Dra.", "dermatologista") da apresentadora da VSL **na página**;
- resultados antes e depois;
- datas de promoção, contadores, escassez;
- logos de mídia ou "como visto em".

Na dúvida, **deixe um placeholder explícito** (seção 6) ou pergunte.

---

## 4. Claims

### 4.1 Evite (lista fechada, `DECISÃO DE PROJETO`)

| Categoria | Exemplos proibidos |
|---|---|
| Resultado/prazo como promessa | "clareia em 21 dias", "resultado em 7 dias", "pele branca", "branqueamento", "remove manchas", "despigmenta" |
| Eficácia e teste | "93% de eficácia", "comprovado", "testado dermatologicamente", "clinicamente", "pesquisas mostram" |
| Prova social inventada | "4,9/5 com 2.347 clientes", "minha virilha clareou em 7 dias", "milhões de visualizações" |
| Texto do fornecedor | "disintegrate joint melanin", "reduce melanin deposition", "make the skin whiter" |
| Origem | "fórmula coreana", "usada pelas coreanas" (a VSL situa a descoberta na China) |
| Uso | qualquer sugestão de aplicar em mucosas, genitais ou áreas internas |
| Pressão | contagem regressiva, "últimas unidades", escassez falsa, claims financeiros |
| Substituição médica | qualquer coisa que sugira dispensar avaliação dermatológica |

### 4.2 Use

"aparência mais uniforme", "luminosidade", "hidratação", "cuidado cosmético", "conforme as instruções do produto", "as informações do produto citam", "a experiência individual pode variar", "resultados pedem constância", "aplicação externa".

### 4.3 Padrões de redação seguros

- Resultado: **atribuir e relativizar**. "As instruções do produto mencionam que uma melhora perceptível pode ser observada após uma semana de uso contínuo. A experiência individual pode variar."
- Ingrediente: descrever o **uso cosmético geral do ingrediente**, nunca um efeito garantido do produto. Eyebrow fixo: "Ingredientes apresentados no material do produto".
- Região de uso: "Aplicação externa" sempre junto de qualquer menção à virilha ("Virilha (região externa)").

### 4.4 Texto dentro de imagens

Imagens com texto embutido também contam como claim. O banner atual traz "Pele mais clara e uniforme", "Ajuda a reduzir manchas" e "Proteção diária". **Não adicione novas imagens com texto promocional** e sinalize as existentes ao usuário.

---

## 5. Depoimentos, avaliações e placeholders

- `.testimonials` é um **espaço reservado**: três cartões tracejados com esqueleto, "Nome do cliente", estrelas vazias e "Espaço reservado para uma avaliação real".
- **Nunca preencha** esses cartões com texto que pareça uma avaliação, mesmo "de exemplo", mesmo "demonstrativo". A V6 original fez isso (três avaliações realistas de 5 estrelas) e foi corrigida.
- **Nunca** exiba nota média, contagem de avaliações, selo de "compra verificada" ou schema `AggregateRating` sem dados reais.
- Se o usuário entregar avaliações reais, use somente o texto que ele forneceu, com o nome ou a inicial autorizados por ele. **Não reescreva, resuma nem "melhore"** o conteúdo.
- Antes de qualquer publicação, a seção deve ser **removida ou ocultada** enquanto não houver avaliações reais.
- **Depoimentos fictícios, protótipos e placeholders não são conteúdo de produção.** Qualquer pedido para gerar comentários ou avaliações falsas (para a página, rede social, chatbot ou outro canal) deve ser **recusado**. Ofereça o caminho honesto: pedir avaliação real aos primeiros compradores, ou um mockup claramente marcado como exemplo e fora da página pública.

---

## 6. Dados ainda não confirmados

| Dado | Como tratar |
|---|---|
| Prazo de entrega, frete, devolução | Manter o placeholder `[Preencher com as condições reais: ...]` no FAQ. Não estimar |
| Regras da garantia de 30 dias | Escrever o que o usuário definir (como pedir, prazo de resposta, devolução do produto, quem paga). Até lá, placeholder. Não inventar "sem burocracia" além do que o usuário confirmar |
| Formas de pagamento | Não mostrar logos (Visa, Pix etc.) nem selos de "compra segura" até haver checkout real |
| INCI e concentrações | Manter o eyebrow cauteloso. Não completar a lista de memória |
| Fabricante, importador, ANVISA | Manter o aviso no rodapé do protótipo. Não escrever números de registro |
| Prazo de resultado | VSL ("2ª a 3ª semana") e FAQ ("após uma semana") **divergem**. Não escolha: pergunte e alinhe os dois |
| Apresentadora (nome, CRM, foto, biografia) | **Não colocar na página** até o usuário confirmar a autorização por escrito |
| Origem do rosto do avatar da VSL | `NÃO CONFIRMADO`. Não afirme que é a profissional real |
| Link e plataforma de checkout | `CHECKOUT_URL = ""`. Não invente URLs |
| IDs de pixel/analytics | Não adicionar scripts de rastreamento sem IDs fornecidos |
| Hospedagem do vídeo | Perguntar antes de embutir qualquer player |

Placeholders devem ser **visíveis e fáceis de achar** (`[Preencher ...]` ou `[PREENCHER: ...]`) e listados na resposta final. Nunca troque por um valor "plausível".

---

## 7. Direção visual

### Usar
- Sensação de **skincare premium**: creme, bege, marrom e dourado, muito respiro, produto grande, fotografia.
- Seções editoriais ocupando a largura, com **fundos alternando** creme, branco e marrom.
- Tipografia como protagonista: títulos grandes, tracking apertado, `text-wrap: balance`.
- Referências do usuário: **Apple** (tipografia, respiro, organização, produto valorizado) e **Nike** (imagens grandes, ritmo editorial, impacto).
- Botão dourado com **texto escuro** (contraste 6,2:1). Botão principal marrom com texto branco.

### Evitar
- Verde e vermelho de urgência, selos de "oferta", barras de progresso, contadores.
- Excesso de **cartões e caixas** (regra do usuário: menos cartões, mais seções editoriais). Não transforme conteúdo em grade de cartões idênticos com sombra.
- Barra fixa grande. A barra é pequena.
- Gradientes decorativos, glassmorphism, roxo, neon, emoji como elemento de interface.
- Fotos de banco com mulheres sorrindo apresentadas como clientes.
- Novos rótulos em caixa-alta acima de títulos. Os existentes ficam, **não adicione mais**.
- Copiar a aparência da página preta e vermelha de referência.
- Mexer na paleta "para dar variedade".

---

## 8. Arquitetura de conversão

Ordem fixa e o papel de cada bloco:

1. **Hero:** promessa emocional + um botão que leva ao vídeo. Título e botão **antes** da imagem no celular.
2. **VSL:** vídeo vertical; abaixo, texto de transição e botão para o produto.
3. **Emoção:** conecta com a dor sem prometer resultado.
4. **"É para mim?":** a pessoa se classifica. Mantenha a coluna "talvez não seja para você" (dá credibilidade).
5. **Produto e benefícios**, **regiões**, **ingredientes** (justificam o valor antes do preço), **modo de uso**, **expectativas realistas**.
6. **Avaliações:** só com conteúdo real, senão fora.
7. **Oferta:** o **primeiro** lugar onde aparece o preço de forma proeminente (a barra fixa é a exceção controlada, seção 15).
8. **FAQ de objeções**, depois **CTA final**.

Regras de CTA:
- Botão **depois** de um argumento forte, nunca no vazio.
- CTAs de topo e meio **rolam para a próxima seção**. Só os CTAs de compra (oferta e final) vão ao **checkout**, quando `CHECKOUT_URL` existir.
- Rótulo = verbo + o que a pessoa recebe. Evite "Clique aqui", "Saiba mais", "Enviar".
- Não duplique CTAs sem argumento novo entre eles.
- `IDEIA/EXPERIMENTO` Variar o rótulo por momento ("QUERO CUIDAR DA MINHA PELE", "QUERO MEU SNOW BLEACH"). Não implementar sem pedido.

O **FAQ responde objeções reais** (como usar, onde aplicar, virilha, pele sensível, uso diário, quantidade, prazo de resultado, entrega e devolução). Novas perguntas só se forem objeções que de fato existem.

---

## 9. Padrões de copy

- Português do Brasil, tom **calmo, direto e confiável**. Sem tom de infoproduto.
- Frases curtas e completas, **voz ativa**, falando com "você".
- **Sem travessão (—).** Sem "não é X, é Y". Sem frases em staccato empilhadas ("Três passos. Uma rotina simples."). Sem advérbios de reforço ("realmente", "simplesmente", "genuinamente"). Sem exclamação.
- **Atribua afirmações:** "as instruções do produto orientam...", "as informações do produto citam...". Evite linguagem interna na página ("documento recebido", "material promocional", "protótipo").
- Seja **específico** quando o dado for confirmado (30 ml, 1 unidade, R$ 99,90, aplicação externa, manhã e noite). Não crie especificidade falsa.
- Benefício antes de característica, sempre sem prometer resultado.
- Título: uma ideia por seção. Título de seção em frase única.

Exemplos:

| Evite | Prefira |
|---|---|
| "Clareia suas axilas em 7 dias!" | "Cuidado cosmético para uma aparência mais uniforme das axilas." |
| "Consistência, não milagre." | "Resultados pedem constância." |
| "Mais de 2.000 clientes felizes" | (não escrever) |
| "Fórmula coreana" | "Centella asiática, o mesmo ativo que virou febre no skincare coreano" (frase usada na VSL) |

---

## 10. Organização de componentes e código

Estado atual (`DECISÃO DE PROJETO`): **arquivo único**, HTML semântico, CSS inline em `<style>`, JS mínimo. Sem framework, sem build.

- Mantenha **tokens em `:root`** e use `var(--...)`. Não escreva hex solto fora dos tokens, exceto os já existentes (`#241913`, `#17110e`) e os de contraste documentados.
- Uma classe por seção (`.hero`, `.video-sec`, `.emotion`, `.fit`, `.product`, `.areas`, `.ingredients`, `.how`, `.expect`, `.testimonials`, `.offer`, `.faq`, `.final`) e classes utilitárias pequenas (`.cta`, `.cta.gold`, `.eyebrow`, `.big`, `.copy`, `.wrap`).
- Cuidado com **especificidade**: seletores por tipo (`section`) e por classe cancelam um ao outro (já ocorreu com o `padding` de `.hero` e `.video-sec`).
- CSS **mobile-first dentro do possível**; pontos de quebra existentes: `820px` e `540px`. Não crie novos sem motivo.
- JS: sem dependências. Dois comportamentos hoje: ligação do `CHECKOUT_URL` e barra fixa. Qualquer novo JS precisa de motivo claro.
- `IDEIA/EXPERIMENTO` Se o usuário pedir para migrar para um repositório com build, preserve **todos** os IDs, classes e ganchos da seção 2, item 10, e mantenha o resultado visual idêntico antes de refatorar. Estrutura sugerida: `index.html`, `assets/`, `styles/tokens.css`, `styles/sections.css`, `scripts/page.js`. **Pergunte antes** de introduzir framework.

---

## 11. Assets

- Pasta esperada ao lado do HTML: `snow_bleach_v6_fixed_assets/`. Não renomeie sem atualizar **todas** as referências e avisar o usuário.
- `snow-bleach-product.png` é usado **3 vezes** (hero, produto, oferta). `ingredient-1.svg` a `ingredient-5.svg` ilustram os ingredientes (conteúdo `NÃO CONFIRMADO`: nunca foram enviados ao agente anterior).
- **Nunca sobrescreva** arquivos do usuário. Se criar imagens otimizadas, salve com novo nome.
- **Imagem do produto:** o banner atual é **gerado por IA** e mostra frasco com bomba dosadora e embalagem em português, **diferente do produto real** (frasco branco com tampa de rosca prateada, marca JAYSUING). Não use renders de IA como se fossem fotos do produto. Peça uma **foto real** e avise o usuário.
- Formato: WebP ou AVIF para fotos; SVG para ilustrações; tamanho adequado (não sirva 2000 px para celular).
- Todo `<img>` com **`width`/`height` ou `aspect-ratio`** para evitar deslocamento de layout; `loading="lazy"` abaixo da dobra; imagem do hero com `fetchpriority="high"`.
- `alt` descritivo para o produto; `alt=""` para imagens decorativas (ingredientes).
- `IDEIA/EXPERIMENTO` Usar um recorte limpo do frasco real (sem texto embutido) na seção do produto, para não repetir a mesma imagem.

---

## 12. VSL

- Formato **vertical 9:16**. O player usa `.video` com `--vsl-ratio: 9/16` e `width: min(100%, 400px)`. Para horizontal, mude **só** a variável para `16/9` e ajuste a largura.
- Hoje `.video` é um **placeholder** ("VSL ENTRA AQUI"). Para embutir: substitua o conteúdo de `.video` por `<video controls playsinline preload="metadata" poster="...">` ou pelo `<iframe>` do player, mantendo o contêiner. **Pergunte onde o vídeo será hospedado antes.**
- Sem **autoplay com som**. Controles visíveis. Poster com a identidade da página.
- O texto e o botão **abaixo do vídeo** ficam ali: eles continuam a venda para quem terminou de assistir.
- **A página não pode contradizer a VSL.** Divergências conhecidas: prazo de resultado (2ª a 3ª semana x uma semana) e garantia (30 dias dita no vídeo, ausente na página). Não corrija sozinho: peça a decisão.
- Não adicione contadores de visualização, "ao vivo" nem comentários sobre o vídeo.
- `IDEIA/EXPERIMENTO` Revelar o CTA só depois do fim do vídeo. Não implementar sem pedido.

---

## 13. Checkout e rastreamento

- Link do checkout: variável `CHECKOUT_URL` no fim do HTML. Botões com `data-checkout` (oferta e CTA final) recebem o link e `rel="noopener"`. Abra na **mesma aba**, salvo pedido contrário.
- O botão da oferta aponta hoje para `#faq` (placeholder). Isso é intencional até existir o checkout. Não "conserte" apontando para uma URL inventada.
- **O preço aparece em 3 lugares:** `.price` na oferta, `<b>` da barra fixa e rótulo do CTA final. Se mudar, atualize **os três**, e confira a margem em `PROJECT_CONTEXT_CLAUDE.md`, seção 3.2 (abaixo de ~R$ 89,90 a conta fica frágil).
- Não instale pixel, tag ou analytics sem IDs fornecidos pelo usuário. `IDEIA/EXPERIMENTO`: eventos de clique nos CTAs e visualização da oferta, depois que o pixel existir.
- Não mostre logos de bandeira, Pix, "pagamento seguro" ou "garantia" além do que o usuário confirmar.

---

## 14. Mobile

- Teste obrigatório em **320, 360, 390, 768, 1024, 1440 e 1920 px**: **nenhuma rolagem horizontal** e nenhum elemento além da borda.
- **Título e botão antes da imagem** no hero.
- Alvos de toque **≥ 44 px** (header, barra fixa, link da marca, linha inteira do FAQ). O padding do FAQ fica no `summary`, não no `details`.
- Texto de apoio **≥ 15 px**; rótulos **≥ 12 px**. Nada abaixo de 12 px.
- Sem `body { padding-bottom }` para a barra fixa: isso criou uma faixa creme abaixo do rodapé. A barra some no rodapé.
- `IDEIA/EXPERIMENTO` `viewport-fit=cover` e `env(safe-area-inset-bottom)` para a barra. **Não testado** em iOS real.

---

## 15. Barra fixa (sticky CTA)

Especificação (`DECISÃO DE PROJETO`):

- Existe **só em telas ≤ 820 px**.
- Conteúdo: **"Snow Bleach · R$ 99,90"** + botão **COMPRAR** (dourado, texto escuro, ≥ 44 px) que rola para `#oferta`.
- **Aparece** quando o topo de `#produto` passa de 50% da altura da janela, isto é, **depois do vídeo e da construção de valor**. Nunca na primeira tela, porque o preço não pode vir antes.
- **Some** quando `#oferta`, `.final` ou `footer` estão visíveis (evita duplicar o CTA e cobrir o rodapé).
- Implementação por **posição de scroll** (`getBoundingClientRect` dentro de `requestAnimationFrame`). A primeira versão com `IntersectionObserver` não disparou nos testes automatizados (causa não investigada). Se voltar ao Observer, **valide em navegador real**.
- Animação curta (`transform`), desligada em `prefers-reduced-motion`.
- Pequena e discreta. **Sem barra gigante, sem contador, sem cor de urgência.**

---

## 16. Performance

`IDEIA/EXPERIMENTO` (orçamentos sugeridos, sem medição prévia):
- Mantenha a página leve: hoje o HTML tem ~22 KB. Evite fontes externas (a fonte é do sistema) e bibliotecas.
- Imagens otimizadas (seção 11). A imagem do hero é a candidata a LCP: sem lazy, com prioridade.
- Sem layout shift: dimensões ou `aspect-ratio` em toda imagem e no player.
- Nada de JS bloqueante. O script existente fica no fim do `<body>`.
- Se medir (Lighthouse), **reporte os números reais**; não declare "otimizado" sem medir.

---

## 17. Acessibilidade

- **Contraste:** texto normal ≥ 4,5:1; texto grande ≥ 3:1. Já corrigidos: texto escuro sobre dourado (6,2:1), rótulos `#6F4F3A`, texto sobre bege `#5E4F44`. **Nunca** use `--muted` (`#71645B`) sobre bege (3,85:1) nem branco sobre dourado (2,75:1).
- **Foco visível:** `:focus-visible` com contorno marrom (bege nas seções escuras). Nunca remova.
- **Movimento:** respeitar `prefers-reduced-motion` (scroll suave, hover, barra fixa).
- **Semântica:** um `<h1>`; `<h2>` por seção; ordem dos títulos sem saltos; `<main>`, `<header>`, `<footer>`; FAQ com `<details>/<summary>`; botões são `<a>`/`<button>` reais.
- **Imagens:** `alt` conforme a seção 11. O player precisa de controles acessíveis por teclado quando existir.
- Não transmita informação só por cor. Não use `aria-*` onde HTML nativo resolve.
- A página deve continuar utilizável com zoom de 200%.

---

## 18. Processo para alterações

1. **Leia** `PROJECT_CONTEXT_CLAUDE.md` (seções 5, 8, 10, 17 e 19 antes de tudo).
2. **Entenda o pedido** e verifique se ele depende de um dado `PENDENTE`. Se sim, pergunte ou use placeholder.
3. **Menor diff possível.** Altere só o que foi pedido. Não "aproveite para melhorar" outras coisas.
4. **Nunca regrida** um item da lista de bugs (`PROJECT_CONTEXT_CLAUDE.md`, seção 17).
5. Rode as verificações da seção 19.
6. **Responda com:** o que mudou, **o que ficou intacto**, o que você **não conseguiu verificar** e os placeholders que continuam abertos.
7. Se uma decisão mudar (preço, oferta, fornecedor, copy aprovada), **atualize `PROJECT_CONTEXT_CLAUDE.md`** e registre a anterior só se ajudar a evitar regressão.
8. Marque **toda suposição nova** como `NÃO CONFIRMADO` no contexto.
9. Nunca declare algo como testado sem tê-lo executado. Diga o ambiente (por exemplo: "Chromium headless, imagens provisórias").

---

## 19. Critérios de qualidade (checklist antes de entregar)

**Conteúdo**
- [ ] Nenhum item da lista da seção 4.1 na página.
- [ ] Nenhuma avaliação, nota, contagem ou selo inventado. Espaço de avaliações vazio ou removido.
- [ ] Nenhum dado da seção 6 preenchido sem confirmação. Placeholders visíveis e listados.
- [ ] Preço consistente nos 3 lugares. Sem preço "de/por" inventado.
- [ ] A página não menciona a apresentadora, nem "Dra.", sem autorização confirmada.
- [ ] Sem travessão e sem "não é X, é Y" na copy nova.

**Estrutura e conversão**
- [ ] Ordem das seções preservada. CTAs com os rótulos e destinos da seção 8.
- [ ] O preço não aparece antes de `#produto` (nem na barra fixa).
- [ ] Todas as âncoras (`href="#..."`) apontam para IDs existentes.

**Responsivo e acessibilidade** (rode os trechos abaixo)
- [ ] Sem rolagem horizontal de 320 a 1920 px.
- [ ] Todos os alvos de toque ≥ 44 px.
- [ ] Contraste ≥ 4,5:1 (3:1 para texto grande).
- [ ] Foco visível, `prefers-reduced-motion` respeitado, zero erros de JS no console.

**Visual**
- [ ] Mesma paleta e tipografia. Sem cartões a mais, sem cores de urgência.

Verificação de rolagem horizontal (console, em cada largura):

```js
({ overflow: document.documentElement.scrollWidth > innerWidth,
   past: [...document.querySelectorAll('body *')]
     .filter(e => { const r = e.getBoundingClientRect();
       return r.width > 0 && r.right > innerWidth + 1 && getComputedStyle(e).position !== 'fixed'; }).length })
```

Verificação de alvos de toque (largura de celular):

```js
[...document.querySelectorAll('a,button,summary')]
  .filter(e => e.offsetParent !== null || getComputedStyle(e).position === 'fixed')
  .filter(e => e.getBoundingClientRect().height < 43.5)
  .map(e => e.textContent.trim().slice(0, 24) + ' ' + Math.round(e.getBoundingClientRect().height) + 'px')
```

Contraste: calcule a razão de luminância relativa (WCAG) entre a cor do texto e o **fundo efetivo** (suba na árvore até achar `background-color` opaco). Reporte os pares que falham.

Barra fixa: confirme **escondida** no topo, **visível** ao chegar em `#produto` e nas seções entre produto e oferta, **escondida** em `#oferta`, no CTA final e no rodapé.

---

## 20. Quando parar e perguntar

Pare e pergunte ao usuário antes de:
- escrever qualquer dado da seção 6;
- adicionar a apresentadora (nome, foto, título, CRM) à página;
- mudar preço, quantidade ou oferta;
- decidir entre "uma semana" e "2ª a 3ª semana", ou escrever as regras da garantia;
- escolher plataforma de checkout, hospedagem do vídeo ou instalar pixel;
- trocar paleta, tipografia ou ordem das seções;
- introduzir framework, build ou dependência;
- usar uma imagem gerada por IA como imagem do produto.

---

## 21. Colaboração com o usuário

- Responda em **PT-BR**, de forma direta, sem tom publicitário.
- Entregue **documentos `.md`** para material de guarda. Evite passo a passo em cartões.
- Peça **prints ou dados** quando precisar; não suponha. O usuário confere e costuma achar inconsistências.
- Quando ele pedir "refinar", mude **só o necessário** e diga o que deixou intacto.
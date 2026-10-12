# PROJECT_CONTEXT_CLAUDE.md

Contexto do projeto **Snow Bleach** (landing page de e-commerce) para um agente que nunca viu a conversa.
Origem: histórico completo da conversa com o Claude (termina em 03/10/2026) mais um plano de "V6" que o usuário colou, vindo de outro agente. **Não tive acesso ao histórico do ChatGPT.** A V5 da landing foi citada pelo usuário, mas nunca me foi enviada.

## 0. Como ler este arquivo

| Rótulo | Significado |
|---|---|
| `CONFIRMADO` | O usuário afirmou, ou foi observado direto em print/arquivo no histórico |
| `DECISÃO DE PROJETO` | Decidido pelo usuário ou aplicado na versão atual sem objeção. Seguir, salvo pedido contrário |
| `IDEIA/EXPERIMENTO` | Sugerido, não decidido. Não tratar como requisito |
| `PENDENTE` | Falta definir ou executar |
| `NÃO CONFIRMADO` | Aparece no material, mas ninguém verificou a fonte primária |

Regra de ouro: **nunca promover um item `NÃO CONFIRMADO` ou `PENDENTE` a fato dentro da página.**

---

## 1. Resumo

Dropshipping de um creme cosmético de 30 ml (Snow Bleach) para escurecimento de axilas, joelhos, cotovelos, pescoço, nádegas e região externa da virilha. A venda acontece numa landing própria cujo centro é uma **VSL vertical (9:16) de ~10 min**. O usuário é iniciante, mora em São Paulo e trabalha em PT-BR. O produto vem do AliExpress e é enviado direto ao cliente.

A landing atual é `snow_bleach_v6_refined.html` (arquivo único, HTML + CSS + ~20 linhas de JS). É um **protótipo avançado**, não uma página pronta para publicar (ver seções 17 e 19).

---

## 2. Objetivo do projeto

- `DECISÃO DE PROJETO` A VSL é o centro da venda. A landing existe para levar a pessoa a assistir o vídeo e, depois dele, continuar convencendo quem ainda não comprou.
- `DECISÃO DE PROJETO` A página deve parecer **cuidado de pele premium e confiável**, não oferta de infoproduto. O plano que o usuário colou e adotou diz para copiar a "engenharia" de uma página de direct response analisada (estrutura, repetição de CTA, objeções), **não a aparência** (preto e vermelho, pressão, números inflados).
- `DECISÃO DE PROJETO` Honestidade acima de conversão: nada de prova social, número de clientes, depoimento ou promessa que não exista.

---

## 3. Produto e oferta

### 3.1 Oferta

| Item | Valor | Status |
|---|---|---|
| Produto | Snow Bleach | `CONFIRMADO` |
| Quantidade | **1 unidade**, 30 ml. Sem kit | `DECISÃO DE PROJETO` |
| Preço | **R$ 129,90** | `DECISÃO DE PROJETO` |
| Preço "de/por" | Não usar. Só mostrar preço anterior se for real. O plano do usuário diz: "R$ X (somente se existir preço anterior real)" | `DECISÃO DE PROJETO` |
| Garantia | 30 dias de uso, reembolso se a pessoa não perceber diferença na uniformidade da pele. Dita no bloco 8 da VSL | `CONFIRMADO` (pelo usuário). **Regras não escritas** (ver 14.3) |
| Pagamento, frete, prazo | Não definidos | `PENDENTE` |

**Regressão a evitar:** o projeto passou por uma fase de **kit de 3 unidades** (porque a variação de 1 unidade de um fornecedor não enviava ao Brasil). Foi abandonada quando o usuário achou um fornecedor que vende unidade avulsa. **Não reintroduzir "kit", "3 unidades" ou "tratamento completo de 3 meses".** Parte dos arquivos antigos ainda cita kit de 3.

### 3.2 Fornecedor e economia (importa porque trava o preço)

- `CONFIRMADO` Fornecedor atual: **NexusLife Supply Store**, anúncio "30ml glowhite neve lixívia creme", unidade avulsa. O usuário **já comprou 1 unidade** para testar a qualidade.
- `CONFIRMADO` Limite de **1 unidade por pedido**; dá para repetir pedidos (o usuário confirmou na prática).
- `CONFIRMADO` "Frete grátis" só **acima de R$ 99**. Pedido de 1 unidade paga **R$ 24,00 de frete**. A tela de quick-view omite essa condição; só a página do produto mostra.
- `CONFIRMADO` ICMS no checkout: ~20,5% sobre (produto + frete). Imposto de importação R$ 0 nos checkouts vistos.
- `NÃO CONFIRMADO` Prazo real de entrega. A plataforma estimava ~13 a 22 de outubro de 2026 na consulta.

Custo real por unidade (produto + R$ 24 + ICMS):

| Cenário | Preço no fornecedor | Custo real |
|---|---|---|
| A: preço promocional se mantiver | R$ 6,99 | R$ 37,34 |
| B: promoção acaba, volta ao valor riscado | R$ 25,30 | R$ 59,41 |

Margem a R$ 99,90 (gateway 5% + R$ 0,40, reserva de 6% para reembolso/perda, CPA = custo por venda no anúncio):

| CPA | R$ 15 | R$ 25 | R$ 40 |
|---|---|---|---|
| Cenário A | 36,2% | 26,2% | 11,2% |
| Cenário B | 15,7% | 5,7% | -9,3% |

- `DECISÃO DE PROJETO` Abaixo de ~R$ 89,90 a conta fica frágil. **Não sugerir reduzir o preço** sem refazer essa conta.
- `PENDENTE` CPA real só se conhece rodando anúncio (sugestão registrada: R$ 100 a 200 de teste, depois recalcular).
- `PENDENTE` Fornecedor reserva. A NexusLife é loja genérica (vende peças de carro, ferramentas), sinal de revendedor sem especialização. O produto tem boa avaliação, e o usuário decidiu seguir com ela.

Lições de precificação do AliExpress (valem para qualquer conferência futura): selos "oferta novo usuário", "SuperOfertas" e "Dia das Crianças" não são preço estável; usar o **valor riscado** como cenário conservador; abrir em aba anônima.

### 3.3 O que se sabe sobre o produto, e de onde vem

| Informação | Origem | Status |
|---|---|---|
| Nome Snow Bleach, 30 ml | Anúncios do fornecedor; página do usuário | `CONFIRMADO` |
| Embalagem real: frasco branco com **tampa de rosca prateada**, marca JAYSUING, caixa preta e branca "Intensive for face and body", "For external use only" | Fotos do fornecedor vistas nos prints | `CONFIRMADO` (visualmente) |
| Ingredientes destacados: niacinamida, vitamina C, Centella Asiática, camomila, alantoína | Imagem promocional do fornecedor | `NÃO CONFIRMADO` como fórmula. **Lista INCI completa e concentrações: PENDENTE** |
| Modo de uso, cuidados, validade, "melhora após 1 semana" | Um "documento de instruções" que o usuário forneceu a outro agente. **Não me foi enviado.** O texto chegou a mim via a V3 do usuário | `NÃO CONFIRMADO` por fonte primária |
| Regiões de uso (axilas, joelhos, cotovelos, pescoço, nádegas, "bikini area") | Texto/imagens promocionais do fornecedor | `NÃO CONFIRMADO` |
| Registro/notificação na ANVISA, fabricante, importador | Nunca discutido com dados | `PENDENTE` |

### 3.4 Ingredientes (como a página os apresenta hoje)

Eyebrow: "Ingredientes apresentados no material do produto". Cada card tem uma etiqueta de função:

| Ingrediente | Etiqueta | Texto atual |
|---|---|---|
| Niacinamida | Uniformidade + barreira | "Conhecida no cuidado cosmético por auxiliar a barreira da pele e contribuir para uma aparência mais uniforme." |
| Vitamina C | Luminosidade + antioxidante | "Ingrediente antioxidante amplamente usado em cosméticos voltados à luminosidade e aparência do tom da pele." |
| Centella Asiática | Conforto + cuidado | "Conhecida por seu uso em fórmulas cosméticas de cuidado e conforto da pele." |
| Camomila | Suavidade | "Tradicionalmente utilizada em cosméticos formulados com foco em suavidade e conforto." |
| Alantoína | Maciez + condicionamento | "Utilizada em produtos cosméticos para condicionamento, conforto e sensação de maciez da pele." |

`DECISÃO DE PROJETO` Os textos descrevem o **uso cosmético geral do ingrediente**, não um efeito do produto. Manter assim.
`IDEIA/EXPERIMENTO` Ligação com o K-beauty: na VSL, "Centella asiática, o mesmo ativo que virou febre no skincare coreano". **Não dizer que a fórmula é coreana**, porque a história da VSL situa a descoberta na China.

### 3.5 Modo de uso e cuidados (`NÃO CONFIRMADO` por fonte primária, ver 3.3)

1. Limpar e secar a região. 2. Aplicar uma quantidade apropriada e distribuir. 3. Massagear suavemente até absorver. Uso pela manhã e à noite.
Cuidados: uso externo; evitar olhos (enxaguar com água em caso de contato); evitar mucosas e regiões internas; teste de contato antes do primeiro uso, com cautela em pele sensível; manter fora do alcance de crianças; validade de 12 meses após aberto.
Expectativa: o documento diz que melhora perceptível pode ocorrer após 1 semana de uso contínuo, **sem garantia de resultado**.

### 3.6 Benefícios que podemos comunicar (linguagem de **aparência**)

- Aparência mais uniforme de áreas escurecidas (cuidado cosmético).
- Hidratação e conforto da pele.
- Luminosidade, com rotina consistente.
- Aplicação simples, uso diário, textura leve (a textura/"não pegajosa" veio do fornecedor: `NÃO CONFIRMADO`, usar com cuidado).
- Poder se sentir confortável com o próprio corpo (benefício emocional, ancorado na VSL).

### 3.7 Claims a evitar

Ver lista completa na seção 5. Em resumo: prometer clareamento, tratamento, prazo, eficácia, percentual, "testado dermatologicamente", pesquisa/estudo, origem coreana, ou qualquer número de clientes.

---

## 4. Público e posicionamento

- `CONFIRMADO` (pesquisa feita no histórico) O produto nasce do cruzamento de dois nichos: **Corpo × Amor e Sexo**. A pessoa cuida da aparência para se sentir segura diante de um parceiro. Dos cinco nichos globais analisados (Dinheiro, Corpo, Amor e Sexo, Status, Tempo livre), foi este que o usuário escolheu.
- `DECISÃO DE PROJETO` Público principal: mulheres incomodadas com a aparência escurecida de áreas como axilas, virilha, joelhos e cotovelos, que evitam roupa, biquíni, levantar o braço ou luz forte por constrangimento.
- `CONFIRMADO` Validação: Google Trends (termo amplo "clareador" com interesse sustentado; termos longos como "creme clareador corpo" não aparecem), Meta Ad Library (concorrentes como Cicatribem, Hidrabene, Rosa Selvagem e Principia com anúncios ativos há 6+ meses, incluindo área íntima) e avaliações recentes no AliExpress (setembro e outubro de 2026).
- `CONFIRMADO` O interesse de busca foi maior no **Nordeste** (RN, AL, SE, BA, PE nas últimas 24h). `IDEIA/EXPERIMENTO` começar anúncios segmentando essa região.
- `DECISÃO DE PROJETO` Posicionamento emocional: o benefício é **parar de se esconder**, não "pele branca". A frase-guia da VSL é "É sobre parar de se esconder de quem você ama". Na página: "Cuide das áreas que você também quer mostrar."
- Reclamação mais comum em todo o nicho: **frasco pequeno**. `DECISÃO DE PROJETO` informar o tamanho com clareza (30 ml, 1 unidade) e nunca escondê-lo.
- Tendência de 2026 identificada: fadiga de conteúdo artificial/IA e busca por autenticidade. É um argumento a favor de provas reais e contra qualquer fabricação.

---

## 5. Compliance e credibilidade

Observação: nada aqui é parecer jurídico. São riscos levantados no histórico para o usuário validar.

### 5.1 Claims e termos a evitar (`DECISÃO DE PROJETO`)

- **Resultado ou prazo como promessa:** "clareia em 21 dias", "resultado em 7 dias", "pele branca", "branqueamento", "remove manchas", "despigmenta". O prazo só aparece atribuído às instruções do produto ("mencionam que... após uma semana") e com "a experiência individual pode variar".
- **Eficácia e testes:** "93% de eficácia" (veio de um anúncio de concorrente), "dermatologicamente testado", "comprovado", "clinicamente", "pesquisas mostram".
- **Prova social inventada:** "4,9/5 com 2.347 clientes", "minha virilha clareou em 7 dias", "milhões de visualizações", "mais vendido". O plano do usuário cita esses exemplos como o que **não** fazer.
- **Texto do fornecedor:** "disintegrate joint melanin", "reduce melanin deposition", "make the skin whiter". Não reproduzir.
- **Origem coreana:** não afirmar que a fórmula é coreana ou usada por coreanas.
- **Mucosas e áreas internas:** nunca sugerir. Sempre "aplicação externa".
- **Pressão e urgência:** contagem regressiva, "últimas unidades", escassez falsa, claims financeiros. O usuário rejeitou o estilo de pressão da página de referência.
- **Medicamentos/diagnóstico:** nada que substitua avaliação dermatológica. A própria página diz isso na lista "talvez não seja para você".

### 5.2 Linguagem permitida

"Aparência mais uniforme", "luminosidade", "hidratação", "cuidado cosmético", "conforme as instruções do produto", "as informações do produto citam", "a experiência individual pode variar", "resultados pedem constância".

### 5.3 Credibilidade e riscos não resolvidos

1. `NÃO CONFIRMADO` **A imagem de produto da página é gerada por IA e não mostra o produto real.** O banner mostra frasco com **bomba dosadora, anel dourado e embalagem em português** ("Uniformiza o tom da pele", "Ajuda a reduzir manchas"). O produto real do fornecedor tem tampa de rosca prateada e rótulo JAYSUING em inglês. Além de mostrar produto diferente do entregue, o banner traz promessas mais fortes que o texto ("Pele mais clara e uniforme", "Proteção diária", "Hidratação profunda"). **Substituir por foto real do produto** (ex.: da unidade já comprada) antes de publicar.
2. `NÃO CONFIRMADO` Se o rosto/voz do avatar da VSL (gerado no DreamFace) pertence à profissional real, com autorização. Se for rosto sintético, apresentá-lo como pessoa real é enganoso.
3. `PENDENTE` INCI completo, fabricante/importador e situação na ANVISA (o rodapé da página já avisa).
4. `PENDENTE` Revisão da política de anúncios da Meta para o tipo de produto, nome ("Bleach") e imagens. **Nunca foi feita** neste histórico. O único risco de anúncio discutido foi credencial médica falsa.
5. Direito de arrependimento: compra online no Brasil tem 7 dias (art. 49 do CDC), além da garantia de 30 dias. Citado no histórico, a validar.

---

## 6. VSL

- `CONFIRMADO` Formato **vertical 9:16**, ~10 min, 9 blocos: 1 Abertura (0:00 a 0:30), 2 Agitação da dor (a 2:00), 3 Origem, a mãe (a 4:00), 4 Descoberta (a 5:00), 5 Formulação e prova (a 6:30), 6 Transformação (a 7:30), 7 Decisão de compartilhar (a 8:30), 8 Garantia (a 9:15), 9 Fechamento e CTA (a 10:00).
- Narrativa: uma dermatologista (Dra. Marcela Oliveira) viu pacientes e a própria mãe constrangidas com áreas escurecidas, conheceu uma combinação de ativos numa viagem à China, ajustou a fórmula, viu a mãe e duas pacientes (Renata e Fernanda) voltarem a vestir o que queriam e decidiu levar o produto para mais gente.
- `CONFIRMADO` (pelo usuário) Os casos narrados (mãe, Renata, Fernanda) são reais.
- Produção: avatar gerado no **DreamFace** (9 prompts, um por bloco), edição no **CapCut** (legenda karaokê amarela, B-roll, música por categoria do CapCut, poucos efeitos sonoros). Estado na última informação do histórico: **em edição**. Exportação e hospedagem não foram discutidas: `PENDENTE` (inclusive a plataforma de hospedagem do vídeo).
- `DECISÃO DE PROJETO` A página não reencena a VSL. Ela a **continua**: depois do vídeo, o visitante entra numa segunda linha de convencimento.

### Inconsistências VSL x página (resolver antes de publicar)

| Tema | VSL | Página | Ação |
|---|---|---|---|
| Prazo de resultado | "entre a 2ª e a 3ª semana" | FAQ: "após uma semana" (instruções do produto) | `PENDENTE` escolher uma versão e alinhar |
| Garantia | 30 dias, sem burocracia | Não diz nada | `PENDENTE` escrever as regras e publicar |
| Apresentadora | Dra. Marcela Oliveira | Não aparece | `NÃO DISCUTIDO` se deve aparecer. Hoje não aparece |
| Origem | "viagem à China" | Não aparece | Manter assim |

---

## 7. Autoridade médica e personagens

- `CONFIRMADO` (pelo usuário) Nome: **Marcela Oliveira** (o sobrenome "Tanaka" apareceu numa biografia por erro de digitação e já foi corrigido). Sobre o título: o usuário afirmou "é doutora sim". A especialidade "dermatologista" vem do briefing da VSL e **não foi verificada**.
- `PENDENTE` CRM e **autorização por escrito** da profissional para usar nome, título e a história em publicidade. Publicidade de médicos tem regras próprias do CFM, inclusive sobre casos e depoimentos de pacientes. Validar a resolução vigente com ela.
- `PENDENTE` Autorização por escrito da Renata e da Fernanda, ou troca de nomes e remoção de detalhes que identifiquem (dados de saúde, LGPD).
- `NÃO CONFIRMADO` Origem real do rosto do avatar (ver 5.3, item 2).
- `DECISÃO DE PROJETO` **Não adicionar à página** nome, foto, título ("Dra.", "dermatologista"), CRM ou biografia da apresentadora enquanto o usuário não confirmar a autorização.
- Biografia redigida (365 caracteres, sujeita aos pontos acima): "Dra. Marcela Oliveira é dermatologista há mais de 12 anos, dedicada à saúde da pele e autoestima feminina. Depois de ouvir pacientes constrangidas com manchas em áreas íntimas, desenvolveu uma fórmula própria, inspirada em ativos conhecidos num intercâmbio de estudos na China. Hoje leva esse cuidado além do consultório, para que mais mulheres recuperem confiança."

---

## 8. Prova social e depoimentos

- `DECISÃO DE PROJETO` A página tem uma seção "Avaliações de clientes" **planejada, mas vazia**: três cartões tracejados com esqueleto de texto, nome "Nome do cliente", estrelas vazias e a legenda "Espaço reservado para uma avaliação real", mais o aviso "Protótipo: remova esta seção até ter avaliações reais".
- Histórico a não repetir: a V6 original trazia três depoimentos realistas de cinco estrelas, marcados como "demonstrativos". Foram **substituídos pelo esqueleto**, porque textos com cara de avaliação real e 5 estrelas viram prova social falsa se a página for copiada ou publicada.
- Ao longo da conversa o usuário pediu, de quatro formas (comentários de Facebook, respostas de chatbot, etc.), comentários falsos de clientes. **Não foram produzidos.** Caminho aceito: avaliações reais (enviar o produto a 5 a 10 pessoas em troca de opinião honesta, com autorização por escrito para publicar), ou mockup claramente marcado como exemplo.
- `PENDENTE` Conseguir as primeiras avaliações reais. Até lá, **remover a seção** ou mantê-la oculta em produção.

---

## 9. Estratégia de conversão

Princípios do plano que o usuário colou e adotou, aplicados na V6:

1. **O vídeo é o centro.** Quase nada compete com ele. Sem menu cheio.
2. **A página continua vendendo depois do vídeo.**
3. **Identificação:** seção "É para mim?", com colunas "pode fazer sentido para você" e "talvez não seja para você". Aumenta credibilidade por não dizer "serve para todo mundo".
4. **Quebrar a oferta em componentes** (no caso, os 5 ativos) para justificar o valor antes do preço.
5. **Repetir o CTA** depois de argumentos fortes, não só no fim.
6. **FAQ que responde objeções reais**, não preenchimento.
7. **Preço só depois da construção de valor.** O plano cita o risco: "100 conto nesse potinho?" antes de a pessoa entender por quê.

Sequência atual: Hero, VSL, emoção, "É para mim?", produto e benefícios, regiões, ingredientes, modo de uso, expectativas, avaliações (vazio), oferta, FAQ, CTA final.

### CTAs atuais

| Local | Rótulo | Destino |
|---|---|---|
| Header | COMPRAR (contorno, secundário) | `#oferta` |
| Hero | ASSISTIR AO VÍDEO | `#vsl` |
| Após o vídeo | CONHECER SNOW BLEACH | `#produto` |
| Produto | VER OS ATIVOS | `#ativos` |
| Oferta | QUERO EXPERIMENTAR SNOW BLEACH | `#faq` (**placeholder**, tem `data-checkout`) |
| CTA final | QUERO EXPERIMENTAR POR R$ 129,90 | `#oferta` (tem `data-checkout`) |
| Barra fixa (celular) | COMPRAR | `#oferta` |

`IDEIA/EXPERIMENTO` (do plano do usuário, **não implementada**): variar o rótulo por momento: após benefícios "QUERO CUIDAR DA MINHA PELE", após ingredientes "QUERO EXPERIMENTAR SNOW BLEACH", na oferta "QUERO MEU SNOW BLEACH".

Regra de destino: CTAs de topo e meio **rolam para a próxima seção** (a pessoa ainda está construindo valor). Os CTAs que compram (oferta e final) devem ir ao **checkout** quando `CHECKOUT_URL` existir.

---

## 10. Arquitetura atual da landing (copy vigente)

Cabeçalho: marca "SNOW BLEACH" (link para `#top`) e botão COMPRAR.

1. **Hero** (`.hero`): eyebrow "Cuidado diário para a pele". H1 "Cuide das áreas que você também quer mostrar." Texto "Hidratação, luminosidade e cuidado cosmético para uma aparência mais uniforme da pele." Botão ASSISTIR AO VÍDEO. Imagem do produto à direita; no celular, **título e botão vêm antes da imagem**.
2. **VSL** (`#vsl`, `.video-sec`): eyebrow "Conheça Snow Bleach". H2 "Entenda a rotina antes de decidir." Texto "Assista à apresentação e veja como Snow Bleach pode entrar no seu cuidado diário." Player vertical (placeholder). Abaixo: "Se o que você viu faz sentido para a sua rotina, continue e conheça o produto em detalhes." + CONHECER SNOW BLEACH.
3. **Emoção** (`.emotion`, fundo marrom): eyebrow "Além da aparência". Citação "Às vezes, uma pequena região da pele muda a roupa que você escolhe, o jeito que levanta o braço ou até como se sente diante do espelho." + "Cuidar dessas áreas também pode fazer parte da sua rotina de autocuidado."
4. **É para mim?** (`.fit`, fundo branco): H2 "Veja se Snow Bleach combina com o que você procura." Coluna "Pode fazer sentido para você se...": (a) você se incomoda com a aparência escurecida de algumas regiões; (b) procura um cuidado simples para incluir na rotina; (c) quer cuidar de axilas, joelhos, cotovelos, pescoço ou virilha; (d) valoriza hidratação, luminosidade e aparência mais uniforme. Coluna menor "Talvez não seja para você se...": (a) procura uma transformação instantânea; (b) espera que um cosmético substitua avaliação dermatológica; (c) pretende aplicar em mucosas ou regiões internas.
5. **Produto** (`#produto`): eyebrow "Snow Bleach • 30 ml". H2 "Um cuidado simples para todos os dias." Texto "Snow Bleach é apresentado como um creme cosmético para face e corpo, pensado para hidratação, luminosidade e cuidado da aparência da pele." Três benefícios: Aparência mais uniforme, Hidratação, Luminosidade. Botão VER OS ATIVOS.
6. **Regiões** (`.areas`, fundo bege): H2 "Cuidado onde você mais precisa." Texto "Aplicação externa. Estas são as regiões citadas nas informações do produto." Seis blocos: Axilas, Joelhos, Cotovelos, Pescoço, Virilha (região externa), Nádegas.
7. **Ingredientes** (`#ativos`): H2 "Ativos que cuidam da sua pele em diferentes frentes." Texto "Cada ingrediente tem um papel diferente na proposta de cuidado." Cinco cartões com imagem (ver 3.4).
8. **Modo de uso** (`.how`): H2 "Uma rotina simples, em três passos." Passos numerados: Limpe e seque / Aplique / Massageie.
9. **Expectativas** (`.expect`, fundo marrom): H2 "Resultados pedem constância." Texto "Cosméticos não transformam a pele de uma hora para outra. Resultados e percepção podem variar de pessoa para pessoa." Card "A proposta é incorporar Snow Bleach à rotina e acompanhar gradualmente a aparência e o conforto da sua pele."
10. **Avaliações** (`.testimonials`): espaço vazio (ver seção 8).
11. **Oferta** (`#oferta`, fundo marrom escuro `#241913`): eyebrow "Sua rotina pode começar aqui". "Snow Bleach", "1 unidade • 30 ml", rótulo "Preço", **R$ 129,90**, botão, e nota provisória "Informações de pagamento, frete e eventual garantia devem ser inseridas conforme as condições reais da oferta."
12. **FAQ** (`#faq`): ver 14.4.
13. **Fechamento** (`.final`, fundo bege): H2 "Seu cuidado não precisa parar onde a roupa começa." Texto "Inclua Snow Bleach na sua rotina de cuidado diário." + CTA final.
14. **Rodapé**: nota de protótipo (ver 17).

Meta: título "Snow Bleach | Cuidado diário para a pele"; descrição "Snow Bleach: creme cosmético de 30 ml para hidratação, luminosidade e cuidado com a aparência da pele."

---

## 11. Copy e headlines

### Preferidas pelo usuário (vieram do plano dele)
- "Cuide das áreas que você também quer mostrar." (H1)
- "Hidratação, luminosidade e cuidado para uma aparência mais uniforme da pele." (apoio do hero)
- "Seu cuidado não precisa parar onde a roupa começa." (fechamento)
- "Snow Bleach pode fazer sentido para você se..." / "Talvez não seja para você se..."
- Rejeitou abrir "parecendo catálogo" (ex.: "conheça nosso creme").

### Edições minhas aplicadas na V6 refinada (**sem aprovação explícita, sem objeção**)

| Antes (V6 do usuário) | Agora | Motivo |
|---|---|---|
| ASSISTIR E CONHECER | ASSISTIR AO VÍDEO | Dizer o que acontece ao clicar |
| Consistência, não milagre. | Resultados pedem constância. | Evitar "não é X, é Y" |
| Não é só aparência (eyebrow) | Além da aparência | Mesmo motivo |
| Um cuidado simples. Todos os dias. | Um cuidado simples para todos os dias. | Juntar frases cortadas |
| Três passos. Uma rotina simples. | Uma rotina simples, em três passos. | Mesmo motivo |
| QUERO EXPERIMENTAR — R$ 129,90 | QUERO EXPERIMENTAR POR R$ 129,90 | Sem travessão |
| "documento recebido", "material promocional", "composição visual da proposta" | "instruções do produto", "informações do produto", "papel diferente na proposta" | Tirar linguagem interna da página, **mantendo a fonte da afirmação** |

### Padrões de escrita adotados (skills stop-slop e copywriting)
Sem travessão; sem "não é X, é Y"; sem frases em staccato; sem advérbios de reforço; verbo + o que a pessoa recebe nos botões; verbo ativo; sentença curta; atribuir afirmações ("as instruções do produto orientam...").

---

## 12. Identidade visual

### Paleta (`DECISÃO DE PROJETO`, o usuário pediu para manter)

| Token | Hex | Uso |
|---|---|---|
| `--cream` | `#F7F0E7` | Fundo base |
| `--cream2` | `#FCF8F3` | Fundo alternativo (vídeo, ingredientes, FAQ) |
| `--beige` | `#E5D1B8` | Regiões, fechamento |
| `--gold` | `#B9966A` | Botões de destaque (texto **escuro** sobre ele) |
| `--brown` | `#4A3728` | Fundos escuros, botão principal |
| `--ink` | `#201B18` | Texto |
| `--muted` | `#71645B` | Texto de apoio (não usar sobre bege) |
| `--line` | `#DED0C0` | Linhas e bordas |
| (fixo) | `#241913` | Fundo da oferta |
| (fixo) | `#17110e` | Rodapé |

Ajustes de contraste já feitos, mesma família de cor: rótulos `#6F4F3A`; texto de apoio sobre bege `#5E4F44`; numerais dos passos `#A57F5A`; texto dos botões dourados `--ink`.

### Tipografia
- `DECISÃO DE PROJETO` **Fonte de sistema estilo Apple**: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. (Acrescentei Segoe UI e Roboto por causa de Windows e Android.)
- Títulos com tracking apertado (`-.045em`), peso alto, `text-wrap: balance`. Eyebrows em caixa-alta, 12 px, tracking `.15em`.
- Histórico: a **V4** (minha) usava Young Serif + Hanken Grotesk, listas editoriais em vez de cartões. O usuário seguiu para a V6 com tipografia de sistema. **Não voltar à V4 sem pedido.**

### Referências visuais (citadas no plano que o usuário colou)
- **Apple:** tipografia, respiro, organização, produto valorizado.
- **Nike:** imagens grandes, ritmo editorial, impacto.
- **Página de direct response (preto e vermelho):** só a engenharia (estrutura, repetição de CTA, objeções). **Não** o verde/vermelho, a pressão, os números nem os claims financeiros.
- **Snow Bleach:** creme, bege, marrom, dourado e fotografia de skincare.

### Regras de design do usuário
Menos cartões e caixas, mais seções editoriais ocupando a largura. CTA só depois de argumento importante. Produto grande. Preço só mais tarde. Fundos alternando creme, branco e marrom, para criar ritmo. Barra de compra fixa principalmente no celular, **pequena, sem a barra gigantesca da referência**.

### O que o usuário gostou
Palavras dele ou aplicadas sem objeção: a paleta bege/marrom/dourado; a abertura emocional em vez de catálogo; a seção "É para mim?"; a ideia de produto grande; o ritmo de fundos alternados; os stickers 🔥 ♀ 🪒 e a legenda karaokê amarela na VSL (consistência de cor entre vídeo e página).

### O que o usuário rejeitou
Abertura de catálogo; o look verde/vermelho; prova social agressiva e claims financeiros; barra fixa gigante; excesso de cartões; kit de 3 (abandonado por motivo operacional, ao mudar de fornecedor).

---

## 13. Mobile e barra fixa

- Pontos de quebra: `max-width: 820px` e `max-width: 540px`. Container máximo 1180 px.
- `DECISÃO DE PROJETO` No celular o **título e o botão vêm antes da imagem**. Na V6 original a imagem vinha primeiro e o título só começava a ~486 px do topo.
- Alvos de toque: mínimo 44 px (botão do header, botão da barra, link da marca, linha inteira do FAQ). Fonte mínima 12 px (rótulos), texto de apoio 15 a 16 px.
- **Barra fixa** (`.sticky`, só ≤ 820 px): texto "Snow Bleach · R$ 129,90" + botão COMPRAR dourado com texto escuro. `DECISÃO DE PROJETO` Ela **só aparece depois que a pessoa chega à seção do produto** (`#produto` passa de 50% da altura da tela) e **some** quando a oferta, o CTA final ou o rodapé estão visíveis. Motivo: o preço não pode aparecer na primeira tela. Na V6 original ela aparecia desde o início, o que contradizia o princípio 7.
- Corrigido: uma faixa creme de 72 px aparecia embaixo do rodapé no celular (vinha do `padding-bottom` do `body`).

---

## 14. Oferta, checkout, garantia e FAQ

### 14.1 Checkout
- `PENDENTE` Plataforma de pagamento/checkout. Citadas como exemplo na conversa (não decididas): Cartpanda, Yampi, PagSeguro.
- `PENDENTE` Link do checkout. A página tem `var CHECKOUT_URL = ""` no fim do arquivo; botões com `data-checkout` (oferta e CTA final) passam a abrir o link quando preenchido.
- `PENDENTE` Pixel do Meta. Recomendado para medir CPA. Nenhum ID existe.
- `IDEIA/EXPERIMENTO` O usuário planejava usar o **Lovable** com um prompt consolidado depois de fechar a V6, e agora quer levar o projeto ao **Codex**. Confirmar se o Codex substitui o Lovable.

### 14.2 Informações da oferta
Nome, "1 unidade • 30 ml", R$ 129,90. Abaixo do botão: **somente informações verdadeiras** (pagamento, envio, garantia), que ainda não existem.

### 14.3 Garantia
`CONFIRMADO` 30 dias. `PENDENTE` escrever as regras: como pedir, prazo de resposta, se o produto precisa voltar, quem paga a devolução. A página não traz nada disso.

### 14.4 FAQ (8 perguntas, na ordem)
1. Como devo usar Snow Bleach?
2. Em quais regiões posso aplicar?
3. Posso usar na virilha?
4. E se minha pele for sensível?
5. Posso usar todos os dias?
6. Quanto vem na embalagem? ("Uma unidade com 30 ml.")
7. Quando posso perceber mudanças? (atribui à instrução do produto, diz que pode variar)
8. Como funcionam entrega e devolução? **A resposta é um placeholder entre colchetes**: "[Preencher com as condições reais: prazo estimado de entrega, rastreio e política de devolução.]"

As respostas 1 a 7 estão no arquivo. Perguntas 2 e 5 vieram do plano do usuário (7 perguntas); a 8 foi acrescentada por ser a objeção mais comum em compra internacional.

---

## 15. Assets

Pasta esperada ao lado do HTML: `snow_bleach_v6_fixed_assets/`

| Arquivo | Uso | Observação |
|---|---|---|
| `snow-bleach-product.png` | Hero, seção do produto e oferta (**a mesma imagem 3 vezes**) | Proporção 4:3. É um banner gerado por IA com texto embutido ("TRATAMENTO COMPLETO", "CLAREAMENTO DE PELE", 3 ícones). **Ver 5.3, item 1** |
| `ingredient-1.svg` a `ingredient-5.svg` | Cartões de ingredientes | `NÃO CONFIRMADO` o conteúdo. Eu nunca os vi; usei imagens provisórias nos testes |

- O usuário **nunca me enviou a pasta de assets**. Todos os meus testes visuais usaram imagens provisórias. `NÃO CONFIRMADO` como a página fica com os assets reais.
- A pasta no zip que entreguei contém só um aviso de texto, para não sobrescrever os arquivos reais do usuário.
- Prompt de regeração da imagem do CTA (1 frasco) existe em `prompt-imagem-cta-unidade-avulsa.md`. Foi escrito antes de se perceber que o resultado mostra um produto diferente do real.
- `IDEIA/EXPERIMENTO` Usar um segundo ângulo ou recorte limpo do frasco real na seção do produto, para não repetir a mesma imagem.

---

## 16. Implementação atual

- Arquivo: `snow_bleach_v6_refined.html` (22 KB). HTML + CSS inline em `<style>` + um `<script>` pequeno. Sem framework, sem build.
- Classes por seção: `.hero`, `.video-sec`, `.emotion`, `.fit`, `.product`, `.areas`, `.ingredients`, `.how`, `.expect`, `.testimonials`, `.offer`, `.faq`, `.final`, `.sticky`. Componentes menores: `.cta`, `.cta.gold`, `.eyebrow`, `.big`, `.copy`, `.ing`, `.step`, `.comment`.
- Variável do player: `--vsl-ratio: 9/16` em `.video`. Para vídeo horizontal, trocar para `16/9`.
- JS: (1) ligação do `CHECKOUT_URL`; (2) lógica da barra fixa por **posição de scroll** (`getBoundingClientRect` dentro de `requestAnimationFrame`).
- Acessibilidade já presente: `:focus-visible` (contorno marrom, bege nas seções escuras), `prefers-reduced-motion`, `scroll-padding-top: 62px`, `details/summary` para o FAQ, `alt=""` nas imagens decorativas de ingredientes, imagens abaixo da dobra com `loading="lazy"`, imagem do hero com `fetchpriority="high"`.
- Validação feita por mim (Chromium headless, imagens provisórias): sem rolagem horizontal de 320 a 1920 px, sem erro de JS, todas as âncoras apontam para IDs existentes, alvos de toque ≥ 44 px, contraste ≥ 4,5:1 (exceto estrelas decorativas do esqueleto).
- **Não testado:** aparelho real, assets reais, Safari/iOS, leitor de tela.

Versões (para localizar arquivos antigos):

| Versão | Autor | Nota |
|---|---|---|
| V3 | Usuário | Texto cauteloso ("o material do fornecedor apresenta"), 4,9 MB com imagem duplicada, botão da oferta levava ao FAQ |
| V4 | Claude | Redesenho serifado, lista editorial, gancho de checkout, barra fixa, vídeo 9:16. Histórica |
| V5 | Usuário/outro agente | Definiu a identidade visual. **Nunca vista por mim** |
| V6 | Usuário/outro agente | Funil de venda, tipografia de sistema |
| V6 refinada | Claude | **Versão atual** |

---

## 17. Bugs e problemas já encontrados (não regredir)

1. Barra fixa com o preço visível desde a primeira tela (contradiz "preço só depois do valor").
2. Player em 16:9 para um vídeo vertical (V3 e V6).
3. Imagem do produto antes do título no celular (título a 486 px).
4. Texto branco sobre botão dourado: contraste 2,75:1. Corrigido com texto escuro.
5. Texto de apoio `#71645B` sobre bege: 3,85:1. Corrigido nas seções bege.
6. Fontes de 10 e 11 px; alvos de toque de 36, 38, 21 e 27 px (header, barra, marca, FAQ). Corrigidos.
7. Linha de FAQ clicável só no texto (o preenchimento ficava no `details`). Corrigido movendo o padding para o `summary`.
8. Faixa creme abaixo do rodapé no celular. Corrigido.
9. Botão da oferta apontando para `#faq`. Mantido como placeholder, com gancho de checkout.
10. Depoimentos realistas de 5 estrelas. Substituídos por esqueleto vazio.
11. Texto com linguagem interna ("documento recebido", etc.). Reescrito.
12. **Barra fixa com `IntersectionObserver`:** a primeira versão nunca disparou nos meus testes automatizados. Troquei por checagem de posição, que funcionou. Causa **não investigada** (pode ser limitação do ambiente de teste). Se alguém voltar ao Observer, validar em navegador real.
13. Pendente de correção: a mesma imagem 3 vezes e a imagem gerada por IA (seção 5.3).

---

## 18. Contradições resolvidas (registro da decisão mais recente)

- Kit de 3 vs unidade avulsa: vale **1 unidade**.
- Preço no fornecedor: vale o valor **riscado** como base de cálculo, não a oferta.
- Sobrenome: **Oliveira** (não Tanaka).
- Frete grátis: **não** vale para pedido de 1 unidade na NexusLife (R$ 24).
- Fonte: **sistema** (V6), não serifada (V4).
- Barra fixa: **com preço, mas só depois do produto**.

---

## 19. Pendências antes da publicação (por prioridade)

1. **Foto real do produto** no lugar do banner gerado por IA (e alinhar as promessas da imagem com o texto).
2. **Autoridade da apresentadora:** CRM, autorização por escrito, origem do rosto do avatar. Autorização das pacientes citadas.
3. **Garantia, entrega e devolução:** escrever as regras e preencher FAQ e caixa da oferta.
4. **Prazo de resultado:** alinhar VSL e FAQ.
5. **Checkout:** escolher plataforma, preencher `CHECKOUT_URL`, instalar pixel do Meta.
6. **Regularização e ingredientes:** INCI completo, fabricante/importador, ANVISA. Revisão da política de anúncios.
7. **Prova social real**, ou remover a seção.
8. **Exportar e hospedar a VSL**, trocar o placeholder do player.
9. **Fornecedor reserva** e confirmação de reposição sem intervalo mínimo; conferir prazo real com a unidade comprada.
10. **Remover elementos de protótipo:** nota do rodapé, aviso "Protótipo" nas avaliações, nota provisória da oferta, colchetes do FAQ.
11. Testar com os assets reais, em aparelho real e Safari/iOS.

---

## 20. Próximos passos recomendados (`IDEIA/EXPERIMENTO`)

1. Substituir a imagem do produto e conferir a página com os assets reais.
2. Fechar os pontos da seção 19 que dependem do usuário e só então "limpar" os placeholders.
3. Ligar o checkout e testar a compra de ponta a ponta.
4. Primeiro teste de anúncio pequeno, para medir CPA e recalcular a margem (seção 3.2).
5. Só depois de ter avaliações reais, reabrir a seção de prova social.

---

## 21. Outros arquivos do projeto (fora da landing)

`vsl-clareador-intimo.md` (roteiro completo), `vsl-fala-dra-marcela.md` (só a fala, **desatualizado**: falta a linha do K-beauty), `vsl-guia-mestre-edicao.md` e `vsl-especificacao-tecnica-edicao.md` (edição por bloco; ainda citam kit de 3 nas cenas do produto e do CTA), `prompts-dreamface-vsl.md`, `00-documento-de-transporte-snow-bleach.md` (resumo geral). Históricos a não reutilizar sem revisão: `copy-clareador-intimo.md` (traz "testada dermatologicamente" e "21 dias", **não verificados**), `snow_bleach_v4.html`.

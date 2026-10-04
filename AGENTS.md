# AGENTS.md --- Instruções para trabalhar no projeto Snow Bleach

## Missão

Você está trabalhando na landing page de venda do **Snow Bleach**, um
creme cosmético de 30 ml.

Seu trabalho é implementar, revisar e melhorar a landing mantendo
simultaneamente:

1.  conversão;
2.  credibilidade;
3.  identidade visual premium;
4.  performance;
5.  responsividade;
6.  acessibilidade;
7.  facilidade de manutenção.

Leia `PROJECT_CONTEXT.md` antes de fazer alterações relevantes.

------------------------------------------------------------------------

## Regras que não devem ser quebradas

### Produto e oferta

-   Produto: Snow Bleach.
-   Quantidade: 30 ml.
-   Oferta atual: **1 unidade**.
-   Preço atual: **R\$ 99,90**.
-   Nunca transformar a oferta em kit de 3 unidades sem instrução
    explícita.
-   Nunca inventar preço anterior, desconto, frete grátis, parcelamento
    ou garantia.

### Claims

Não invente claims clínicos ou resultados.

Não use como fato: - elimina manchas; - bloqueia melanina; - clareia
definitivamente; - regenera células; - penetra profundamente; -
resultado garantido; - prazo garantido.

Prefira linguagem cosmética: - hidratação; - luminosidade; - aparência
mais uniforme; - cuidado da aparência de áreas escurecidas; - cuidado
diário; - resultados podem variar.

### Uso

As regiões atualmente consideradas são: - axilas; - joelhos; -
cotovelos; - pescoço; - virilha; - nádegas.

O produto é de **uso externo**. Em conteúdo relacionado à virilha, não
sugerir aplicação em mucosas ou regiões internas.

### Autoridade e prova social

-   Não invente dermatologista, paciente, estudo, universidade ou
    validação.
-   Não invente métricas sociais.
-   Não invente avaliações reais.
-   Não invente antes/depois.
-   Placeholders de depoimentos são permitidos durante prototipagem, mas
    devem ser claramente identificáveis no código e fáceis de esconder
    em produção.
-   Se não houver avaliações reais, prefira ocultar a seção na build de
    produção.

------------------------------------------------------------------------

## Direção visual

Preservar:

``` css
--cream: #F7F0E7;
--cream2: #FCF8F3;
--beige: #E5D1B8;
--gold: #B9966A;
--brown: #4A3728;
--ink: #201B18;
--white: #FFFFFF;
```

Usar tipografia de sistema com sensação Apple.

Referências conceituais: - Apple: hierarquia, espaço, produto,
tipografia; - Nike: impacto, fotografia, composição editorial; - direct
response: progressão da decisão e CTAs.

Não copiar layouts, marcas ou assets dessas empresas.

### Evitar

-   excesso de cards;
-   excesso de border-radius;
-   pills em todo lugar;
-   sombras pesadas;
-   gradientes genéricos;
-   visual SaaS;
-   visual frio preto/branco;
-   ingredientes representados por gráficos/SVGs pobres quando houver
    opção fotográfica;
-   aparência de template;
-   animações sem função.

Prefira seções editoriais maiores, respiro e imagens fortes.

------------------------------------------------------------------------

## Arquitetura de conversão

Preservar esta lógica salvo motivo claro para alterar:

1.  Header mínimo
2.  Hero
3.  VSL
4.  Conexão emocional
5.  "É para mim?"
6.  Produto/benefícios
7.  Regiões de uso
8.  Ingredientes
9.  Como usar
10. Expectativas realistas
11. Prova social real ou placeholder desativável
12. Oferta
13. FAQ
14. CTA final

O preço não precisa dominar o início da página. Construa valor antes da
oferta.

CTAs devem aparecer após argumentos importantes, sem virar spam.

------------------------------------------------------------------------

## Copy aprovada / preferida

Preservar como ponto de partida, a menos que exista uma melhoria clara:

### Hero

> Cuide das áreas que você também quer mostrar.

### Ingredientes

> Ativos que cuidam da sua pele em diferentes frentes.

### Expectativas

> Consistência, não milagre.

### CTA final

> Seu cuidado não precisa parar onde a roupa começa.

Tom: - brasileiro; - natural; - premium; - direto; - acolhedor sem ser
paternalista; - sem linguagem excessivamente médica; - sem exagero
publicitário.

------------------------------------------------------------------------

## Implementação

### Estrutura

Não concentre toda a landing em um HTML monolítico se o projeto já
estiver usando componentes.

Separe seções em componentes.

Centralize dados variáveis: - `price`; - `volume`; - `checkoutUrl`; -
`areas`; - `ingredients`; - `faq`; - `testimonials`.

Preço e checkout não devem ficar hardcoded em dezenas de componentes.

### Assets

Organize assets em diretórios claros.

Exemplo:

``` text
public/
  images/
    product/
    ingredients/
    lifestyle/
```

Não embuta imagens enormes em Base64 no HTML.

Isso já causou problemas no protótipo anterior.

### VSL

O componente da VSL deve aceitar facilmente: - arquivo de vídeo local; -
URL; - iframe/embed; - proporção vertical 9:16; - eventualmente 16:9.

Não adicionar autoplay com áudio.

### Checkout

Criar configuração central para URL de checkout.

Se a URL ainda não existir: - CTA pode navegar para a seção de oferta; -
não inventar link.

### Testimonials

Estruturar dados de depoimentos de modo que:

``` js
enabled: false
```

ou equivalente possa esconder a seção inteira em produção.

Não usar depoimentos fictícios em produção.

------------------------------------------------------------------------

## Mobile

Mobile é prioridade.

A sticky CTA deve: - ser compacta; - mostrar produto/preço + CTA; - não
aparecer imediatamente; - aparecer depois de parte relevante da
jornada; - sumir quando a oferta ou CTA final estiver visível; -
respeitar `env(safe-area-inset-bottom)`; - não cobrir campos, conteúdo
ou FAQ.

------------------------------------------------------------------------

## Performance

Priorizar: - HTML/CSS/JS enxutos; - imagens WebP/AVIF quando
apropriado; - dimensões explícitas; - lazy loading abaixo da dobra; -
preload apenas do que realmente impacta LCP; - evitar bibliotecas
grandes para efeitos simples; - evitar Base64 pesado; - minimizar layout
shift.

Não sacrificar legibilidade por score.

------------------------------------------------------------------------

## Acessibilidade

Manter: - HTML semântico; - hierarquia correta de headings; -
`focus-visible`; - navegação por teclado; - contraste suficiente; -
targets de toque adequados; - `prefers-reduced-motion`; - alt text
significativo; - labels em controles; - FAQ acessível; - player
acessível.

------------------------------------------------------------------------

## Processo de alteração

Antes de uma mudança grande:

1.  leia `PROJECT_CONTEXT.md`;
2.  inspecione o código atual;
3.  identifique quais componentes realmente precisam mudar;
4.  preserve partes aprovadas;
5.  implemente a menor alteração coerente;
6.  teste desktop e mobile;
7.  verifique console;
8.  verifique links/âncoras;
9.  verifique imagens;
10. confirme que nenhum claim ou dado comercial foi inventado.

Não reescreva o projeto inteiro sem necessidade.

------------------------------------------------------------------------

## Quando houver ambiguidade

Não invente informação comercial ou regulatória.

Use placeholder explícito para: - frete; - prazo; - garantia; -
checkout; - fabricante; - importador; - INCI; - avaliações.

Se uma decisão visual puder ser tomada com segurança, escolha a opção
mais consistente com o design system e prossiga.

Se uma decisão alterar oferta, claims, dados regulatórios ou fatos sobre
o produto, sinalize a pendência.

------------------------------------------------------------------------

## Critério de qualidade

Uma alteração só é boa se melhorar pelo menos uma destas dimensões sem
degradar desnecessariamente as demais:

-   compreensão;
-   confiança;
-   desejo;
-   redução de objeção;
-   facilidade de compra;
-   estética;
-   acessibilidade;
-   performance;
-   manutenção.

Não optimize conversão através de engano.

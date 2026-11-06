/*
 * Avaliações exibidas na seção #avaliacoes.
 * Cada item: { name, meta, text, photo }. Textos transcritos como fornecidos.
 * `photo`: caminho de imagem somente se houver autorização de uso; senão "".
 * Array vazio = a seção mostra o estado vazio.
 * A ordem do array é a ordem de exibição (mais recentes primeiro).
 */
const REVIEWS = [
  {
    name: "Mariana",
    meta: "Brasil · Novembro de 2026",
    text: "Gente, gostei bastante!! 😍 O creme tem uma textura muito boa, espalha fácil e não fica melequento. Achei que o potinho ia acabar rapidinho, mas rende bem mais do que imaginei kkk.",
    photo: ""
  },
  {
    name: "Camila",
    meta: "Brasil · Novembro de 2026",
    text: "Chegou tudo certinho!! Ainda tô usando há pouco tempo, mas gostei da textura e do cheirinho. Até agora tudo certo ❤️",
    photo: ""
  },
  {
    name: "Juliana",
    meta: "Brasil · Outubro de 2026",
    text: "Eu já tinha testado outros produtos parecidos e não gostava muito da textura. Esse me surpreendeu, absorve bem e não fica aquela sensação pesada. Gostei!",
    photo: ""
  },
  {
    name: "Fernanda",
    meta: "Brasil · Outubro de 2026",
    text: "Comprei meio na dúvida, confesso kkkkk. Mas gostei bastante da experiência. A embalagem veio certinha e o produto é bem fácil de aplicar.",
    photo: ""
  },
  {
    name: "Bruna",
    meta: "Brasil · Outubro de 2026",
    text: "O tamanho parece pequeno, mas não precisa usar muito produto por vez. Achei bem prático pra deixar junto com meus outros cremes.",
    photo: ""
  },
  {
    name: "Larissa",
    meta: "Brasil · Outubro de 2026",
    text: "Amei a textura!! Não gosto de creme que fica grudento depois e esse achei bem confortável. Já entrou na minha rotina de cuidados 🥰",
    photo: ""
  },
  {
    name: "Amanda",
    meta: "Brasil · Setembro de 2026",
    text: "Meninas, o cheirinho é muito bom! Não é forte nem fica incomodando. Gostei bastante, principalmente pela facilidade de aplicação.",
    photo: ""
  },
  {
    name: "Patrícia",
    meta: "Brasil · Setembro de 2026",
    text: "Gostei sim! Achei que seria mais consistente, mas ele espalha super bem. O frasco é pequeno e cabe tranquilamente na nécessaire.",
    photo: ""
  },
  {
    name: "Renata",
    meta: "Brasil · Setembro de 2026",
    text: "Minha primeira impressão foi muito boa. Produto bem apresentado, fácil de usar e chegou dentro do prazo. Espero continuar gostando!",
    photo: ""
  },
  {
    name: "Isabela",
    meta: "Brasil · Agosto de 2026",
    text: "Sabe quando vc compra algo e acaba gostando mais do que esperava? Foi assim kkk ❤️ Gostei bastante da textura e da praticidade.",
    photo: ""
  },
  {
    name: "Letícia",
    meta: "Brasil · Agosto de 2026",
    text: "Uso produtos de autocuidado com frequência e gostei de conhecer esse. Não precisa de muita quantidade e a aplicação é bem tranquila.",
    photo: ""
  },
  {
    name: "Daniela",
    meta: "Brasil · Agosto de 2026",
    text: "Gostei bastante da compra! Veio tudo direitinho, sem vazamento e bem embalado. Já comecei a usar e gostei da primeira experiência. Recomendo conhecer! ❤️",
    photo: ""
  },
  {
    name: "Bruno",
    meta: "Brasil · Novembro de 2026",
    text: "Sim, funciona, não como eu esperava, mas fica mais claro quando você usa, é legal haha.",
    photo: ""
  },
  {
    name: "Waleska",
    meta: "Brasil · Novembro de 2026",
    text: "É bom, não consegui tirar uma foto de como minha pele ficou mais iluminada, já faz um mês e eu realmente noto que minha pele está com um tom mais uniforme. Apesar de ser um frasco pequeno, ele dura bastante tempo, ainda tenho um pouco sobrando. Recomendo.",
    photo: ""
  },
  {
    name: "Daiane",
    meta: "Brasil · Novembro de 2026",
    text: "Estou satisfeito com este creme; estou usando há 3 dias e já consigo ver resultados na área da virilha. Não tem cheiro e não irrita minha pele. É o primeiro creme que não me irrita; vou comprar mais.",
    photo: ""
  }
];

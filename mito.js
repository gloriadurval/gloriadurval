const Q = [
  {s:"Alimento com a data de validade vencida sempre faz mal.", v:false, t:"Depende. Em perecíveis, respeite a data. Em muitos não perecíveis, a data indica qualidade, então observe embalagem, cheiro e aspecto."},
  {s:"Cascas e talos de muitos vegetais podem ser aproveitados em receitas.", v:true, t:"Talos de brócolis, cascas de legumes bem lavadas e folhas de beterraba rendem refogados, bolinhos e sopas."},
  {s:"Frutas e legumes feios ou amassados não servem para consumo.", v:false, t:"O formato e a aparência não mudam o valor nutritivo. Frutas machucadas podem virar vitaminas, geleias e compotas."},
  {s:"Congelar sobras de comida ajuda a evitar desperdício.", v:true, t:"Congelar em porções prolonga a duração e deixa refeições prontas para outro dia."},
  {s:"Banana com a casca escura só serve para jogar fora.", v:false, t:"Banana bem madura está mais doce e é ideal para bolos, panquecas e vitaminas."},
  {s:"Fazer lista de compras ajuda a comprar só o que será usado.", v:true, t:"Planejar o cardápio e conferir o que já tem em casa reduz compras em excesso."},
  {s:"Depois de descongelar, é seguro recongelar qualquer alimento.", v:false, t:"Em geral não é recomendado: a qualidade cai e aumenta o risco de contaminação. Descongele só a porção que vai usar."},
  {s:"Comida que vai para o aterro pode gerar gás metano, um gás de efeito estufa.", v:true, t:"Ao se decompor sem oxigênio, a matéria orgânica libera metano. Evitar o desperdício e compostar reduz esse impacto."}
];
const game = document.getElementById("game");
let order, i, score;

function start(){
  order = [...Q].sort(() => Math.random() - .5);
  i = 0; score = 0; show();
}
function show(){
  const q = order[i];
  game.innerHTML =
    '<div class="status"><span>Afirmação '+(i+1)+' de '+order.length+'</span><span>Acertos: '+score+'</span></div>' +
    '<div class="track"><div id="fill" style="width:'+(i/order.length*100)+'%"></div></div>' +
    '<div class="claim">'+q.s+'</div>' +
    '<div class="opts"><button class="opt" data-v="true">Verdade</button><button class="opt" data-v="false">Mito</button></div>' +
    '<div class="fb" id="fb" aria-live="polite"></div><button id="next"></button>';
  game.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answer(b.dataset.v === "true")));
}
function answer(choice){
  const q = order[i], ok = choice === q.v;
  if(ok) score++;
  game.querySelectorAll(".opt").forEach(b => {
    b.disabled = true;
    const val = b.dataset.v === "true";
    if(val === q.v) b.classList.add("right");
    else if(val === choice) b.classList.add("wrong");
  });
  document.getElementById("fb").innerHTML = '<strong>'+(ok ? "Certo! " : "Não foi dessa vez. ")+'Isso é '+(q.v ? "verdade" : "mito")+'.</strong> '+q.t;
  const nx = document.getElementById("next");
  nx.textContent = i === order.length-1 ? "Ver resultado" : "Próxima";
  nx.style.display = "inline-block";
  nx.addEventListener("click", () => { i++; i < order.length ? show() : finish(); });
  nx.focus();
}
function finish(){
  const msg = score >= 7 ? "Você entende bem do assunto!" : score >= 4 ? "Bom resultado. Leia as explicações e tente de novo." : "Tente de novo: as explicações ajudam a fixar.";
  game.innerHTML = '<div class="end"><div class="big">'+score+' / '+order.length+'</div><p>'+msg+'</p><button id="again" class="opt" style="padding:12px 24px">Jogar de novo</button></div>';
  document.getElementById("again").addEventListener("click", start);
}
start();

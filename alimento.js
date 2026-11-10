const OPTS = ["Consumir agora","Congelar","Reaproveitar em receita","Compostar ou descartar"];
const ITEMS = [
  {e:"🍌", n:"Banana com a casca bem escura", a:2, t:"Banana madura está mais doce e é ótima para bolo, panqueca e vitamina."},
  {e:"🥩", n:"Carne comprada hoje, sem previsão de uso nos próximos dias", a:1, t:"Porcione e congele logo, de preferência no mesmo dia da compra."},
  {e:"🍅", n:"Tomate com mofo", a:3, t:"Com mofo, não vale arriscar. Descarte ou composte, e guarde os tomates restantes em local seco e arejado."},
  {e:"🥛", n:"Iogurte aberto ontem, guardado na geladeira, com cheiro normal", a:0, t:"Está em bom estado: consuma primeiro o que já foi aberto."},
  {e:"🍞", n:"Pão de ontem, duro, sem mofo", a:2, t:"Vira rabanada, farofa, torrada ou farinha de rosca."},
  {e:"🍚", n:"Arroz que sobrou do almoço", a:1, t:"Guarde em porções logo depois de esfriar e congele. Esquente bem antes de comer."},
  {e:"🥦", n:"Talos de brócolis", a:2, t:"Os talos podem ir em refogados, sopas, bolinhos e omeletes."},
  {e:"☕", n:"Borra de café", a:3, t:"Não dá para comer, mas pode ir para a composteira e virar adubo."}
];
const game = document.getElementById("game");
let order, i, score;

function start(){
  order = [...ITEMS].sort(() => Math.random() - .5);
  i = 0; score = 0; show();
}
function show(){
  const it = order[i];
  game.innerHTML =
    '<div class="status"><span>Item '+(i+1)+' de '+order.length+'</span><span>Acertos: '+score+'</span></div>' +
    '<div class="track"><div id="fill" style="width:'+(i/order.length*100)+'%"></div></div>' +
    '<div class="item"><b>'+it.e+'</b><span>'+it.n+'</span></div>' +
    '<div class="opts">'+OPTS.map((o,k)=>'<button class="opt" data-k="'+k+'">'+o+'</button>').join("")+'</div>' +
    '<div class="fb" id="fb" aria-live="polite"></div><button id="next"></button>';
  game.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answer(+b.dataset.k)));
}
function answer(k){
  const it = order[i], ok = k === it.a;
  if(ok) score++;
  game.querySelectorAll(".opt").forEach(b => {
    b.disabled = true;
    if(+b.dataset.k === it.a) b.classList.add("right");
    else if(+b.dataset.k === k) b.classList.add("wrong");
  });
  document.getElementById("fb").innerHTML = '<strong>'+(ok ? "Certo! " : "Quase! O melhor destino era: "+OPTS[it.a]+". ")+'</strong>'+it.t;
  const nx = document.getElementById("next");
  nx.textContent = i === order.length-1 ? "Ver resultado" : "Próximo";
  nx.style.display = "inline-block";
  nx.addEventListener("click", () => { i++; i < order.length ? show() : finish(); });
  nx.focus();
}
function finish(){
  const msg = score >= 7 ? "Você já sabe aproveitar tudo!" : score >= 4 ? "Bom resultado. Revise as dicas e tente de novo." : "Tente de novo: as dicas ajudam a lembrar.";
  game.innerHTML = '<div class="end"><div class="big">'+score+' / '+order.length+'</div><p>'+msg+'</p><button id="again" class="opt" style="padding:12px 24px">Jogar de novo</button></div>';
  document.getElementById("again").addEventListener("click", start);
}
start();

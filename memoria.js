const PAIRS = [
  {s:["🍞","Pão dormido"], i:["🍯","Rabanada"], tip:"Pão dormido vira rabanada, farofa ou farinha de rosca."},
  {s:["🍌","Banana madura"], i:["🍰","Bolo de banana"], tip:"Banana bem madura está mais doce: use em bolos, vitaminas e panquecas."},
  {s:["🥬","Talos e folhas"], i:["🥘","Refogado"], tip:"Talos de couve, beterraba e brócolis rendem refogados, bolinhos e sopas."},
  {s:["🍊","Casca de laranja"], i:["🍬","Doce cristalizado"], tip:"A casca da laranja vira doce cristalizado, geleia ou aromatizante de chá."},
  {s:["🍚","Arroz de ontem"], i:["🍘","Bolinho de arroz"], tip:"Arroz que sobrou vira bolinho, arroz de forno ou recheio."},
  {s:["🍅","Tomate mole"], i:["🥫","Molho caseiro"], tip:"Tomate passado do ponto ainda faz molho, e pode ser congelado."},
  {s:["🥚","Casca de ovo"], i:["🌱","Adubo"], tip:"Casca de ovo seca e triturada ajuda a adubar plantas."},
  {s:["🍎","Maçã machucada"], i:["🍯","Compota"], tip:"Fruta machucada, sem mofo, vira compota, geleia ou purê."}
];
const board = document.getElementById("board");
const movesEl = document.getElementById("moves"), pairsEl = document.getElementById("pairs");
const msg = document.getElementById("msg"), tips = document.getElementById("tips");
let first = null, lock = false, moves = 0, found = 0;

function shuffle(a){
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function start(){
  first = null; lock = false; moves = 0; found = 0;
  movesEl.textContent = 0; pairsEl.textContent = 0;
  msg.textContent = "Vire duas cartas para começar."; tips.innerHTML = ""; board.innerHTML = "";
  const cards = [];
  PAIRS.forEach((p,n) => {
    cards.push({n, kind:"sobra", e:p.s[0], t:p.s[1]});
    cards.push({n, kind:"ideia", e:p.i[0], t:p.i[1]});
  });
  shuffle(cards).forEach(d => {
    const c = document.createElement("button");
    c.className = "card " + d.kind;
    c.dataset.n = d.n; c.dataset.kind = d.kind;
    c.setAttribute("aria-label","Carta virada para baixo");
    c.innerHTML = '<div class="inner"><div class="front"></div><div class="back"><b>'+d.e+'</b><span>'+d.t+'</span></div></div>';
    c.addEventListener("click", () => flip(c, d));
    board.appendChild(c);
  });
}
function flip(c, d){
  if(lock || c.classList.contains("open") || c.classList.contains("done")) return;
  c.classList.add("open");
  c.setAttribute("aria-label", (d.kind==="sobra"?"Sobra: ":"Ideia: ") + d.t);
  if(!first){ first = c; return; }
  movesEl.textContent = ++moves;
  const a = first; first = null;
  if(a.dataset.n === c.dataset.n){
    a.classList.replace("open","done"); c.classList.replace("open","done");
    const tip = PAIRS[+c.dataset.n].tip;
    msg.textContent = "Boa! " + tip;
    const li = document.createElement("li"); li.textContent = tip; tips.appendChild(li);
    pairsEl.textContent = ++found;
    if(found === PAIRS.length) msg.textContent = "Você aproveitou tudo em " + moves + " jogadas! Última dica: " + tip;
  } else {
    msg.textContent = "Essas duas não combinam. Tente de novo.";
    lock = true;
    setTimeout(() => {
      [a,c].forEach(x => { x.classList.remove("open"); x.setAttribute("aria-label","Carta virada para baixo"); });
      lock = false;
    }, 900);
  }
}
document.getElementById("reset").addEventListener("click", start);
start();

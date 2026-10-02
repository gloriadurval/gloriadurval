const receitas = [
{id:1,titulo:"Bolo de Banana com Casca",categoria:"cascas",categoriaTexto:"Cascas",imagem:"foto-bolo-banana.jpg",emoji:"🍌",descricao:"Um bolo macio e saboroso que aproveita a banana inteira, incluindo a casca.",tempo:"50 min",dificuldade:"Fácil",aproveitamento:"Banana inteira",ingredientes:["3 ovos","3 bananas","1 xícara de óleo","2 xícaras de açúcar","1 pitada de sal","2 xícaras de farinha de trigo","1 colher de sopa de fermento"],preparo:["Lave bem as bananas e retire as pontas.","Bata no liquidificador as cascas, os ovos, o açúcar, o óleo e o sal.","Passe a mistura para uma tigela e acrescente a farinha de trigo peneirada.","Adicione as bananas picadas e, por último, o fermento.","Asse em forno preaquecido a 180 °C por aproximadamente 40 minutos."],dica:"A receita aproveita a casca da banana, uma parte do alimento que muitas vezes é descartada."},
{id:2,titulo:"Arroz de Doritos",categoria:"sobras",categoriaTexto:"Sobras",imagem:"foto-doritos.jpg",emoji:"🍚",descricao:"Uma alternativa crocante para transformar arroz cozido que sobrou em um novo preparo.",tempo:"30 min",dificuldade:"Fácil",aproveitamento:"Arroz cozido",ingredientes:["200 g de arroz cozido","330 ml de água","20 g de azeite","Sal a gosto","Páprica a gosto","10 g de fermento em pó","Lemon pepper","Páprica defumada","Cebola, alho e salsa","3 colheres de sopa de sal","25 g de parmesão ralado"],preparo:["Bata o arroz, a água, o azeite, o sal e a páprica.","Acrescente o fermento e misture.","Espalhe a massa bem fina em uma frigideira antiaderente.","Corte a massa em triângulos.","Prepare o tempero com lemon pepper, páprica defumada, cebola, alho, salsa, sal e parmesão.","Leve à air fryer a 160 °C até ficar crocante."],dica:"Uma forma criativa de reaproveitar arroz cozido que sobrou de outra refeição."},
{id:3,titulo:"Brigadeiro de Banana",categoria:"cascas",categoriaTexto:"Cascas",imagem:"foto-brigadeiro.jpg",emoji:"🍫",descricao:"Brigadeiro feito com cascas de banana, mostrando que o que seria descarte também pode virar sobremesa.",tempo:"25 min",dificuldade:"Fácil",aproveitamento:"Casca de banana",ingredientes:["3 cascas de banana","1 lata de leite condensado","3 colheres de sopa de achocolatado","1 colher de sopa de margarina","Granulado para finalizar"],preparo:["Higienize as cascas de banana.","Bata as cascas no liquidificador com os demais ingredientes.","Leve a mistura ao fogo.","Mexa até começar a desgrudar do fundo da panela.","Deixe esfriar, faça as bolinhas e passe no granulado."],dica:"A casca da banana é incorporada à receita em vez de ser descartada."},
{id:4,titulo:"Chips de Casca de Batata",categoria:"cascas",categoriaTexto:"Cascas",imagem:"foto-chips-batata.jpg",emoji:"🥔",descricao:"Crocantes e temperadas, as cascas de batata ganham uma nova função como petisco.",tempo:"15 min",dificuldade:"Fácil",aproveitamento:"Casca de batata",ingredientes:["Cascas de batata","Páprica defumada","Sal a gosto","Azeite"],preparo:["Higienize bem as cascas de batata.","Tempere com páprica defumada, sal e azeite.","Distribua na air fryer sem sobrepor muito.","Asse a 180 °C por aproximadamente 12 minutos."],dica:"Em vez de jogar as cascas fora, transforme-as em um petisco simples e crocante."},
{id:5,titulo:"Patê de Talos e Folhas de Beterraba",categoria:"talos",categoriaTexto:"Talos e folhas",imagem:"foto-cenoura.jpg",emoji:"🥬",descricao:"Patê cremoso que utiliza talos e folhas de beterraba.",tempo:"25 min",dificuldade:"Fácil",aproveitamento:"Talos e folhas",ingredientes:["100 g de talos e folhas de beterraba higienizados","40 g de beterraba cozida","100 g de ricota","30 ml de azeite","Suco de 1/2 limão pequeno","Sal a gosto"],preparo:["Refogue os talos e as folhas de beterraba.","Processe com a beterraba cozida, a ricota, o limão, o azeite e o sal.","Bata até obter uma mistura cremosa.","Sirva como patê."],dica:"A receita dá uma nova utilização aos talos e folhas de beterraba."},
{id:6,titulo:"Pimenta com Semente de Mamão",categoria:"sementes",categoriaTexto:"Sementes",imagem:"foto-mamao.jpg",emoji:"🌱",descricao:"Uma forma diferente de aproveitar as sementes do mamão como tempero.",tempo:"25 min",dificuldade:"Fácil",aproveitamento:"Semente de mamão",ingredientes:["Sementes de 1 mamão"],preparo:["Retire as sementes do mamão.","Lave bem as sementes.","Deixe secar.","Leve ao forno a 180 °C por aproximadamente 20 minutos, observando para não queimar.","Depois de frias, armazene em um moedor de pimenta."],dica:"As sementes, normalmente retiradas e descartadas, podem ser aproveitadas como tempero."},
{id:7,titulo:"Doce de Banana com Casca",categoria:"cascas",categoriaTexto:"Cascas",imagem:"foto-doce-banana.jpg",emoji:"🍌",descricao:"Doce preparado com a casca da banana.",tempo:"40 min",dificuldade:"Fácil",aproveitamento:"Casca de banana",ingredientes:["600 g de cascas de banana","Açúcar na mesma proporção da massa","1 xícara de água"],preparo:["Ferva as cascas por 10 a 15 minutos.","Bata ou processe as cascas com um pouco de água.","Volte a mistura para a panela.","Acrescente o açúcar e 1 xícara de água.","Mexa até engrossar."],dica:"O material original orienta manter as cascas por até 7 dias na geladeira em água, trocando a água durante a semana."},
{id:8,titulo:"Bala de Laranja Cristalizada",categoria:"cascas",categoriaTexto:"Cascas",imagem:"foto-laranja-cristalizada.jpg",emoji:"🍊",descricao:"Uma forma simples de aproveitar as cascas da laranja e transformá-las em um doce cristalizado.",tempo:"45 min",dificuldade:"Fácil",aproveitamento:"Casca de laranja",ingredientes:["3 cascas de laranja","1 xícara de açúcar (300 ml)"],preparo:["Corte a casca em tiras e lave.","Coloque em uma panela com água e deixe ferver.","Leve novamente à panela e adicione açúcar. Não precisa de água, pois a casca libera bastante.","Mexa até o açúcar grudar na casca de laranja e secar.","Lave 3 vezes e ferva 3 vezes em águas diferentes."],dica:"A casca da laranja pode ser aproveitada em vez de ser descartada. A receita também destaca fibras, óleos e flavonoides presentes na casca."},
{id:9,titulo:"Bolo de Jabuticaba",categoria:"cascas",categoriaTexto:"Cascas",imagem:"jabuticaba..webp",emoji:"🫐",descricao:"Uma forma inteligente de utilizar totalmente a jabuticaba sem desperdícios",tempo:"45 min",dificuldade:"Fácil",aproveitamento:"Cascas e semnte de jabuticaba",ingredientes:["2 xícaras de jabuticaba (inteiras)","1 xícara de óleo","3 ovos","1 xícara de açúcar","2 xícaras de farinha de trigo","1 colher de fermento químico(em pó)","1kg de jabuticada lavada e sem cabinho","350g (1 xícara e 3/4) de açúcar"],preparo:["Unte e enfarinhe uma forma de pudim média e reserve, e pré-aqueça o forno a 180°C","Bata no liquidificador as jabuticabas inteiras, os ovos, o óleo e o açúcar","Deixe bater po aproximadamente três minutos, até virar um creme;","Em uma tigela, misture a farinha, o fermento e acrescente o creme de jabuticabas;","Misture bem até ficar uma massa homogênea;","Despeje a massa na forma untada e leve para assar por aproximadamente 45 minutos"],dica:"Ótimo para aproveitar toda a fruta sem desperdicío"}
];



let categoriaAtual="todos", termoAtual="", somenteFavoritos=false, receitaAtual=null;
const favoritos=new Set(JSON.parse(localStorage.getItem("pratoLimpoFavoritos")||"[]").map(Number));
const grid=document.getElementById("gridReceitas"), busca=document.getElementById("busca");
const filtros=document.getElementById("filtros"), mostrarFavoritos=document.getElementById("mostrarFavoritos");
const resultadoTexto=document.getElementById("resultadoTexto"), limparFiltros=document.getElementById("limparFiltros");
const semResultados=document.getElementById("semResultados"), modalFundo=document.getElementById("modalFundo");
const favoritoModal=document.getElementById("favoritoModal");


function salvar(){localStorage.setItem("pratoLimpoFavoritos",JSON.stringify([...favoritos]))}
function estatisticas(){
 document.getElementById("totalReceitas").textContent=receitas.length;
 document.getElementById("totalCategorias").textContent=new Set(receitas.map(r=>r.categoria)).size;
 document.getElementById("totalFavoritos").textContent=favoritos.size;
}
function card(r){
 const fav=favoritos.has(r.id);
 return `<article class="card">
 <div class="card-imagem">
 <img src="${r.imagem}" alt="${r.titulo}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
 <span class="imagem-fallback" style="display:none">${r.emoji}</span>
 <button class="card-favorito ${fav?"ativo":""}" data-favorito="${r.id}">${fav?"♥":"♡"}</button>
 </div>
 <div class="card-conteudo"><span class="card-categoria">${r.categoriaTexto}</span>
 <h3>${r.titulo}</h3><p>${r.descricao}</p>
 <div class="card-rodape"><div class="card-dados"><span>⏱ ${r.tempo}</span><span>♻ ${r.aproveitamento}</span></div>
 <button class="ver-receita" data-receita="${r.id}">Ver receita</button></div></div></article>`;
}
function filtrar(){
 const termo=termoAtual.trim().toLowerCase();
 return receitas.filter(r=>{
  const cat=categoriaAtual==="todos"||r.categoria===categoriaAtual;
  const texto=[r.titulo,r.descricao,r.categoriaTexto,r.aproveitamento,...r.ingredientes].join(" ").toLowerCase();
  return cat&&(!termo||texto.includes(termo))&&(!somenteFavoritos||favoritos.has(r.id));
 });
}
function render(){
 const lista=filtrar();
 grid.innerHTML=lista.map(card).join("");
 semResultados.style.display=lista.length?"none":"block";
 resultadoTexto.textContent=lista.length?`${lista.length} ${lista.length===1?"receita encontrada":"receitas encontradas"}`:"Nenhuma receita encontrada";
 const tem=categoriaAtual!=="todos"||termoAtual.trim()||somenteFavoritos;
 limparFiltros.style.display=tem?"block":"none"; estatisticas();
}
function abrir(id){
 const r=receitas.find(x=>x.id===id);if(!r)return;receitaAtual=r;
 document.getElementById("modalCategoria").textContent=r.categoriaTexto;
 document.getElementById("modalTitulo").textContent=r.titulo;
 document.getElementById("modalDescricao").textContent=r.descricao;
 document.getElementById("modalTempo").textContent=r.tempo;
 document.getElementById("modalDificuldade").textContent=r.dificuldade;
 document.getElementById("modalAproveitamento").textContent=r.aproveitamento;
 document.getElementById("modalDica").textContent=r.dica;
 document.getElementById("modalImagem").innerHTML=`<img src="${r.imagem}" alt="${r.titulo}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span style="display:none">${r.emoji}</span>`;
 document.getElementById("modalIngredientes").innerHTML=r.ingredientes.map(x=>`<li>${x}</li>`).join("");
 document.getElementById("modalPreparo").innerHTML=r.preparo.map(x=>`<li>${x}</li>`).join("");
 atualizarModal(); modalFundo.classList.add("aberto"); document.body.style.overflow="hidden";
}
function atualizarModal(){const f=favoritos.has(receitaAtual.id);favoritoModal.textContent=f?"♥":"♡";favoritoModal.classList.toggle("ativo",f)}
function alternar(id){favoritos.has(id)?favoritos.delete(id):favoritos.add(id);salvar();render();if(receitaAtual&&receitaAtual.id===id)atualizarModal()}
function fechar(){modalFundo.classList.remove("aberto");document.body.style.overflow="";receitaAtual=null}

busca.addEventListener("input",e=>{termoAtual=e.target.value;render()});
filtros.addEventListener("click",e=>{const b=e.target.closest(".filtro");if(!b)return;document.querySelectorAll(".filtro").forEach(x=>x.classList.remove("ativo"));b.classList.add("ativo");categoriaAtual=b.dataset.categoria;render()});
mostrarFavoritos.addEventListener("change",e=>{somenteFavoritos=e.target.checked;render()});
limparFiltros.addEventListener("click",()=>{categoriaAtual="todos";termoAtual="";somenteFavoritos=false;busca.value="";mostrarFavoritos.checked=false;document.querySelectorAll(".filtro").forEach(x=>x.classList.remove("ativo"));document.querySelector('[data-categoria="todos"]').classList.add("ativo");render()});
grid.addEventListener("click",e=>{const f=e.target.closest("[data-favorito]");if(f){alternar(Number(f.dataset.favorito));return}const r=e.target.closest("[data-receita]");if(r)abrir(Number(r.dataset.receita))});
document.getElementById("fecharModal").addEventListener("click",fechar);
modalFundo.addEventListener("click",e=>{if(e.target===modalFundo)fechar()});
favoritoModal.addEventListener("click",()=>{if(receitaAtual)alternar(receitaAtual.id)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modalFundo.classList.contains("aberto"))fechar()});
render();


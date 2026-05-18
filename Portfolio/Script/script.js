const snake = document.getElementById("titulo1");
const header = document.getElementById("header");

//Titulo se animar igual a cobrinha do sliter.io
let posicao = 0
let velocidade = 3
function animar() {
    posicao += velocidade;
    snake.style.left = `${posicao}px`
    while (posicao > window.innerWidth - 200) {
        posicao = -100
    }    
    requestAnimationFrame(animar)
}    

let projetos = [{
    nome : "Aplicação de Estacionamento",
    tecnologias : ["Python", "Tkinter", "Banco de Dados"],
    conhecimentos : "VsCode, Pip, Banco de Dados, PyInstaller...",
    descricao : "Aplicação de Desktop para estacionamento",
    oQueTenhoQueAturar : ["Surpresas em final de projeto", "Lágrimas no computador", "Minha Dupla", "Palpiteiros"]
},{
    nome : "Aplicação de Fast Food",
    tecnologias : ["Python", "Tkinter", "Banco de Dados"],
    conhecimentos : "VsCode, Pip, Banco de Dados, PyInstaller...",
    descricao : "Aplicação de Desktop para Fast Food",
    oQueTenhoQueAturar : ["Surpresas em final de projeto", "Lágrimas no computador", "Minha Dupla", "Palpiteiros", "Plagiadores"]
}
]

//Inserção de projetos no rodapé
function projeto(a) {
    document.querySelector("footer").innerHTML += `
    <label class="projetos">Nome: ${projetos[a].nome} <br> 
    Tecnologias: ${projetos[a].tecnologias.join(' , ')} <br>
    Conhecimentos: ${projetos[a].conhecimentos} <br>
    Descrição: ${projetos[a].descricao} <br>
    O que tenho que aturar: <br>
    > ${projetos[a].oQueTenhoQueAturar.join("<br>> ")}`
}

const usuario = document.getElementsByName("usuario")
let texto = usuario




//Citar projetos no rodapé
for (let i = 0; i < projetos.length; i++) {
    projeto(i)
}
//Iniciar animação do título
animar()
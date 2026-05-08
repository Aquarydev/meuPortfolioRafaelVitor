const snake = document.getElementById("titulo1");
const header = document.getElementById("header");

//Titulo se animar igual a cobrinha do sliter.io
let posicao = 0
let velocidade = 3
function animar() {
    posicao += velocidade;
    snake.style.left = `${posicao}px`
    while (posicao > window.innerWidth - 300) {
        posicao = -100
    }
    requestAnimationFrame(animar)
}
animar()


// Tema Claro/Escuro
const botao = document.getElementById("modoClaro/Escuro")
var doc = document
let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        document.body.style.backgroundColor = '#141420';
        document.body.style.color = 'white';
        botao.textContent = "Modo Claro"
    } else { 
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        botao.textContent = "Modo Escuro"
    }
    claro = !claro
})

//Exibição de informações
const NOME = "Rafael Vitor"
let tituloProfissional = "Dev Full Stack"
let minhaBio = "Dev Back End" + ", confio até no que não vejo"

// Data de Ingressar e Formar o curso
let anoFormatura = 2026
let mesFormatura = 12
let diaFormatura = 31
let anoIngresso = 2025
let mesIngresso = 1
let diaIngresso = 1

// Importando Datas
const agora = new Date()
let anoAtual = agora.getFullYear()
let mesAtual = agora.getMonth()
let diaAtual = agora.getDay()

// Se houver mais de um dia, mês ou ano, a caligrafia vai se adaptar
let anoRestante = anoFormatura - anoAtual
if (anoRestante > 1) {
    doc.getElementById("tempoRestante").innerHTML += `Faltam ${anoRestante} anos, `
} else if (anoRestante === 0) {
    doc.getElementById("tempoRestante").innerHTML += `Menos de um ano, `
} else {
    doc.getElementById("tempoRestante").innerHTML += `Faltam ${anoRestante} ano, `
}
    let mesRestante = mesFormatura - mesAtual
    if (mesRestante > 1) {
        doc.getElementById("tempoRestante").innerHTML += `${mesRestante} meses e `
    } else if (mesRestante === 0) {
        doc.getElementById("tempoRestante").innerHTML += `menos de um mês e `
    } else {
        doc.getElementById("tempoRestante").innerHTML += `${mesRestante} mes e `
    }
        let diaRestante = diaFormatura - diaAtual
        if (diaRestante >= 1){
            doc.getElementById("tempoRestante").innerHTML += `${diaRestante} dias.`
        } else if (diaRestante === 0) {
            doc.getElementById("tempoRestante").innerHTML += `menos de um dia.`
        } else {
            doc.getElementById("tempoRestante").innerHTML += `Curso concluído`
        }


let indefinido;
let nulo = null
let curso = {
    nome : "Sistema de Informação",
    semestre : 3,
    disciplinaAtual : "Design focado no usuário" 
}

// Console logs de tipos das variáveis
console.log(typeof nulo)
console.log(typeof NOME)
console.log(typeof tituloProfissional)
console.log(typeof minhaBio)
console.log(typeof anoFormatura)
console.log(typeof anoIngresso)
console.log(typeof indefinido)
console.log(typeof curso)

doc.getElementById("meuNome").innerHTML = NOME
doc.getElementById("tituloProfissional").innerHTML = tituloProfissional
doc.getElementById("minhaBio").innerHTML = minhaBio
doc.getElementById("anoFormatura").innerHTML = anoFormatura

let nota = 8.6
let aprovado = (nota >= 6)? "aprovado" : "reprovado"
document.write(`<p> Você está ${aprovado}</p>`)

let diaSemana = agora.getDay() +1;
switch (diaSemana) {
    case 1: diaDeHoje = "Domingo"; break;
    case 2: diaDeHoje = "Segunda-Feira"; break;
    case 3: diaDeHoje = "Terça-Feira"; break;
    case 4: diaDeHoje = "Quarta-Feira"; break;
    case 5: diaDeHoje = "Quinta-Feira"; break;
    case 6: diaDeHoje = "Sexta-Feira"; break;
    case 7: diaDeHoje = "Sábado"; break;
    default: diaDeHoje = "Dia inválido";
}
document.write(`<p> Hoje é dia -> ${diaDeHoje} </p>`)

for (let i = 0; i <= 20; i++) {
    let pares = (i % 2 === 0) ? "Par": "Impar";
    document.getElementById("Impar/Par").innerHTML += `Esse índice ${i} é ${pares.toLowerCase()}.<br>`
}

let object = {
    nome : "Rafael",
    idade : 17,
    profissao : "Piloto"
}
for (let chave in object) {
    document.write(`<p> ${chave} : ${object[chave]} </p>`)
}

//QUIZ
backendbtn = document.getElementById("perfilBack")
frontendbtn = document.getElementById("perfilFront")
resposta = document.getElementById("respostaPerfil")
backend = true
frontend = true

backendbtn.addEventListener("click", function() {
    backend = !backend
    atualizarQuiz()
});
frontendbtn.addEventListener("click", function() {
    frontend = !frontend;
    atualizarQuiz();
});

//Função para atualizar o quiz
function atualizarQuiz(){
    if (frontend && backend) {
        document.getElementById("respostaPerfil").innerText = "Seu perfil é full-stack."
    } else if (frontend) {
        document.getElementById("respostaPerfil").innerText = "Seu perfil é front-end."
    } else if (backend) {
        document.getElementById("respostaPerfil").innerText = "Seu perfil é back-end."
    } else {
        document.getElementById("respostaPerfil").innerText = "Você não possui perfil."
    }
} 
atualizarQuiz()

let habilidades = ["Comunicação","Focado","Criatividade ao elaborar resoluções de problemas"]
function exibirHabilidades() {
    document.write("<div>==============================</div>")
    document.write("<div>Habilidades</div>")
    document.write("<div>==============================</div>")
    let j = 0
    for (i in habilidades) {
        j++
        document.write(`<p>${j}: ${habilidades[i]}</p>`)
    }
}
exibirHabilidades()
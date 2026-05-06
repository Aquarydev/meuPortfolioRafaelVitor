const botao = document.getElementById("modoClaro/Escuro")


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
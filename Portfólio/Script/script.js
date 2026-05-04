const botao = document.getElementById("modoClaro/Escuro")
var doc = document

let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        doc.body.style.backgroundColor = '#141420';
        doc.body.style.color = 'white';
        botao.textContent = "Modo Claro"
    } else { 
        doc.body.style.backgroundColor = 'white';
        doc.body.style.color = 'black';
        botao.textContent = "Modo Escuro"
    }
    claro = !claro
})

const NOME = "Rafael Vitor"
let tituloProfissional = "Dev Full Stack"
let minhaBio = "Dev Back End" + ", confio até no que não vejo"
let anoFormatura = 2026
let anoIngresso;
let indefinido;
let nulo = null
let curso = {
    nome : "Sistema de Informação",
    semestre : 3,
    disciplinaAtual : "Design focado no usuário" 
}

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
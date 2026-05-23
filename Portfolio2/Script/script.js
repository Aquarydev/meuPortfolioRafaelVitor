//Importação de datas
const data = new Date()

//Datas
let inicioCurso = {dia : 1, mes : 1 ,ano : 2025 }
let dataAtual = { dia : data.getDate(), mes : data.getMonth() + 1, ano : data.getFullYear() }
let fimCurso = { dia : 31, mes : 12, ano : 2026 }

//Função para calcular e retornar o tempo restante de curso
function tempoRestanteCurso() {
    let resultado = ``
    let dias = fimCurso["dia"] - dataAtual["dia"]
    let meses = fimCurso["mes"] - dataAtual["mes"]
    let anos = fimCurso["ano"] - dataAtual["ano"]

    //Verificar de curso foi concluido.
    if (dias <= 0 && meses <= 0 && anos <= 0) {
        resultado = "Curso concluído."
    } else if (dias || meses || anos) {
        //Dias
        if (dias === 1) {
            resultado = "Falta " + dias + " dia"
        } else if (dias > 1) {
            resultado = "Faltam " + dias + " dias"
        } else {
            resultado = "Menos de um dia acaba o mês"
        };
        //Meses
        if (meses === 1) {
            resultado += ", "  + meses + " mês"
        } else if (meses > 1) {
            resultado += ", " + meses + " meses"
        } else {
            resultado += ", faltando poucos meses"
        }
        //Anos
        if (anos === 0) {
            resultado += " e menos de um ano para finalizar de Desenvolvedor de Sistemas."
        } else if (anos > 0) {
            resultado += " e " +  anos + " anos para finalizar o curso de Desenvolvedor de Sistemas."
        }
    }

    return resultado
}

//Retorno da função
let acabaEm = tempoRestanteCurso()

//Informações para Portfolio
const NOME = "Rafael Vitor"
let perfilDev = "Back-End"
let slogan = "Eu sou tudo que você não vê."



//Scroll Colorido dinâmico e suas váriaveis
const scrollGame = document.getElementById("header")
let anguloinicial = 45
let anguloseguinte = 0
let h1 = document.getElementById("h1")
let texto = document.getElementById("texto")
let body = document.querySelector("body")

//Aqui que a coisa funciona e o Dev chora
async function abas(abaangulo) {
    switch (abaangulo) {
        case 45:
            body.style.backgroundColor = "#ff00008a"
            h1.innerHTML = "Sobre Mim"
            h1.style.color = "#ffc2c2"
            texto.style.color = "#000000"
            texto.innerHTML = 
            `${NOME} <br>
            Meu perfil de desenvolvedor é ${perfilDev}: ${slogan} <br>
            Proz Educação: <br> 
            Inciado em 0${inicioCurso["dia"]}/0${inicioCurso["mes"]}/${inicioCurso["ano"]}<br>
            Data de finalização: ${fimCurso["dia"]}/${fimCurso["mes"]}/${fimCurso["ano"]}<br>
            ${acabaEm} <br>
            `
            break;
        case 135:
            body.style.backgroundColor = "#48ff007a"
            h1.innerHTML = "Projetos"
            h1.style.color = "#d0ffbe"
            texto.style.color = "#000000"
            break;
        case 225:
            body.style.backgroundColor = "#d9ff0075"
            h1.innerHTML = "QuizDev"
            h1.style.color = "#f3ffac"
            texto.style.color = "#000000"
            break;
        case 315:
            body.style.backgroundColor = "#0026ff7c"
            h1.style.color = "#c2cbff"
            h1.innerHTML = "Contato"
            texto.style.color = "#000000"
            break;
    }
}

//Detectores de clicks para alternar de aba em aba
scrollGame.addEventListener("click", function() {
    if (anguloinicial == 315) {
        return
    } else {
        anguloseguinte = anguloinicial + 90
    }
    scrollGame.style.transform = `rotate(${anguloseguinte}deg)`
    anguloinicial = anguloseguinte
    abas(anguloinicial)
})
scrollGame.addEventListener("auxclick", function() {
    if (anguloinicial == 45) {
        return
    } else {
        anguloseguinte = anguloinicial - 90
    }
    scrollGame.style.transform = `rotate(${anguloseguinte}deg)`
    anguloinicial = anguloseguinte
    abas(anguloinicial)
})


//Chamada de Função para carregar a página
abas(anguloinicial)

const scrollGame = document.getElementById("header")
let anguloinicial = 45
let anguloseguinte = 0
let h1 = document.getElementById("h1")
let texto = document.getElementById("texto")
let body = document.querySelector("body")
async function abas(abaangulo) {
    switch (abaangulo) {
        case 45:
            h1.style.color = "#ffb3b3"
            h1.innerHTML = "Sobre Mim"
            body.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
            break;
        case 135:
            h1.innerHTML = "Projetos"
            h1.style.color = "#c9ffb3"
            body.style.backgroundImage = "url('/Portfolio2/Images/paisagem-verde.png')"
            break;
        case 225:
            h1.innerHTML = "QuizDev"
            h1.style.color = "#f4ffb3"
            body.style.backgroundImage = "url('/Portfolio2/Images/paisagem-verde.png')"
            break;
        case 315:
            h1.style.color = "#b3beff"
            h1.innerHTML = "Contato"
            body.style.backgroundImage = "url('/Portfolio2/Images/paisagem-verde.png')"
            break;
    }
}

scrollGame.addEventListener("click", function() {
    if (anguloinicial == 315) {
        return
    } else {
        anguloseguinte = anguloinicial + 90
    }
    scrollGame.style.transform = `rotate(${anguloseguinte}deg)`
    anguloinicial = anguloseguinte
    abas(anguloinicial)
    console.log(anguloinicial)
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
    console.log(anguloinicial)
})


//Barra Atual
abas(anguloinicial)
console.log(anguloinicial)
const scrollGame = document.querySelector("header")
const roll = document.getElementsByClassName("girarheader")
let angulo = 45
let anguloantes = -45
scrollGame.addEventListener("click", function() {
    anguloantes += 90
    angulo += 90
    if (angulo === 135 || angulo === 225 || angulo === 315 || angulo === 405) {
        console.log("inacabado")
    }
    console.log(angulo)
})
scrollGame.addEventListener("auxclick", function() {
    angulo -= 45
    console.log(angulo)
})

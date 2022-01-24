const button = document.getElementById("button")
// insere o java script no html e os eventos relacionados ao botao 

const lista = document.getElementsByClassName("menu-elemento")
// agrupa os elementos com a classe menu 

const nav = document.querySelector(".open-menu")

var isActive = false
// controla o click do botao para saber se esta aberto ou fechado

button.addEventListener("click", (event) => pointclicker(event))
// escuta o evento de click sobre o botao e retorna o evento sobre o botao

const showElements = () => {
    var arr = Array.from(lista)
    // reagrupa os elementos com a classe menu em um array para utilizar a funçao forEach que existe nas variaveis do tipo array

    if (isActive) {
        arr.forEach((item) => {
            item.classList.add("active")
        })
    }
    // abre o menu se isActive estiver ativo

    else {
        arr.forEach((item) => {
            item.classList.remove("active")
        })
        // remove o menu caso isActive for destivado
    }

}


const pointclicker = (event) => {
    isActive = !isActive
    showElements()
    if (isActive) {
        nav.style.width = "200px"
    }

    else {
        nav.style.width = "50px"
    }

}
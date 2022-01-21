const button = document.getElementById("button")
// insere o java script no html e os eventos relacionados ao botao 

button.addEventListener("click", (event) => pointclicker(event))
// escuta o evento de click sobre o botao e retorna o evento sobre o botao

const lista = document.getElementsByClassName("menu")
// agrupa os elementos com a classe menu 

var isActive = false

const pointclicker = (event) => {
    var arr = Array.from(lista)
    // reagrupa os elementos com a classe menu em um array para utilizar a funçao forEach que existe nas variaveis do tipo array

    isActive = !isActive
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

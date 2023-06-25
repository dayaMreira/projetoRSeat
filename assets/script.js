function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains("light")) {

    // em light mode, adicionar imagem light
        img.setAttribute("src", "assets/avatar-light.png")
    
    // se tiver sem mode ligt, manter a imagem normal    
    } else {
        img.setAttribute("src", "assets/avatar.png")
    }
}
    





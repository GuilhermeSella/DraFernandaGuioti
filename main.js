const header = document.querySelector('.header')
// const hamburguer = document.querySelector('.hamburguer')

window.addEventListener("scroll", () => {

    header.classList.toggle('scroll', window.scrollY > 7)
    // hamburguer.classList.toggle('scroll', window.scrollY > 7)
});

// const menuHambuguer = document.querySelector("#menu-hamburguer")

// menuHambuguer.addEventListener("click", () => {

//     let nav = document.querySelector(".navMobile")
//     menuHambuguer.classList.toggle("hamburguerActive")
//     nav.classList.toggle('active')
// })

// function fecharNav() {
//     let nav = document.querySelector(".navMobile")
//     let input = document.querySelector("#menu-hamburguer")
//     input.checked = false;
//     nav.classList.toggle('active')
// }

// const fecharMobile = () => {
//     let nav = document.querySelector(".navMobile")
//     nav.classList.remove('active')
//     removerFundo()
// }



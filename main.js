const header = document.querySelector('.header')
// const hamburguer = document.querySelector('.hamburguer')

window.addEventListener("scroll", () => {

    header.classList.toggle('scroll', window.scrollY > 7)
    // hamburguer.classList.toggle('scroll', window.scrollY > 7)
});


// const divVerMais = document.querySelectorAll("#ver-mais")
// const btnVerMais = document.querySelector(".btn-vermais")
// const btnVerMenos = document.querySelector(".btn-vermenos")


// const verMaisEspecialidades = ()=>{


//     for(let i=0; i<divVerMais.length; i++){
//         divVerMais[i].style.display ='flex'
//     }

//     btnVerMais.style.display = 'none'
//     btnVerMenos.style.display = 'block'

// }

// const verMenosEspecialidades = ()=>{


//     for(let i=0; i<divVerMais.length; i++){
//         divVerMais[i].style.display ='none'
//     }

//     btnVerMais.style.display = 'block'
//     btnVerMenos.style.display = 'none'

// }

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



const imagem = document.querySelector('.imagem')

window.addEventListener('scroll', scrollar)

function scrollar() {
  imagem.style.opacity = 1 - window.pageYOffset / 900
  imagem.style.backgroundSize = 100 - window.pageYOffset / 25 + '%'
}
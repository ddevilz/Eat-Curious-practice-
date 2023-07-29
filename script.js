const mobileBtn = document.querySelector("#mobileBtn")
const navMobile = document.querySelector('.navMobile')
const nav = document.querySelector('nav') 

mobileBtn.addEventListener('click', () => {
  navMobile.classList.toggle('show')
})

window.addEventListener('scroll', () => {
  let value = window.scrollY
  
  nav.style.top = value * 0.5 + "px"
})
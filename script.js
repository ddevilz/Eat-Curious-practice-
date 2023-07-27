const mobileBtn = document.querySelector("#mobileBtn")
const navMobile = document.querySelector('.navMobile')

mobileBtn.addEventListener('click', () => {
  navMobile.classList.toggle('show')
})
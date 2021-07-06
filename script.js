const hamburger = document.querySelector('.hamburger')
const navbarMenu = document.querySelector('#navbar-menu')

const search = document.querySelector('.search')
const navbarSearch = document.querySelector('#navbar-search')





hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('menu')
  navbarSearch.classList.remove('search-bar')
})

search.addEventListener('click', () => {
  navbarSearch.classList.toggle('search-bar')
  navbarMenu.classList.remove('menu')
})

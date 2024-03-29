// Selectors
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
let highContrastToggle = document.getElementById('highContrastToggle')
// ---

// Header - Hamburger Menu
hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}
// ---

// Header Logo
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
// ---

// Go to top button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('goToTopBtn').style.display = 'block'
  } else {
    document.getElementById('goToTopBtn').style.display = 'none'
  }
}

function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
// ---

// High Contrast Toggle
// highContrastToggle.addEventListener('click', function () {
//   let link = document.getElementById('highContrastStyles')
//   let path = window.location.pathname
//   let isPageInRootDirectory = path === '/index.html' || path === '/'

//   if (link) {
//     link.parentNode.removeChild(link)
//   } else {
//     link = document.createElement('link')
//     link.id = 'highContrastStyles'
//     link.rel = 'stylesheet'
//     link.type = 'text/css'
//     link.href = isPageInRootDirectory
//       ? './css/high-contrast.css'
//       : '../css/high-contrast.css'
//     document.head.appendChild(link)
//   }
// })
// function toggleHighContrast() {
//   let link = document.getElementById('highContrastStyles')
//   let path = window.location.pathname
//   let isPageInRootDirectory = path === '/index.html' || path === '/'

//   if (link) {
//     link.disabled = !link.disabled
//   } else {
//     link = document.createElement('link')
//     link.id = 'highContrastStyles'
//     link.rel = 'stylesheet'
//     link.type = 'text/css'
//     link.href = isPageInRootDirectory
//       ? './css/high-contrast.css'
//       : '../css/high-contrast.css'
//     document.head.appendChild(link)
//   }
// }

// highContrastToggle.addEventListener('click', toggleHighContrast)

let cssLink = document.getElementById('highContrastStyles')
cssLink.disabled = true

function toggleHighContrast() {
  cssLink.disabled = !cssLink.disabled
  return cssLink.disabled
}

highContrastToggle.addEventListener('click', toggleHighContrast)

// ---

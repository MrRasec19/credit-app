import './style.css'

const toggle = document.querySelector<HTMLButtonElement>('.header-toggle')
const nav = document.querySelector<HTMLElement>('.header-nav')

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header-nav--visible')
    toggle.classList.toggle('header-nav--open')
    toggle.setAttribute('aria-expanded', String(isOpen))
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación')
  })

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target as Node) && !nav.contains(e.target as Node)) {
      nav.classList.remove('header-nav--visible')
      toggle.classList.remove('header-nav--open')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Abrir menú de navegación')
    }
  })

  nav.querySelectorAll('.header-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('header-nav--visible')
      toggle.classList.remove('header-nav--open')
      toggle.setAttribute('aria-expanded', 'false')
      toggle.setAttribute('aria-label', 'Abrir menú de navegación')
    })
  })
}

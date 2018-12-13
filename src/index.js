import styles from './scss/main.scss'
import toggleNav from './js/toggle_nav'
import routes from './js/routes'

const d = document,
  footerYear = d.querySelector('.Footer-year')

// FUCNTIONS EXECUTIONS
footerYear.textContent = new Date().getFullYear()
toggleNav()
routes()
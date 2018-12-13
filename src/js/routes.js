import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import './config'
import { signIn, signOut } from './auth'
import savePhoto from './save_photo'
import tplHome from '../html/home.tpl.html'
import tplAbout from '../html/about.tpl.html'
import tplContact from '../html/contact.tpl.html'
import tplAdmin from '../html/admin.tpl.html'
import tplAdminAuth from '../html/admin_auth.tpl.html'


const d = document,
  main = d.querySelector('.Main')

// PRINT HTML CONTENT ON PAGES
const routes = () => {
  d.addEventListener('DOMContentLoaded', e => {
    main.innerHTML = tplHome
  })

  d.addEventListener('click', e => {
    if (e.target.matches('a[href="#"]')) {
      e.preventDefault()
    }

    if (e.target.matches('#home')) {
      main.innerHTML = tplHome
    } else if (e.target.matches('#about')) {
      main.innerHTML = tplAbout
    } else if (e.target.matches('#contact')) {
      main.innerHTML = tplContact
    } else if (e.target.matches('#admin')) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          main.innerHTML = tplAdminAuth
          d.querySelector('.Admin-name').textContent = user.displayName
          d.querySelector('.Admin-avatar').src = user.photoURL
          savePhoto()
        } else {
          main.innerHTML = tplAdmin
        }
      })
    } else if (e.target.matches('#login')){
      signIn()
    } else if (e.target.matches('#logout')){
      signOut()
    }
  })
}

export default routes

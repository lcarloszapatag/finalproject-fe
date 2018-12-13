import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import './js/config'
import styles from './scss/main.scss'
import tplHome from './html/home.tpl.html'
import tplAbout from './html/about.tpl.html'
import tplContact from './html/contact.tpl.html'
import tplAdmin from './html/admin.tpl.html'
import tplAdminAuth from './html/admin_auth.tpl.html'

const  d = document,
       main = d.querySelector('.Main'),
       footerYear = d.querySelector('.Footer-year')

footerYear.textContent = new Date().getFullYear()

d.addEventListener('DOMContentLoaded', e => {
  main.innerHTML = tplHome
})

d.addEventListener('click', e => {
  if (e.target.matches( 'a[href="#"]') ){
    e.preventDefault()
  }

  if (e.target.mathces('#home')){
    main.innerHTML = tplHome
  } else if (e.target.mathces('#about')){
    main.innerHTML = tplAbout
  } else if (e.target.mathces('#contact')){
    main.innerHTML = tplContact
  } else if (e.target.mathces('#admin')){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          main.innerHTML = tplAdminAuth
        } else {
          main.innerHTML = tplAdmin
        }
      })
    }
  }
import firebase from 'firebase/app'

const config = {
  apiKey: "AIzaSyDVb-4rIW2GK7dGcABTcOV7_eRpMXtvD9w",
  authDomain: "proyecto-final-edteam.firebaseapp.com",
  databaseURL: "https://proyecto-final-edteam.firebaseio.com",
  projectId: "proyecto-final-edteam",
  storageBucket: "proyecto-final-edteam.appspot.com",
  messagingSenderId: "482025817687"
}

const init = () => firebase.initializeApp(config)

init()
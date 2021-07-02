import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBHe0N3-0gAw3dIOLJ-xYwK9rGbt4x5a0Y",
    authDomain: "crwn-db-4c64f.firebaseapp.com",
    projectId: "crwn-db-4c64f",
    storageBucket: "crwn-db-4c64f.appspot.com",
    messagingSenderId: "487664200676",
    appId: "1:487664200676:web:fa536703d9bbc13f98b5f1",
    measurementId: "G-ZERC9DZYED"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
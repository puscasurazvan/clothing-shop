import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAKUuK3zKbZhfltsIMgGiQX1KjdoAumaKo',
  authDomain: 'clothing-db-5949d.firebaseapp.com',
  databaseURL: 'https://clothing-db-5949d.firebaseio.com',
  projectId: 'clothing-db-5949d',
  storageBucket: 'clothing-db-5949d.appspot.com',
  messagingSenderId: '694321584069',
  appId: '1:694321584069:web:024f2918ab1a7db74eddac',
  measurementId: 'G-VNGWK28WK0',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

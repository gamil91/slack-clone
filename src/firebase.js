import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA6De_T3cvH1SFm2dd46cOjRQZ9KdgDvbw",
    authDomain: "slack-clone-4ccd1.firebaseapp.com",
    projectId: "slack-clone-4ccd1",
    storageBucket: "slack-clone-4ccd1.appspot.com",
    messagingSenderId: "159077493034",
    appId: "1:159077493034:web:9c3660e852020ba9c95653"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db
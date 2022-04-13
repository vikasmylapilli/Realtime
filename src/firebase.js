import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoEqu6CJU7t2ngTmxrwxdPYfU7QijQ1z4",
    authDomain: "realtime-clone.firebaseapp.com",
    projectId: "realtime-clone",
    storageBucket: "realtime-clone.appspot.com",
    messagingSenderId: "812460603811",
    appId: "1:812460603811:web:991e49b0bd26bdba8f0216",
    measurementId: "G-SM4LWV37YH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
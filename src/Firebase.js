import firebase from 'firebase';
import firebaseConfig from './config/firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const gprovider = new firebase.auth.GoogleAuthProvider();

export {auth , gprovider };
export default db;
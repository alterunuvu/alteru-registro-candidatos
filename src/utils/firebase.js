//import { initializeApp } from "firebase/app";
//import { getAuth, onAuthStateChanged} from "firebase/auth";
//import { getFirestore, collection, getDocs} from "firebase/firestore/lite";
//
//
//
//
//const firebaseApp = initializeApp({
//  apiKey: "AIzaSyCsYlP2yma4hXdxhowxmQTEtvobsr2NS_k",
//  authDomain: "form-alteru.firebaseapp.com",
//  databaseURL: "https://form-alteru-default-rtdb.firebaseio.com",
//  projectId: "form-alteru",
//  storageBucket: "form-alteru.appspot.com",
//  messagingSenderId: "707297274773",
//  appId: "1:707297274773:web:71022a5b626c03b857649c"
//
//});
//
//export const auth = getAuth();
//onAuthStateChanged(auth, user => { if (user  == null){
//  console.log('logged in!');
//
//} else{
//  console.log('no user');
//}
//});
//
//export const db = getFirestore(firebaseApp);

//db.collection('todos').getDocs();
//const todosCol = collection(db, 'users');
//export const snapshot = await getDocs(todosCol);



//import { initializeApp } from "firebase/app";
//import { getAuth, onAuthStateChanged, getRedirectResult} from "firebase/auth";
//import { getFirestore } from "firebase/firestore";
//
//
//
//const firebaseApp = initializeApp({
//    
//  apiKey: "AIzaSyCsYlP2yma4hXdxhowxmQTEtvobsr2NS_k",
//  authDomain: "form-alteru.firebaseapp.com",
//  projectId: "form-alteru",
//  storageBucket: "form-alteru.appspot.com",
//  messagingSenderId: "707297274773",
//  appId: "1:707297274773:web:71022a5b626c03b857649c"
//
//});
//
//export const auth = getAuth(firebaseApp);
//onAuthStateChanged(auth, user => { if (user  == null){
//  console.log('logged in!');
//
//} else{
//  console.log('no user');
//}
//});
//export const db = getFirestore(firebaseApp);

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocFromCache, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCsYlP2yma4hXdxhowxmQTEtvobsr2NS_k",
    authDomain: "form-alteru.firebaseapp.com",
    databaseURL: "https://form-alteru-default-rtdb.firebaseio.com",
    projectId: "form-alteru",
    storageBucket: "form-alteru.appspot.com",
    messagingSenderId: "707297274773",
    appId: "1:707297274773:web:71022a5b626c03b857649c"
  
  });

export const db = getFirestore();

export function firebaseSignUpUsers(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then(credenciales => {
      // credenciales.user.
    })
}

export async function firebaseIniciarSesion(email, password) {
  try {
    const credenciales = await signInWithEmailAndPassword(getAuth(), email, password);
    //credenciales.user
  } catch (e) {
    return false;
  }
  return true;
}
export default firebaseIniciarSesion;

export async function firebaseGetUsers(collectionGetUsers) {
  const listado = [];
  const consulta = collection(getFirestore(), collectionGetUsers);
  const resultado = await getDocs(consulta);
  resultado.forEach(documento => {
    const objeto = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);
  });
  return listado;
}



export async function DocFromCache(coleccion, id) {
  await getDocFromCache(doc(getFirestore(), coleccion, id));
}





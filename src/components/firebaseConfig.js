import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBysTUbGw8fEDVSqK1cvNWZMwo2zkSUpRg",
  authDomain: "aadyaventures-15e61.firebaseapp.com",
  projectId: "aadyaventures-15e61",
  storageBucket: "aadyaventures-15e61.appspot.com",
  messagingSenderId: "179309954582",
  appId: "1:179309954582:web:93566c250a5d1043549737",
  measurementId: "G-8FPWTS551Y"
};

/*const firebaseConfig = {
  apiKey: "AIzaSyCV-KqctjpkX572AqOdtC9Hi25ZxpXX3qY",
  authDomain: "aadyaventures-13604.firebaseapp.com",
  databaseURL: "https://aadyaventures-13604-default-rtdb.firebaseio.com",
  projectId: "aadyaventures-13604",
  storageBucket: "aadyaventures-13604.appspot.com",
  messagingSenderId: "849608147196",
  appId: "1:849608147196:web:9dffb94dd85a648ad25779",
  measurementId: "G-5R0YB1FBL7"
};*/


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const auth = firebase.auth()
const db = firebase.firestore();
export { firebase, storage, db, auth };


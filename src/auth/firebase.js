import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

//! TEMEL AYARLAR

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

//* Normalde alttakinin açık olması lazım. Ama burada gizliliği sağlamak için .env den aldık

// const firebaseConfig = {
//   apiKey: "AIzaSyDDnANQcU3-0NQL3rryYz2neEy6U1T8vCw",
//   authDomain: "movie-app-51acf.firebaseapp.com",
//   projectId: "movie-app-51acf",
//   storageBucket: "movie-app-51acf.appspot.com",
//   messagingSenderId: "291996399338",
//   appId: "1:291996399338:web:f0facc5ca58512f4878993",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//! REGİSTER FUNC  U

export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    console.log(
      "Welcome! You have been registered. Here your infos -->",
      userCredential
    );
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

//! LOGIN FUNC U

//* => email/şifre ile kayıt olmasını sağlamak için firebase in sitesinde Build>Authentication>Sign-in method ta email/password u enable yapıyoruz

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "Welcome! You have been logged in. Here your infos -->",
      userCredential
    );
    navigate("/");
  } catch (error) {}
};

//! LOGOUT FUNC U

export const logOut = () => {
  signOut(auth);
  console.log("Goodbye! You have been logged out...");
};

//! USER OBVSERVER ATAMA
//* Bu func u context i oluşturan compenent in içine gönderiyoruz ki setCurrenUser i buna parametre olarak atayalım ve gelen kullanıcıyı currentUser a atayalım

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      //user is sign out
      setCurrentUser(false);
    }
  });
};

//! GOOGLE İLE SIGNIN OLMA

//* => google ile kayıt olmasını sağlamak için firebase in sitesinde Build>Authentication>Sign-in method ta google ı enable yapıyoruz

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
    });
};

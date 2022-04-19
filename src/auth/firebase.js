import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

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
    //? aşagıdaki display name i güncellemek için 
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    toastSuccessNotify("Registered successfully!");
    navigate("/");
    console.log(
      "Welcome! You have been registered. Here your infos -->",
      userCredential
    );
  } catch (error) {
    toastErrorNotify(error.message);
    console.log(error.message)
  }
};

//! LOGIN FUNC U

//? mevcut kullanıcının giriş yapması için kullanılan firebase metodu

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
    toastSuccessNotify("Logged in successfully!");
    navigate("/");
  } catch (error) {
    toastErrorNotify(error.message);
    console.log(error.message)
  }
};

//! LOGOUT FUNC U

export const logOut = () => {
  signOut(auth);
  toastSuccessNotify("Logged out successfully!");
  console.log("Goodbye! You have been logged out...");
};

//! USER OBVSERVER ATAMA

//? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu

//* Bu func u context i oluşturan compenent in içine gönderiyoruz ki setCurrenUser i buna parametre olarak atayalım ve gelen kullanıcıyı currentUser a atayalım

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      //user is sign out
      setCurrentUser(false);
    }
  });
};

//! GOOGLE İLE SIGNIN OLMA

//* => google ile kayıt olmasını sağlamak için firebase in sitesinde Build>Authentication>Sign-in method ta google ı enable yapıyoruz

export const signUpProvider = (navigate) => {
  //* Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //* Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      toastSuccessNotify("Logged in successfully!");
      navigate("/");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
      console.log(error);
    });
};

//! EMAIL YOLUYSA ŞİFRE SIFIRLAMA 

export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify("Please check your mail box!");
      alert("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
      // alert(err.message);
      // ..
    });
};
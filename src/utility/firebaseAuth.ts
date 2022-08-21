import app from "../config/firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleSignIn = () => {
  const authResult = signInWithPopup(auth, provider)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err.message;
    });
  return authResult;
};

const emailRegister = (email: string, password: string) => {
  const authResult = createUserWithEmailAndPassword(auth, email, password)
    .then((data) => {
      if (auth.currentUser) {
        sendEmailVerification(auth.currentUser).then((res) => {
          return res;
        });
      }
      return data;
    })
    .catch((err) => {
      return err.message;
    });

  return authResult;
};

const emailLogin = (email: string, password: string) => {
  const authResult = signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err.message;
    });

  return authResult;
};

export { auth, googleSignIn, emailRegister, emailLogin };

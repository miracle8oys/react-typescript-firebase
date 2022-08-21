import {
  googleSignIn,
  emailLogin,
  emailRegister,
} from "../utility/firebaseAuth";
import React from "react";

function Login() {
  const handleLoginWithGogleAcc = () => {
    googleSignIn().then((res) => {
      console.log(res);
    });
  };

  const handleRegisterWithEmail = () => {
    emailRegister("miracle8oys@gmail.com", "mrc201").then((res) => {
      console.log(res);
    });
  };

  const handleLoginWithEmail = () => {
    emailLogin("miracle8oys@gmail.com", "mrc201").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="flex flex-col">
      <button onClick={handleLoginWithGogleAcc}>Login</button>
      <button onClick={handleRegisterWithEmail}>Register with Email</button>
      <button onClick={handleLoginWithEmail}>Login With Email</button>
    </div>
  );
}

export default Login;

import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = () => {
    dispatch({ type: authTypes.login });

    history.push("/");
  };

  return (
    <div className="">
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="animacion" />
      <h1 className="my-3">BIENVENIDOS</h1>
      <button onClick={handleLogin} className="btn btn-outline-dark">
        Entrar
      </button>
    </div>
    </div>
  );
};

export default LoginScreen;

import React from "react";
import imagem from "../assets/img/doguito404.svg";
const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={imagem} alt="ilustracao doguito" />
      <p className="naoencontrado-texto">Ops, esta pagina nao existe</p>
    </main>
  );
};

export default Pagina404;

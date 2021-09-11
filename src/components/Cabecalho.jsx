import React from "react";
import { Link } from "react-router-dom";
import imagem from "../assets/img/doguito.svg";
import "../assets/css/componentes/cabecalho.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone"></span>
      </div>
      <div>
        <Link to="/" className="flex- flex--centro">
          <img className="cabecalho__logo" src="{imagem}" alt="logo doguito" />
          <h1 className="cabecalho__titulo">PetShop</h1>
        </Link>
      </div>
      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <a href="#" className="menu-item menu-item--entrar">
              Entrar
            </a>
          </li>
          <li>
            <a className="menu-item">Produto</a>
          </li>
          <li>
            <Link to="/blog" className="menu-item">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="menu-item">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>

      <div className="menu-cabecalho-backgroud"></div>
    </header>
  );
};

export default Cabecalho;

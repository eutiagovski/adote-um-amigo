import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="floating-navbar">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              Adote um Amigo
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Posso Adotar
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Posso Ajudar
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Quero Cadastrar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="header">
          <div className="header-img">
            <img
              src={require('../../assets/img/background.jpg')}
              alt=""
              className="img-fluid"
            />
            <div className="container">
              <div className="header-content ">
                <h1>Adote um Amigo!</h1>
                <p>
                  Apoie a nossa causa adotando um amigo, ou ajudando a manter o
                  nosso projeto. Saiba mais!
                </p>
                <button className="btn btn-success btn-lg">Saiba Mais!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

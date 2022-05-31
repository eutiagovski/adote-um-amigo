import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container-fluid">
        <div className="footer">
          <div className="row footer-content">
            <div className="col-md-12 col-sm-12">
              <h2>Adote um Amigo</h2>
              <p>
                Uma iniciativa sem fins lucrativos, criada e apoiada por Future
                Machines Co.
              </p>
            </div>
          </div>
          <div className="row footer-content">
            <div className="col-md-4 col-sm-12 footer-item">
              <h5>Informações de Contato</h5>
              <ul>
                <li>21 96452-6521 | 21 3333-5555</li>
                <li>apoieumamigo@fmachines.com.br</li>
                <li>
                  Rua Manhucaçu, 303 - Vargem Grande, Rio de Janeiro, RJ -
                  Brasil
                </li>
                <li></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 footer-item">
              <h5>Como Você Pode nos Ajudar</h5>
              <ul>
                <li>Posso Adotar um Amigo</li>
                <li>Posso Ajudar Doando um Valor</li>
                <li>Posso Ajudar como Voluntário</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 footer-item">
              <h5>Como Podemos te Ajudar</h5>
              <ul>
                <li>Quero Cadastrar o meu Abrigo</li>
                <li>Quero Cadastrar o meu Amigo</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-12 footer-item">
              <h5>Links Relacionados</h5>
              <ul>
                <li>
                  <a href="https://www.suipa.org.br/">Suipa</a>
                </li>
                <li>
                  <a href="https://www.rio.rj.gov.br/web/smpda">
                    Secretaria Municipal de Proteção e Defesa dos Animais -
                    SMPDA
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-5 text-center">
            2022 &copy; Future Machines Co.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

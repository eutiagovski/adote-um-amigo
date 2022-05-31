import React from "react";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";
import { MdPets } from "react-icons/md";
import { BiHomeHeart } from "react-icons/bi";

import './help.css'

const Help = () => {
  return (
    <section id='cta-help'>
      <div className="container ">
        <div className="help-container">
        <div className="row ">
          <div className="col-md-3 col-sm-12">
            <a href="#">
              <BiHomeHeart className="icon-md" />
              <h3>Quero Cadastrar um Abrigo</h3>
            </a>
          </div>
          <div className="col-md-3 col-sm-12">
            <a href="#">
              <MdPets className="icon-md" />
              <h3>Quero Adotar um Amigo</h3>
            </a>
          </div>
          <div className="col-md-3 col-sm-12">
            <a href="#">
              <TbHeartHandshake className="icon-md" />
              <h3>Quero Ajudar como Voluntário</h3>
            </a>
          </div>
          <div className="col-md-3 col-sm-12">
            <a href="#">
              <MdOutlineVolunteerActivism className="icon-md" />
              <h3>Posso Ajudar Doando</h3>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Help;

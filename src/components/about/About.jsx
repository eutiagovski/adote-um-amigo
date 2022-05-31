import React from "react";
import "./about.css";
import * as GiIcons from "react-icons/gi";
import * as TbIcons from "react-icons/tb";
import * as FaIcons from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid ">
        
        <div className="container about-section">
          <div className="row">
            <div className="col-md-3 col-sm-12 about-dog-icon">
              <GiIcons.GiSittingDog />
            </div>
            <div className="col-md-9 col-sm-12 my-5">
              <h3 className="mb-3">Falar sobre os animais!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat ea similique praesentium blanditiis quod aspernatur
                ipsam ducimus saepe eligendi. Est minus aliquid sequi
                accusantium nesciunt, aperiam enim saepe. Est, ex? Totam
                voluptatem, esse dolorum eius vero quam praesentium ducimus
                soluta sit, voluptatibus non repudiandae libero architecto!
                Necessitatibus aut porro, nesciunt illo veritatis dolorum velit
                nostrum quas nam, labore ratione exercitationem repellat ea
                magni maiores saepe ullam inventore! Maxime, officiis. Quo
                laudantium nam similique eveniet dolor quia facere enim illum
                fugiat, aspernatur doloremque modi voluptatum facilis id, eos
                accusantium cum voluptatem odit doloribus consectetur vero a.
                Commodi in vitae porro vero!
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-9 col-sm-12 mx-2">
              <h3 className="mb-3">Falar sobre os abrigos!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium ea porro enim, aliquam expedita iure
                laudantium inventore assumenda maiores magnam quibusdam
                doloremque molestias earum quis illum ex nemo sed suscipit. Quas
                dolor, vero quidem fugit, fuga cum assumenda reiciendis non
                expedita dolores excepturi illum optio harum qui suscipit
                distinctio, impedit accusantium est dolore. In magnam, incidunt
                numquam corporis voluptas laboriosam accusamus, consequatur,
                nostrum earum eaque provident culpa optio reprehenderit suscipit
                laudantium ea porro at. Accusantium earum corrupti, pariatur quo
                quas unde neque temporibus! Facilis facere doloribus quasi
                consectetur dolore beatae eligendi tempora. Quasi repellendus
                iusto exercitationem reiciendis! Nesciunt, quam!
              </p>
            </div>
            <div className="col-md-3 col-sm-12 about-dog-icon">
              <TbIcons.TbDogBowl />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-3 col-sm-12 about-dog-icon">
              <FaIcons.FaCat />
            </div>
            <div className="col-md-9 col-sm-12 mx-2">
              <h3 className="mb-3">Falar sobre as organizações!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium ea porro enim, aliquam expedita iure
                laudantium inventore assumenda maiores magnam quibusdam
                doloremque molestias earum quis illum ex nemo sed suscipit. Quas
                dolor, vero quidem fugit, fuga cum assumenda reiciendis non
                expedita dolores excepturi illum optio harum qui suscipit
                distinctio, impedit accusantium est dolore. In magnam, incidunt
                numquam corporis voluptas laboriosam accusamus, consequatur,
                nostrum earum eaque provident culpa optio reprehenderit suscipit
                laudantium ea porro at. Accusantium earum corrupti, pariatur quo
                quas unde neque temporibus! Facilis facere doloribus quasi
                consectetur dolore beatae eligendi tempora. Quasi repellendus
                iusto exercitationem reiciendis! Nesciunt, quam!
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;

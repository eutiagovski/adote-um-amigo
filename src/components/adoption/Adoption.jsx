import * as GiIcons from "react-icons/gi";


const Adoption = () => {
  return (
    <section>
      <div className="container">
        <div className="row d-flex my-5 text-center">
        <div className="container about-section">
          <div className="row about-items">
            <div className="col-md-4 col-sm-12 about-dog-icon-sm">
              <GiIcons.GiDogHouse />
              <p>Somos XX animais</p>
            </div>
            <div className="col-md-4 col-sm-12 about-dog-icon-sm">
              <GiIcons.GiDogHouse />
              <p>Acolhidos em XX abrigos</p>
            </div>
            <div className="col-md-4 col-sm-12 about-dog-icon-sm">
              <GiIcons.GiDogHouse />
              <p>Apoiados por XX pessoas</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Adoption;

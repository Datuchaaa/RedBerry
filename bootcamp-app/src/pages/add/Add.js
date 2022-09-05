import "./Add.scss";
import { Link } from "react-router-dom";

function Add() {
  return (
    <>
      <section className="add-section">
        <div className="container">
          <Link to="/">
            <div className="back-btn">
              <div
                className="array"
                style={{ backgroundImage: `url(./images/VectoR.png)` }}
              ></div>
            </div>
          </Link>

          <div className="nav-wrapper">
            <div className="nav-bar">
              <div className="staf-info button btn-active">
                <p>თანამშრომლის ინფო</p>
              </div>
              <Link to="/laptopForm">
                <div className="laptops-feature button">
                  <p>ლეპტოპის მახასიათებელი</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="fields-wrapper">
            <form className="staf-fields">
              <div className="name-wrapper">
                <div className="name form">
                  <label>
                    <p>სახელი</p>
                    <input type="text" name="name" />
                    <span>მინიმუმ 2 სიმბოლო, ქართული ასოებით</span>
                  </label>
                </div>
                <div className="name form">
                  <label>
                    <p>გვარი</p>
                    <input type="text" name="name" />
                    <span>მინიმუმ 2 სიმბოლო, ქართული ასოებით</span>
                  </label>
                </div>
              </div>
              <div className="selector-wrapper">
                <select class="option" name="თიმი"></select>
              </div>
              <div className="selector-wrapper">
                <select class="option" name="თიმი"></select>
              </div>
              <div className="mail-wrapper">
                <div className="mail-form">
                  <label className="labalemail">
                    <p>მეილი</p>
                    <input type="text" name="name" />
                    <span>უნდა მთავრდებოდეს @redberry.ge-თი</span>
                  </label>
                </div>
              </div>
              <div className="mail-wrapper">
                <div className="mail-form">
                  <label className="labalemail">
                    <p>ტელეფონის ნომერი</p>
                    <input type="text" name="name" />
                    <span>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
                  </label>
                </div>
              </div>
              <div className="next-button-wrapepr">
                <div className="next button">შემდეგი</div>
              </div>
            </form>
            <div
              className="logo-bottom"
              style={{ backgroundImage: `url(./images/LOGO-102.png)` }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Add;

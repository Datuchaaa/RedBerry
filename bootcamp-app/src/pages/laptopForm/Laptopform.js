import "./Laptopform.scss";
import { Link } from "react-router-dom";
function Laptopform() {
  return (
    <>
      <section className="laptopform-section">
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
              <Link to="/add">
                <div className="staf-info button">
                  <p>თანამშრომლის ინფო</p>
                </div>
              </Link>
              <div className="laptops-feature button btn-active">
                <p>ლეპტოპის მახასიათებელი</p>
              </div>
            </div>
          </div>
          <div className="fields-wrapper">
            <div className="staf-fields">
              <div class="drop-zone">
                <span class="drop-zone__prompt">
                 
                  <input
                    type="file"
                    name="myFile"
                    class="drop-zone__input"
                  ></input>
                </span>
              </div>
              <form>
              <div className="name-wrapper">
                <div className="name form">
                  <label>
                    <p>ლეპტოპის სახელი</p>
                    <input type="text" name="name" />
                    <span>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
                  </label>
                </div>
                <div className="name form">
                <select class="option" name="თიმი"></select>
                </div>
              </div>
              </form>
            </div>
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

export default Laptopform;

import "./Main.scss";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="main-items-wrapper">
            <div
              className="logo"
              style={{ backgroundImage: `url(./images/LOGO-021.png)` }}
            ></div>
            <div
              className="main-logo"
              style={{ backgroundImage: `url(./images/Group1.png)` }}
            ></div>
            <div className="button-wrapper">
              <Link to="/add">
                <button className="main-button-add button">
                  <p> ჩანაწერის დამატება</p>
                </button>
              </Link>

              <Link to="/records">
                <button className="main-button-list button">
                  <p>ჩანაწერების სია</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;


import './Main.scss';

function Main() {
  return (
    <>
      
          <div className="main-section">
            <div className = "container">
                <div className="main-items-wrapper">
                  <div className = "logo" style={{backgroundImage: `url(./images/LOGO-021.png)`}}>
                  </div>
                  <div className = "main-logo" style={{backgroundImage: `url(./images/Group1.png)`}}>
                  </div>
                  <div className = "button-wrapper">
                    <button className = "main-button-add button">
                        <p>ჩანაწერის დამატება</p>
                    </button>
                    <button className = "main-button-list button">
                        <p>ჩანაწერების სია</p>
                    </button>
                  </div>
                </div>
              </div>
          </div>
      
    </>
  );
}

export default Main;

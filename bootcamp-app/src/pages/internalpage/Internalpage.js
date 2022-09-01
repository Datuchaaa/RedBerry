import "./Internalpage.scss";

function Internalpage() {
  return (
    <>
      <section className="internalpage-section">
        <div className="container">
          <div className="back-btn">
            <div
              className="array"
              style={{ backgroundImage: `url(./images/VectoR.png)` }}>     
              </div>
          </div>
          <div className="title">
            <div className="staf-info button btn-active">
              <p>ლეპტოპის ინფო</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="staf-info">
              <div className="items">
                <div
                  className="laptop-image"
                  style={{ backgroundImage: `url(./images/laptop.png)` }}
                ></div>
                <div className="owner-info">
                  <div className="info-row">
                    <p>სახელი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>თიმი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>პოზიცია:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>მეილი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>ტელეფონის ნომერი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-info">
            <div className="owner-info laptopinfo">
                  <div className="info-row">
                    <p>ლეპტოპის სახელი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>ლეპტოპის ბრენდი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>RAM:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>მეხსიერების ტიპი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                </div>
                <div className="owner-info">
                  <div className="info-row">
                    <p>CPU:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>CPU-ს ბირთვი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                  <div className="info-row">
                    <p>CPUS-ს ნაკადი:</p> <span>დავით ვაშაყმაძე</span>
                  </div>
                </div>
            </div>
            <div className="laptop-description">
                <div className="laptop-info down">
                <div className="owner-info laptopinfo">
                    <div className="info-row">
                        <p>ლეპტოპის მდგომარეობა:</p> <span>დავით ვაშაყმაძე</span>
                    </div>
                    <div className="info-row">
                        <p>ლეპტოპის ფასი:</p> <span>დავით ვაშაყმაძე</span>
                    </div>
                    </div>
                    <div className="owner-info">
                    <div className="info-row">
                        <p>შეძენის რიცხვი:</p> <span>დავით ვაშაყმაძე</span>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Internalpage;

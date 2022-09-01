import React, { useState, useEffect } from "react";
import "./Records.scss";

function Records() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("load");

    fetch(
      "https://pcfy.redberryinternship.ge/api/laptops?token=a9d7f494ede5782b7909bcdc25926400"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("res", result);
        setList(result.data);
      });
  }, []);

  return (
    <>
      <section className="record-section">
        <div className="container">
          <div className="back-btn">
            <div
              className="array"
              style={{ backgroundImage: `url(./images/VectoR.png)` }}
            ></div>
          </div>
          <div className="title">
            <div className="staf-info button btn-active">
              <p>ჩანაწერების სია</p>
            </div>
          </div>
          <div className="item-wrapper">
            {list.map((item) => (
              <div key={item.id} className="laptop-item">
                <div className="laptop-image"></div>
                <div className="list">
                  <div className="staf-name">{item.name}</div>
                  <div className="laptop-name">Lenovo thinkpad 12</div>
                  <a href="">მეტის ნახვა</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Records;

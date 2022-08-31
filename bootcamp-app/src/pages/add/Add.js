
import './Add.scss';

function Add() {
  return (
    <>
     
        <section className = "add-section">
            <div className = "container">
            <div className = "back-btn" >
                <div className = "array" style = {{backgroundImage: `url(./images/Vector.png)`}} ></div>
            </div>
             <div className = "nav-wrapper">
                
                    <div className = "nav-bar">
                        <div className = "staf-info button btn-active">
                             <p>თანამშრომლის ინფო</p>
                        </div>
                        <div className = "laptops-feature button">
                            <p>ლეპტოპის მახასიათებელი</p>
                        </div>
                    </div>
                </div>
                <div className = "fields-wrapper">
                    <div className = "staf-fields">

                    </div>
                    <div className = "logo-bottom" style = {{backgroundImage: `url(./images/LOGO-102.png)`}}>

                    </div>
                </div>
            </div>
        </section>
    
    </>
  );
}

export default Add;

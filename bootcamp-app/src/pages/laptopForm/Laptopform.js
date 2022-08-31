
import './Laptopform.scss';

function Laptopform() {
  return (
    <>
     
        <section className = "laptopform-section">
            <div className = "container">
            <div className = "back-btn" >
                <div className = "array" style = {{backgroundImage: `url(./images/VectoR.png)`}} ></div>
            </div>
             <div className = "nav-wrapper">
                
                    <div className = "nav-bar">
                        <div className = "staf-info button">
                             <p>თანამშრომლის ინფო</p>
                        </div>
                        <div className = "laptops-feature button btn-active">
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

export default Laptopform;

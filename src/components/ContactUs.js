import React from 'react'
import emailjs from 'emailjs-com';
import '../styles/Success_Style.css';
import loading from '../photos/loading.gif';

function ContactUs() {

    function sendEmail(e){
        var loader = document.getElementById("loader").style.display="block";
        var disableForm = document.getElementById("contactFrom").style.display = "none";
        e.preventDefault();
        emailjs.sendForm('service_fh6h8ug', 'template_sfi4j2g', e.target, 'user_gmieO6AZ4qtVvpRo19PEc')
        .then((result) => {
            var loader = document.getElementById("loader").style.display="none";
            console.log(result.text);
            let path = document.querySelector(".tick");
            let length = path.getTotalLength();
            console.log(length); 
            var success = document.getElementById("success").style.display = "block";
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset();
        
    }
    return (
        <div>
            <div role="contactForm" className="container bg-dark rounded-3 shadow-lg rounded-3" id="formDiv">
                {/* Loading */}
                <div className="text-center" className="loaderDiv">
                    <img src={loading} alt="Loading" className="m-5" id="loader"/>
                </div>
        <form className="container w-75" onSubmit={sendEmail} id="contactFrom">
          <p className="text-white text-center m-5 fs-2 text-uppercase fst-italic fw-light">Contact From</p>
          <div className="from-groud">
              <input placeholder="Name" type="text" name="name" className="form-control mt-3" required/>
          </div>
          <div className="from-groud">
              <input placeholder="E-Mail Address" type="email" name="email" className="form-control mt-3" required/>
          </div>
          <div className="from-groud">
              <input placeholder="Phone Number" type="tel" name="phonenumber" className="form-control mt-3" pattern="[6789][0-9]{9}" required/>
          </div>
          <div className="from-groud">
              <input placeholder="Subject" type="text" name="subject" className="form-control mt-3" required/>
          </div>
          <div className="from-groud">
              <textarea placeholder="Write a Message" type="textarea" name="message" className="form-control mt-3" rows="8" required/>
          </div>
          <div className="from-group">
            <button className="btn btn-info w-100 mt-3 mb-3" type="submit">Send Information
                {loading && <i className="fa fa-refresh fa-spin"></i>}
            </button>
          </div>
        </form>
        {/* Success */}
        <div class="svg-container text-center p-2" id="success">    
            <svg class="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                <circle class="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
                <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/>
            </svg>
            <p className="text-white">Thank You<br/>Information Sent successfully</p>
            <p className="text-white">We will get back to shortlly...!</p>
        </div>
        
        </div>
        </div>
    )
}

export default ContactUs;

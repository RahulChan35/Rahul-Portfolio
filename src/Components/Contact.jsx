import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import { blue } from "@mui/material/colors";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-component">
        <h5>Contact</h5>
        <h3>Don't be shy! Hit me up!⚡</h3>
        <div className="personal-details-container">
          <div>
            <MapIcon className="contact-icons" />
            <div>
              <h5>Location</h5>
              <p>Coimbatore, Tamil Nadu</p>
            </div>
          </div>
          <div>
            <EmailIcon className="contact-icons" />
            <div>
              <h5>Mail</h5>
              <p>rc2658535@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

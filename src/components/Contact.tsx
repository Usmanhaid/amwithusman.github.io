import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* EMAIL + PHONE */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:admin@iamwithusman.com" data-cursor="disable">
                admin@iamwithusman.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+923000000000" data-cursor="disable">
                +92 3XX XXX XXXX
              </a>
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="contact-box">
            <h4>Connect</h4>

            <a
              href="https://www.linkedin.com/in/usman-haider-30a54a157/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://www.fiverr.com/usmanbutt578?public_mode=true"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Fiverr (Hire Me) <MdArrowOutward />
            </a>

            <a
              href="https://www.upwork.com/freelancers/~014f79206f2c05a6f4?viewMode=1"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Upwork <MdArrowOutward />
            </a>

            <a
              href="https://github.com/Usmanhaid"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

          </div>

          {/* FOOTER */}
          <div className="contact-box">
            <h2>
              Identity & Security <br /> by <span>Usman Haider</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
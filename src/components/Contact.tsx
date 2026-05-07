import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">

      <div className="contact-container">

        <h3>Contact</h3>

        <div className="contact-flex">

          <div className="contact-box">

            <h4>Email</h4>

            <p>
              <a
                href="mailto:shiva.v16161@mail.com"
                data-cursor="disable"
              >
                shiva.v16161@mail.com
              </a>
            </p>

            <h4>Phone</h4>

            <p>
              <a
                href="tel:+9199999999"
                data-cursor="disable"
              >
                +91 99999 99999
              </a>
            </p>

          </div>

          <div className="contact-box">

            <h4>Social</h4>

            <a
              href="https://github.com/Shivamani16"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github - Shivamani16
            </a>

            <a
              href="https://linkedin.com/in/shivamani-kotagiri-1380a426a"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin - Shivamani Kotagiri
            </a>

            <a
              href="https://x.com/_Shivamani16_"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter - _Shivamani16_
            </a>

            <a
              href="https://instagram.com/shivamani.kotagiri__"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram - shivamani.kotagiri__
            </a>

          </div>

          <div className="contact-box">

            <h2>
              Designed and Developed <br />
              by <span>Shivamani Kotagiri</span>
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
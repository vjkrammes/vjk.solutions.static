import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Contact Us</div>
        <button
          className="primarybutton headerbutton-left"
          onClick={() => navigate("/")}
        >
          <span>
            <MdHome /> Home
          </span>
        </button>
      </div>
      <div className="content">
        <div className="cu__body">
          <div className="cu__heading">You can contact us via</div>
          <div className="cu__items">
            <div className="cu__item">
              <div className="cu__label">US Mail</div>
              <div className="cu__content">
                <p>VJK Solutions, LLC</p>
                <p>823 NW 113th Terrace</p>
                <p>Gainesville, FL, 32606</p>
              </div>
            </div>
            <div className="cu__item">
              <div className="cu__label">Email</div>
              <div className="cu__content">
                <p>
                  <a href="mailto:contact@vjk.solutions">
                    contact@vjk.solutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

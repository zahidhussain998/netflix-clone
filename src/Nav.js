import React, { useEffect, useState } from "react";
import "./Nav.css";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionBar);
    return () => window.removeEventListener("scroll", transitionBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;

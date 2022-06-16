import React from "react";
import Flip from "react-reveal/Flip";
import "./contacts.scss";
function Contacts() {
  const handleclick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="inner-contacts">
        <Flip button>
          <form action="">
            <h2>Get In Touch</h2>
            <p>
              I’m always interested in hearing about new projects and
              opportunities.
            </p>
            <div className="name-email">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email adress" />
            </div>
            <div className="subject">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="textarea">
              <textarea type="text" placeholder="Message" maxLength="500" />
            </div>
            <button onClick={handleclick}>Submit</button>
          </form>
        </Flip>
      </div>
    </div>
  );
}

export default Contacts;

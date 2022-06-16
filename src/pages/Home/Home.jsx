import Typewriter from "typewriter-effect";
import Flip from "react-reveal/Flip";

import "./home.scss";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home__inner">
          <h2>
            I'm
            <Typewriter
              className="typewriter"
              options={{
                strings: [" Sultonbek Zhoroev", " a Frontend Developer"],
                autoStart: true,
                loop: true,
                typeSpeed: 1800,
              }}
            />
          </h2>
          <Flip left>
            <div className="icons">
              <a
                href="mailto:zhoroevsultonbek@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a
                href="https://www.facebook.com/sultanbek.joroyev/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sultonbek-zhorahan-b31229226?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPiBuiqM2TNOSGAeGUDsKwQ%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/sultonbekzhoroev"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>

              <div className="cv">
                <a
                  href="https://drive.google.com/file/d/1sqxhKQnX9vD1Q41R1QqjCUadxBZlfTJ-/view"
                  download="logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>See my CV</h3>
                </a>
              </div>
            </div>
          </Flip>
        </div>
      </div>
    </div>
  );
}

export default Home;

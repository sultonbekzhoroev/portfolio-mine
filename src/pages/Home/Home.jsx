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
              <a href="/">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="/">
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

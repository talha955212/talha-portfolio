import { ArrowUpRight, Code2 } from "lucide-react";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading reveal">
        <p className="eyebrow">01 / INTRODUCTION</p>
        <h2>
          About <span>Me.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-main reveal">
          <p className="about-big">
            I turn ideas into <span>digital reality.</span>
          </p>

          <h1 className="body-text">
            I'm Muhammad Talha, a developer interested in building
            modern web applications and creative digital experiences.
            I enjoy learning new technologies, solving problems and
            transforming ideas into functional products.
          </h1>

          <p className="body-text">
            My current focus is React and JavaScript, while expanding
            my knowledge of backend development and databases.
          </p>

          <a href="#contact" className="text-link">
            Let's work together <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="about-card reveal">
          <div className="about-icon">
            <Code2 size={38} />
          </div>

          <span className="card-number">01</span>

          <h3>My Philosophy</h3>

          <p>
            Learn continuously. Build creatively. Improve every day.
          </p>

          <div className="about-card-line"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
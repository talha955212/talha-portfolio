import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "React Watch Website",
    category: "WEB DEVELOPMENT",
    description:
      "A modern watch website built with React, focusing on clean UI, responsive layouts and an elegant shopping experience.",
    technologies: ["React", "JavaScript", "CSS"],
    visual: "watch-visual",
    github: "https://github.com/talha955212",
  },
  {
    number: "02",
    title: "Quiz Application",
    category: "INTERACTIVE APPLICATION",
    description:
      "An interactive quiz application designed to provide an engaging experience through questions, answers and dynamic UI.",
    technologies: ["React", "JavaScript", "CSS"],
    visual: "quiz-visual",
    github: "https://github.com/talha955212",
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">03 / SELECTED WORK</p>

        <h2>
          Featured <span>Projects.</span>
        </h2>

        <p className="section-description">
          <h4>
            A selection of projects I've worked on.
          </h4>
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.number}>
            <div className={`project-visual ${project.visual}`}>
              <div className="project-visual-inner">
                <span className="project-visual-number">
                  {project.number}
                </span>

                {project.visual === "watch-visual" ? (
                  <div className="watch-circle">
                    <div className="watch-face">
                      <span>10:10</span>
                      <small>TIME IS ART</small>
                    </div>
                  </div>
                ) : (
                  <div className="quiz-interface">
                    <span>QUIZ / 001</span>
                    <h3>Test Your Knowledge.</h3>
                    <div className="quiz-option">01 — Option A</div>
                    <div className="quiz-option active-option">
                      02 — Option B
                    </div>
                    <div className="quiz-option">03 — Option C</div>
                  </div>
                )}
              </div>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>/{project.number}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <Code2 size={17} />
                GitHub Profile
                <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
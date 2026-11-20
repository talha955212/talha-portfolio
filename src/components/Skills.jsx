import {
  Code2,
  Database,
  Globe,
  Terminal,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "JSON"],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Python", "C++"],
  },
  {
    title: "Development",
    icon: Code2,
    skills: ["Responsive Design", "Problem Solving"],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading reveal">
        <p className="eyebrow">02 / WHAT I WORK WITH</p>
        <h2>
          Technical <span>Skills.</span>
        </h2>
        <p className="section-description">
          Technologies and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <div className="skill-card reveal" key={group.title}>
              <div className="skill-card-top">
                <Icon size={26} />
                <span>0{index + 1}</span>
              </div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
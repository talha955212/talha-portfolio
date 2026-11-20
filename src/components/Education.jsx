
import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

function Education() {
  return (
    <section className="section-container section" id="education">
      <div className="section-heading">
        <p className="eyebrow">MY BACKGROUND</p>
        <h2>
          My <span>Education</span>
        </h2>
      </div>

      <div className="education-list">
        {portfolioData.education.map((item, index) => (
          <div
            className="education-card"
            key={`${item.degree}-${item.location}-${index}`}
          >
            <div className="education-icon">
              <GraduationCap />
            </div>

            <div>
              <span className="education-status">
                {item.status}
              </span>

              <h2>
                Bachelor of Business & Information Technology
              </h2>

              <h3>
                University of Engineering and Technology, Lahore
              </h3>

              <small>{item.location}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

import {
  Mail,
  Code2,
  ArrowUpRight,
} from "lucide-react";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-content reveal">
        <p className="eyebrow">05 / GET IN TOUCH</p>

        <h2>
          Let's Create
          <br />
          Something <span>Great.</span>
        </h2>

        <h3>
          Have an idea, project or opportunity? Let's connect
          and build something meaningful together.
        </h3>

        <a
          href="mailto:talhazeeshan929@gmail.com"
          className="primary-btn contact-button"
        >
          Send Me an Email <ArrowUpRight size={19} />
        </a>
      </div>

      <div className="contact-links reveal">
        <a href="mailto:talhazeeshan929@gmail.com">
          <Mail size={19} />
          <span>Email</span>
          <ArrowUpRight size={17} />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-talha-b67b47406"
          target="_blank"
          rel="noreferrer"
        >
          <ArrowUpRight size={19} />
          <span>LinkedIn</span>
          <ArrowUpRight size={17} />
        </a>

        <a
          href="https://github.com/talha955212"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 size={19} />
          <span>GitHub</span>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
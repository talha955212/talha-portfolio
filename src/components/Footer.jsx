
import { portfolioData } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-content">
        <a href="#home" className="logo">
          Talha<span>.</span>
        </a>

        <p>
          Designed and developed by {portfolioData.name}.
        </p>

        <p>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

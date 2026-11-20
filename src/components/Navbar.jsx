import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        TALHA<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map(([name, href]) => (
          <a
            key={name}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-contact">
        Let's Talk <span>↗</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;
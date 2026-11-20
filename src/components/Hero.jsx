import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      1,
      0.1,
      100
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.5)
    );

    const particles = 1800;
    const positions = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i++) {
      const radius = 1.65 + Math.random() * 0.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color: "#e0231c",
      size: 0.018,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const globe = new THREE.Points(geometry, material);
    scene.add(globe);

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;
      camera.position.z = width < 600 ? 6 : 5;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height, false);
    };

    resize();

    let frame;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      globe.rotation.y += 0.0018;
      globe.rotation.x += 0.0006;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-noise"></div>

      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot"></span>
          AVAILABLE FOR CREATIVE PROJECTS
        </p>

        <h1>
          MY
          <br />
                   <span>Portfolio</span>
        </h1>

        <h2 className="hero-description">
          Hi, I'm Muhammad Talha. A developer passionate about
          creating modern, interactive and meaningful digital
          experiences.
        </h2>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore My Work <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/talha955212"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-talha-b67b47406"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <ArrowUpRight  />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow"></div>
        <canvas ref={canvasRef} className="hero-canvas"></canvas>

        <div className="visual-label">
          <span>01 / CREATIVE DEVELOPMENT</span>
          <span>INTERACTIVE WORLD</span>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={16} />
        SCROLL TO EXPLORE
      </a>

      <div className="hero-index">01 — 06</div>
    </section>
  );
}

export default Hero;
import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav"> {}
        <a href="#home" className="logo">R<span>.</span>K</a>
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul className={`nav-links ${open ? 'show' : ''}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
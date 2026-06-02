import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"

import { HiOutlineMail } from "react-icons/hi"

export default function Contact() {
  return (
    <div className="floating-contact">
      <p className="card-label">Contato</p>

      <div className="hero-icons">
        <a
          href="https://github.com/Ivyna-dev"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ivyna-rodrigues-6a38483b5/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ivynarodrigues03@gmail.com"
          aria-label="Email"
        >
          <HiOutlineMail />
        </a>
      </div>
    </div>
  )
}
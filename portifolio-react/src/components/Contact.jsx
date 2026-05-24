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
        <a href="#">
          <FaGithub />
        </a>

        <a href="#">
          <FaLinkedinIn />
        </a>

        <a href="mailto:ivynarodrigues03@gmail.com">
          <HiOutlineMail />
        </a>
      </div>
    </div>
  )
}
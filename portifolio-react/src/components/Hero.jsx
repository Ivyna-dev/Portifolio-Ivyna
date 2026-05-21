import {
  FaGithub,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa"

export default function Hero() {
  return (
    <div className="hero hero-intro">
      <div className="hero-center-text">
        <h1>IVYNA SOUSA</h1>

        <h2>Front-end Developer & UI Designer</h2>

        <p>
          Criando interfaces modernas, intuitivas e funcionais.
        </p>
      </div>

      <div className="floating-contact">
        <p className="card-label">Contato</p>

        <div className="hero-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaBehance /></a>
        </div>
      </div>

      <button className="floating-projects-btn">
        Ver Projetos
      </button>
    </div>
  )
}
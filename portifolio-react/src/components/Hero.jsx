import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa"

export default function Hero() {
  return (
    <div className="hero hero-intro">
      <div className="hero-center-text">
        
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          IVYNA SOUSA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Front-end Developer & UI Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Criando interfaces modernas, intuitivas e funcionais.
        </motion.p>
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
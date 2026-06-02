import { motion } from "framer-motion"
import Contact from "./Contact"

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

      <Contact />

      <a href="#projects" className="floating-projects-btn">
        Ver Projetos
      </a>
    </div>
  )
}
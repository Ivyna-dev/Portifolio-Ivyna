import { useEffect, useRef, useState } from "react"

export default function About() {

  const [aboutVisible, setAboutVisible] = useState(false)

  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true)
        }
      },
      {
        threshold: 0.4,
      }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="about-section scroll-reveal"
    >

      <div className="about-title">
        <p className="section-label">Sobre mim</p>

        <h2>
          Criando interfaces digitais com estética, lógica e experiência.
        </h2>
      </div>

      <div
        className={`about-flip-card ${
          aboutVisible ? "about-card-animate" : ""
        }`}
      >

        <div className="about-flip-inner">

          <div className="about-card about-front">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas, com
              interesse em desenvolvimento front-end, UI Design e experiências
              digitais. Gosto de unir criatividade, organização visual e código
              para criar projetos funcionais, modernos e intuitivos.
            </p>

            <div className="about-tags">
              <span>Front-end</span>
              <span>UI Design</span>
              <span>React</span>
              <span>Experiência do usuário</span>
            </div>
          </div>

          <div className="about-card about-back">
            <img src="/ivyna.jpg" alt="Ivyna" />
          </div>

        </div>
      </div>

    </section>
  )
}
import StarBackground from "./components/StarBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import "./App.css"

function App() {
  return (
    <>
      <StarBackground />
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="about-section scroll-reveal">
          <div className="about-title">
            <p className="section-label">Sobre mim</p>

            <h2>
              Criando interfaces digitais com estética, lógica e experiência.
            </h2>
          </div>

          <div className="about-flip-card">
            <div className="about-flip-inner">
              <div className="about-card about-front">
                <p>
                  Sou estudante de Análise e Desenvolvimento de Sistemas, com
                  interesse em desenvolvimento front-end, UI Design e
                  experiências digitais. Gosto de unir criatividade,
                  organização visual e código para criar projetos funcionais,
                  modernos e intuitivos.
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

        <section id="projects" className="projects-section">
          <div className="projects-title">
            <p className="section-label">Projetos</p>

            <h2>
              Projetos que unem design, experiência e desenvolvimento.
            </h2>
          </div>

          <div className="projects-stack">
            <div className="project-card">
              <h3>Portal Universitário</h3>
              <p>
                Plataforma acadêmica com foco em navegação intuitiva e
                experiência do usuário.
              </p>
            </div>

            <div className="project-card">
              <h3>E-commerce UI</h3>
              <p>
                Interface moderna para loja virtual com design responsivo e
                minimalista.
              </p>
            </div>

            <div className="project-card">
              <h3>Dashboard Analytics</h3>
              <p>
                Painel administrativo com visual tecnológico e gráficos
                interativos.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
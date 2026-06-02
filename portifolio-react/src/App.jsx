import StarBackground from "./components/StarBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
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

      <a
        href="https://www.figma.com/design/b0VA4XJDgdmWuQcl5PbD39/UniJornal?node-id=0-1&t=YjvKtPaACJ87el4f-1"
        target="_blank"
        rel="noreferrer"
        className="project-github-btn"
      >
        Ver no Figma
      </a>
    </div>

    <div className="project-card">
      <h3>E-commerce UI</h3>

      <p>
        Interface moderna para loja virtual com design responsivo e
        minimalista.
      </p>

      <a
        href="https://github.com/Ivyna-dev/Loja-roupas"
        target="_blank"
        rel="noreferrer"
        className="project-github-btn"
      >
        Ver no GitHub
      </a>
    </div>

    <div className="project-card">
  <h3>Sistema de Estacionamento</h3>

  <p>
    Sistema desenvolvido em Java para gerenciamento de veículos,
    vagas e controle de entrada e saída.
  </p>

  <a
    href="https://github.com/Ivyna-dev/estacionamento-java"
    target="_blank"
    rel="noreferrer"
    className="project-github-btn"
  >
    Ver no GitHub
  </a>
</div>
  </div>
</section>

          <section id="skills" className="skills-section">
  <div className="skills-title">
    <p className="section-label">Habilidades</p>

    <h2>
      Tecnologias e ferramentas utilizadas no desenvolvimento
      de interfaces modernas.
    </h2>
  </div>

  <Skills />
</section>
      </main>
    </>
  )
}

export default App
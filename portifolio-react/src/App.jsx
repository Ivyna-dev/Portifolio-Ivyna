import StarBackground from "./components/StarBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Projects from "./components/Projects"
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

    <section id="about">
      <About />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </main>
</>
  )
}

export default App
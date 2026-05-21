import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

export default function StarBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#070816",
        },

        fullScreen: {
          enable: true,
          zIndex: 0,
        },

        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },

          modes: {

            bubble: {
              distance: 90,
              opacity: 1.5,
              size: 3,
              duration: 2,
            },
          },
        },

        particles: {
          links: {
            enable: false,
          },

          collisions: {
            enable: false,
          },

          number: {
            value: 112,
          },

          color: {
            value: ["#ffffff", "#c4b5fd", "#a78bfa"],
          },

          opacity: {
            value: {
              min: 0.1,
              max: 0.6,
            },

            random: true,

            anim: {
              enable: true,
              speed: 0.3,
              opacity_min: 0.1,
              sync: false,
            },
          },

          shadow: {
            enable: true,
            color: "#a855f7",
            blur: 8,
          },

          size: {
            value: {
              min: 0.5,
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 0.3,
            direction: "top-left",
            random: true,
            straight: false,

            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  )
}
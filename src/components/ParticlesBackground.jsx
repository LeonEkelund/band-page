// src/components/ParticlesBackground.jsx
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="embers"
      options={{
        fullScreen: { enable: false }, 
        background: { color: "transparent" },
        fpsLimit: 120,

        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 900 },
          },

     
          color: {
            value: "#ffffff",
          },

          shape: { type: "circle" },

     
          size: {
            value: { min: 0.3, max: 1.8 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.4,
              sync: false,
            },
          },

      
          opacity: {
            value: 0.7,
            random: { enable: true, minimumValue: 0.4 },
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.4,
              sync: false,
            },
          },

     
          move: {
            enable: true,
            direction: "none",
            speed: {
              min: 0.05,
              max: 0.5,
            },
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },

      
          zIndex: {
            value: {
              min: 0,
              max: 100,
            },
            opacityRate: 0.5,
            sizeRate: 1,
          },

 
          blendMode: "screen",
        },

        detectRetina: true,
      }}
    />
  );
}

// src/components/ParticlesBackground.jsx
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Slim bundle is enough for this use case
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
        fullScreen: { enable: false }, // we control size via parent
        background: { color: "transparent" },
        fpsLimit: 120,

        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 900 },
          },

          // bright cores, we tint with CSS glow
          color: {
            value: "#ffffff",
          },

          shape: { type: "circle" },

          // small, slightly varied dots
          size: {
            value: { min: 0.3, max: 1.8 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.4,
              sync: false,
            },
          },

          // subtle, slow flicker = life
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

          // gentle wandering, no strong direction
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

          // depth / layering – smaller ones can feel “further”
          zIndex: {
            value: {
              min: 0,
              max: 100,
            },
            opacityRate: 0.5,
            sizeRate: 1,
          },

          // makes them behave more like light
          blendMode: "screen",
        },

        detectRetina: true,
      }}
    />
  );
}

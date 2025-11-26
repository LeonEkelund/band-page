import { SmoothScroll } from "./components/SmoothScroll";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Music } from "./sections/Music";
import { Contact } from "./sections/Contact";
import { Tour } from "./sections/Tour";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      {/* 🔹 Particles */}
      <div className="pointer-events-none fixed inset-0 z-10">
        <ParticlesBackground />
      </div>

      <SmoothScroll>
        <div className="relative min-h-screen w-screen bg-black">
          {/* Gradients */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3
                        bg-gradient-to-t from-[rgba(120,0,0,0)] to-transparent z-20"
          />

          <div
            className="pointer-events-none absolute bottom-0 left-0 w-full h-1/2
                        bg-gradient-to-t from-[rgba(255,255,255,0.13)] to-transparent z-20"
          />

          {/* Content on top */}
          <div className="relative z-30">
            <Navbar />
            <main className="pt-20">
              <Hero />
              <About />
              <Music />
              <Tour />
              <Contact />
              <Footer />
            </main>
          </div>
        </div>
      </SmoothScroll >
    </>
  );
}

export default App;

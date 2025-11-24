import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="w-screen min-h-screen flex items-center flex-col justify-center text-white px-6"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-14">
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.35em" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[14vw] lg:text-[7vw] font-display tracking-[0.35em]"
          >
            THROWN
          </motion.h1>

          {/* Small descriptor */}
          <p className="mt-4 text-xs lg:text-sm uppercase tracking-[0.25em] text-white/60">
            HEAVY MODERN METAL • STOCKHOLM
          </p>

          {/* Tagline */}
          <p className="mt-4 text-sm lg:text-base text-white/70 max-w-md mx-auto lg:mx-0">
            Noise, pressure and impact. New music out now.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://open.spotify.com/artist/5eBCPtU2iPbzuMRre9BePt?si=Lyz0PqmFQgycTUbOk4sAmA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/40 rounded-full uppercase tracking-[0.2em] text-xs lg:text-sm hover:bg-white/10 transition"
            >
              Listen now
            </a>
            <a
              href="https://www.bandsintown.com/a/15509093-thrown-official"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white/5 border border-white/10 uppercase tracking-[0.2em] text-xs lg:text-sm hover:bg-white/15 transition"
            >
              Tour dates
            </a>
          </div>
        </div>

      </div>
    </section >
  );
}

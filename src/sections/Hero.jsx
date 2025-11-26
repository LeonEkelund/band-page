import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="w-screen min-h-[80vh] flex items-center flex-col justify-center text-white px-6"

    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-14">
        <div className="flex-1 text-center lg:text-left">
          <div className="relative text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundPosition: ["100% 40%", "75% 20%"],
              }}
              transition={{
                opacity: { duration: 1, ease: "easeOut" },
                y: { duration: 1, ease: "easeOut" },
                backgroundPosition: {
                  duration: 60,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "linear",
                },
              }}
              className="text-[17vw] lg:text-[9vw] font-display font-black leading-none tracking-[0.35em]"
              style={{
                backgroundImage: "url('/throwncd.png')",
                backgroundSize: "150%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              THROWN
            </motion.h1>
          </div>







          {/* Small descriptor */}
          <p className="mt-4 text-xs lg:text-sm uppercase tracking-[0.25em] text-white/60">
            HEAVY MODERN METAL • STOCKHOLM
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

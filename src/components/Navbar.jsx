export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-20">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4 flex items-center gap-10 text-white uppercase tracking-widest text-sm">


        <a href="#hero" className="text-white/70 hover:text-white transition">
          Home
        </a>
        <a href="#music" className="text-white/70 hover:text-white transition">
          Music
        </a>

        <a href="https://www.bandsintown.com/a/15509093-thrown-official"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition"
        >
          Tour
        </a>

        <a href="#contact" className="text-white/70 hover:text-white transition">
          Contact
        </a>

        <a
          href="https://arising-empire.shop/en/artists/thrown/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition"
        >
          Shop
        </a>

      </div>
    </nav>
  );
}

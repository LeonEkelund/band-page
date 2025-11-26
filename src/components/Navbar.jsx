import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 w-full z-20">
      {/* Desktop nav */}
      <div className="hidden md:flex justify-center">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4 flex items-center gap-10 text-white uppercase tracking-widest text-sm">
          <a href="#hero" className="text-white/70 hover:text-white transition">
            Home
          </a>
          <a href="#music" className="text-white/70 hover:text-white transition">
            Music
          </a>
          <a
            href="https://www.bandsintown.com/a/15509093-thrown-official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition"
          >
            Tour
          </a>
          <a
            href="#contact"
            className="text-white/70 hover:text-white transition"
          >
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
      </div>

      {/* Mobile nav */}
      <div className="flex md:hidden justify-end px-4">
        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle navigation"
        >
          {/* Lines */}
          <span
            className={`absolute h-[2px] w-6 bg-white/70 transition-all duration-300 ${open ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white/70 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"
              }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white/70 transition-all duration-300 ${open ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
          />
        </button>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute right-4 top-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 flex flex-col gap-3 text-white uppercase tracking-[0.25em] text-xs">
            <a
              href="#hero"
              className="text-white/80 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#music"
              className="text-white/80 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Music
            </a>
            <a
              href="https://www.bandsintown.com/a/15509093-thrown-official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Tour
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://arising-empire.shop/en/artists/thrown/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Shop
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

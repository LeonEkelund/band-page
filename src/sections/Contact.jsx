export function Contact() {
  return (
    <section
      id="contact"
      className="w-screen flex justify-center py-28 text-white"
    >
      <div className="w-full max-w-6xl px-6">
        {/* Section label – same style as Music */}
        <h2 className="text-xs uppercase tracking-[0.35em] text-white/60 mb-10">
          Contact
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT CARD: Info */}
          <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 ring-1 ring-white/5 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
            {/* gradient accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent opacity-70 rounded-t-2xl" />

            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-white/60 mb-4 relative">
              Booking, Management & Press
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 relative">
              Let&apos;s talk shows, releases & coverage.
            </h3>

            <p className="text-sm text-white/65 mb-8 max-w-md relative">
              For all inquiries regarding live shows, management and press,
              please get in touch through the channels below.
            </p>

            <div className="space-y-5 text-sm relative">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/50 mb-1">
                  Booking
                </p>
                <a
                  href="mailto:booking@thrown-band.com"
                  className="text-white/85 hover:text-white transition"
                >
                  booking@thrown-band.com
                </a>
              </div>

              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/50 mb-1">
                  Management
                </p>
                <a
                  href="mailto:management@thrown-band.com"
                  className="text-white/85 hover:text-white transition"
                >
                  management@thrown-band.com
                </a>
              </div>

              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/50 mb-1">
                  Press
                </p>
                <a
                  href="mailto:press@thrown-band.com"
                  className="text-white/85 hover:text-white transition"
                >
                  press@thrown-band.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Form */}
          <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 ring-1 ring-white/5 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
            {/* gradient accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent opacity-70 rounded-t-2xl" />

            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-white/60 relative">
              Send a message
            </p>

            <form className="mt-6 space-y-4 relative">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-white/50 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-white/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-white/40"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-white/50 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-sm outline-none resize-none focus:border-white/40"
                  placeholder="Tell us about booking, press or other inquiries."
                />
              </div>

              <button
                type="button"
                className="mt-4 w-full px-4 py-2 border border-white/30 rounded-full text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10 transition"
              >
                Send
              </button>

              <p className="mt-2 text-[0.7rem] text-white/45">
                This form is for demo purposes in this concept site.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

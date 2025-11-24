export function Music() {
  return (
    <section
      id="music"
      className="w-screen flex justify-center py-28 text-white"
    >
      <div className="w-full max-w-6xl px-6">
        <h2 className="text-xs uppercase tracking-[0.35em] text-white/60 mb-10">
          Music & Visuals
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* SPOTIFY CARD */}
          <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 ring-1 ring-white/5 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
            {/* gradient accent on top */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent opacity-70 rounded-t-2xl" />

            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-white/60 mb-4 relative">
              Latest Release
            </p>

            <div className="overflow-hidden rounded-xl h-[360px] relative">
              <iframe
                className="w-full h-full"
                src="https://open.spotify.com/embed/album/7KeaMmH9Y4ebUiO3dYvhvd?utm_source=generator&theme=0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>

          {/* YOUTUBE CARD */}
          <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 ring-1 ring-white/5 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl">
            {/* gradient accent on top */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent opacity-70 rounded-t-2xl" />

            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-white/60 mb-4 relative">
              Featured Video
            </p>

            <div className="overflow-hidden rounded-xl h-[360px] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DqBzOVCmIdM?list=RDDqBzOVCmIdM"
                title="THROWN - Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

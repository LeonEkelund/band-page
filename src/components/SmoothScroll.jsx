import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      gestureOrientation: "vertical",
      normalizeWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

 
    document.documentElement.style.height = "auto";
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}

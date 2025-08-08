import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-concert.jpg";

export default function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative">
      <div className="relative h-[72vh] md:h-[80vh] w-full overflow-hidden rounded-b-lg border">
        <img
          src={heroImage}
          alt="Vibrant live music concert crowd with neon lights"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />

        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-6xl leading-tight tracking-tight"
            >
              Neon Nights Live
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-muted-foreground"
            >
              Experience world‑class artists, immersive lights, and unforgettable sound.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#tickets">
                <Button variant="hero" size="lg" className="rounded-full px-8">
                  Book Tickets
                </Button>
              </a>
              <a href="#concerts" className="story-link text-sm text-muted-foreground">
                See upcoming concerts
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

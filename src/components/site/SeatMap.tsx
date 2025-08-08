import { motion } from "framer-motion";

export default function SeatMap() {
  return (
    <section id="seat-map" aria-label="Seat map" className="container py-16 md:py-24">
      <div className="mb-8 md:mb-12">
        <h2 className="font-heading text-3xl md:text-4xl">Seat Map</h2>
        <p className="text-muted-foreground mt-2">Hover to learn about each section.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="grid md:grid-cols-[1fr_320px] gap-8 items-center">
        <div className="relative rounded-lg border p-4 bg-card">
          <svg viewBox="0 0 600 360" className="w-full h-auto">
            {/* Stage */}
            <rect x="200" y="20" width="200" height="30" rx="6" className="fill-foreground/10" />
            <text x="300" y="40" textAnchor="middle" className="fill-foreground text-[12px]">STAGE</text>

            {/* VIP */}
            <g>
              <rect x="150" y="70" width="300" height="80" rx="10" className="fill-primary/20 hover:fill-primary/30 transition-colors" />
              <title>VIP — Closest to stage, lounge access</title>
            </g>

            {/* Standard */}
            <g>
              <rect x="90" y="160" width="420" height="90" rx="10" className="fill-accent/40 hover:fill-accent/50 transition-colors" />
              <title>Standard — Central seating with great view</title>
            </g>

            {/* Balcony */}
            <g>
              <rect x="40" y="260" width="520" height="70" rx="10" className="fill-muted hover:fill-muted/80 transition-colors" />
              <title>Balcony — Panoramic view, best value</title>
            </g>
          </svg>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-block h-4 w-4 rounded bg-primary/30 border" />
            <div>
              <p className="font-medium leading-none">VIP</p>
              <p className="text-sm text-muted-foreground">Closest to the stage with lounge access.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-block h-4 w-4 rounded bg-accent/60 border" />
            <div>
              <p className="font-medium leading-none">Standard</p>
              <p className="text-sm text-muted-foreground">Central area with excellent sound.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-block h-4 w-4 rounded bg-muted border" />
            <div>
              <p className="font-medium leading-none">Balcony</p>
              <p className="text-sm text-muted-foreground">Wide panoramic view from the top.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

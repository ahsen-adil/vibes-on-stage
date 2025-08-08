import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import c1 from "@/assets/concert-1.jpg";
import c2 from "@/assets/concert-2.jpg";
import c3 from "@/assets/concert-3.jpg";

const concerts = [
  { id: 1, title: "Indie Glow", date: "Oct 10, 2025", venue: "Sonic Arena", img: c1 },
  { id: 2, title: "DJ Pulse", date: "Nov 02, 2025", venue: "The Grid", img: c2 },
  { id: 3, title: "Symphonic Night", date: "Dec 12, 2025", venue: "Grand Hall", img: c3 },
];

export default function UpcomingConcerts() {
  return (
    <section id="concerts" aria-label="Upcoming concerts" className="container py-16 md:py-24">
      <div className="mb-8 md:mb-12">
        <h2 className="font-heading text-3xl md:text-4xl">Upcoming Concerts</h2>
        <p className="text-muted-foreground mt-2">Book early to secure the best seats.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {concerts.map((c, idx) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
            <Card className="overflow-hidden hover:shadow-elevated transition-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={c.img} alt={`${c.title} concert poster with neon lights`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>{c.date}</p>
                <p>{c.venue}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Limited seats</span>
                <Button variant="glow">View Details</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

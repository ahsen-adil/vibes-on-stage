import { motion } from "framer-motion";
import a1 from "@/assets/artist-1.jpg";
import a2 from "@/assets/artist-2.jpg";
import a3 from "@/assets/artist-3.jpg";
import a4 from "@/assets/artist-4.jpg";

const artists = [
  { id: 1, name: "Luna Vox", bio: "Genre-bending pop with neon flair.", img: a1 },
  { id: 2, name: "DJ Vortex", bio: "High-energy sets and immersive visuals.", img: a2 },
  { id: 3, name: "Echo Strings", bio: "Cinematic guitar-driven soundscapes.", img: a3 },
  { id: 4, name: "Aria Nova", bio: "Soulful vocals with modern edge.", img: a4 },
];

export default function Artists() {
  return (
    <section id="artists" aria-label="Artists" className="container py-16 md:py-24">
      <div className="mb-8 md:mb-12">
        <h2 className="font-heading text-3xl md:text-4xl">Artists</h2>
        <p className="text-muted-foreground mt-2">Meet the talents lighting up the stage.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {artists.map((a, idx) => (
          <motion.article key={a.id} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.05 }} className="rounded-lg overflow-hidden border bg-card">
            <div className="aspect-square overflow-hidden">
              <img src={a.img} alt={`${a.name} artist portrait`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{a.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{a.bio}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

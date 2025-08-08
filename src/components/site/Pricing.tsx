import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "VIP",
    price: "$149",
    perks: ["Front row seating", "Backstage lounge", "Complimentary drinks"],
    featured: true,
  },
  {
    name: "Standard",
    price: "$89",
    perks: ["Great view", "Central area", "Priority entry"],
  },
  {
    name: "Balcony",
    price: "$49",
    perks: ["Panoramic view", "Budget-friendly", "Comfortable seats"],
  },
];

export default function Pricing() {
  return (
    <section id="tickets" aria-label="Ticket prices" className="container py-16 md:py-24">
      <div className="mb-8 md:mb-12">
        <h2 className="font-heading text-3xl md:text-4xl">Ticket Prices</h2>
        <p className="text-muted-foreground mt-2">Choose your experience level and enjoy the show.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t, idx) => (
          <motion.div key={t.name} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.06 }}>
            <Card className={`relative overflow-hidden transition-all hover:shadow-glow ${t.featured ? 'ring-2 ring-primary' : 'hover:ring-1 hover:ring-border'}`}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span className="text-2xl">{t.name}</span>
                  <span className="text-primary text-lg font-medium">{t.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t.perks.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={t.featured ? 'hero' : 'glow'} className="w-full rounded-full">Select</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

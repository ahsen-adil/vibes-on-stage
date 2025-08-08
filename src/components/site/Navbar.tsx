import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#concerts", label: "Concerts" },
  { href: "#tickets", label: "Tickets" },
  { href: "#seat-map", label: "Seat Map" },
  { href: "#artists", label: "Artists" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-heading text-xl tracking-wide bg-gradient-primary bg-clip-text text-transparent">Sonic Live</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground story-link">
              {l.label}
            </a>
          ))}
          <a href="#tickets">
            <Button variant="hero" size="lg" className="rounded-full px-6">Book Tickets</Button>
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#tickets" onClick={() => setOpen(false)}>
              <Button variant="hero" size="lg" className="w-full rounded-full">Book Tickets</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

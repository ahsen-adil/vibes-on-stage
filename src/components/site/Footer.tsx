import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container py-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <p className="font-heading text-xl">Sonic Live</p>
          <p className="text-sm text-muted-foreground mt-1 max-w-prose">
            Sonic Live brings you curated concerts with premium sound, dazzling lights, and an unforgettable atmosphere.
          </p>
        </div>
        <div className="flex items-center gap-4 justify-start md:justify-end">
          <a aria-label="Instagram" className="hover-scale text-muted-foreground hover:text-foreground" href="#"><Instagram /></a>
          <a aria-label="Twitter" className="hover-scale text-muted-foreground hover:text-foreground" href="#"><Twitter /></a>
          <a aria-label="Facebook" className="hover-scale text-muted-foreground hover:text-foreground" href="#"><Facebook /></a>
          <a aria-label="Email" className="hover-scale text-muted-foreground hover:text-foreground" href="#"><Mail /></a>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sonic Live. All rights reserved.
      </div>
    </footer>
  );
}

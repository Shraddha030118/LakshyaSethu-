import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-9 rounded-xl bg-gradient-hero grid place-items-center shadow-card group-hover:shadow-glow transition-smooth">
            <GraduationCap className="size-5 text-gold" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold">Lakshya Sethu</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Bridge to your future</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="text-muted-foreground hover:text-foreground transition-smooth">Home</Link>
          <Link to="/recommend" activeProps={{ className: "text-primary" }} className="text-muted-foreground hover:text-foreground transition-smooth">Find My Path</Link>
          <Link to="/colleges" activeProps={{ className: "text-primary" }} className="text-muted-foreground hover:text-foreground transition-smooth">Browse Colleges</Link>
        </nav>
        <Link to="/recommend" className="px-4 py-2 rounded-full bg-gradient-gold text-gold-foreground text-sm font-semibold shadow-card hover:shadow-glow transition-smooth">
          Get Started
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
        <div>© {new Date().getFullYear()} Lakshya Sethu — Guiding PU students to their best fit.</div>
        <div className="flex gap-6">
          <span>Built for Karnataka students</span>
          <span>v1.0</span>
        </div>
      </div>
    </footer>
  );
}

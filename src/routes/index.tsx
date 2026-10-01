import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { ArrowRight, Sparkles, Target, BookOpen, IndianRupee, BedDouble, BarChart3, Scale } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Lakshya Sethu — AI Career & College Guidance for PU Students" },
      { name: "description", content: "Personalized course and college recommendations for PU students based on interests, entrance ranks, budget and location. Find your best-fit college." },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 backdrop-blur border border-gold/25 text-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="size-3.5" /> AI-Powered Career Guidance
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-background text-balance leading-[1.05]">
            The bridge between<br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">PU & your future.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-background/75 max-w-2xl mx-auto text-balance">
            Confused after boards? Tell us your interests, rank and budget — we'll match you with the right course and the best-fit colleges across Karnataka.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/recommend" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-glow hover:scale-[1.03] transition-smooth">
              Find my best-fit course
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-smooth" />
            </Link>
            <Link to="/colleges" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-background/25 text-background font-semibold backdrop-blur hover:bg-background/10 transition-smooth">
              Browse colleges
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-background/70 text-sm">
            <Stat n="120+" l="Colleges" />
            <Stat n="40+" l="Courses" />
            <Stat n="All Streams" l="Eng • Med • Comm" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">How it works</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">Three steps to clarity.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { i: 1, icon: <Target className="size-5" />, t: "Tell us about you", d: "Interests, entrance exam rank, budget and preferred location." },
            { i: 2, icon: <Sparkles className="size-5" />, t: "We analyze the fit", d: "Our recommender weighs your profile against cutoffs, fees and placements." },
            { i: 3, icon: <BookOpen className="size-5" />, t: "Get a curated path", d: "See suitable courses and a shortlist of colleges — ready to compare." },
          ].map((s) => (
            <div key={s.i} className="relative p-8 rounded-2xl bg-card border border-border shadow-card">
              <div className="absolute -top-4 left-8 size-8 rounded-full bg-gradient-hero text-gold grid place-items-center font-display text-sm font-bold">{s.i}</div>
              <div className="size-10 rounded-xl bg-accent text-accent-foreground grid place-items-center mb-4">{s.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-soft border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Everything in one place</div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">Stop hunting across ten websites.</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From KCET cutoffs to hostel fees, NAAC grades to placement records — Lakshya Sethu brings every decision-making detail under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <BookOpen />, t: "Course Recommendation", d: "Coding → CSE, AI&DS. Biology → MBBS, Nursing. Business → BBA, BCom." },
              { icon: <Target />, t: "College Matching", d: "Filtered by your rank, course and budget — ranked by fit." },
              { icon: <IndianRupee />, t: "Transparent Fees", d: "Tuition, hostel, and scholarship info upfront — no surprises." },
              { icon: <BedDouble />, t: "Hostel Availability", d: "Know if a campus has hostel and what it costs before you apply." },
              { icon: <BarChart3 />, t: "Cutoff Insights", d: "KCET, JEE, NEET, COMEDK — branch-wise cutoffs at a glance." },
              { icon: <Scale />, t: "Side-by-Side Compare", d: "Compare fees, placements, hostel and rankings between colleges." },
            ].map((f) => (
              <div key={f.t} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-smooth">
                <div className="size-10 rounded-lg bg-gradient-hero text-gold grid place-items-center mb-4">{f.icon}</div>
                <h3 className="font-semibold text-base mb-1.5">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">Your career path, made simple.</h2>
        <p className="mt-4 text-muted-foreground text-lg">Free, personalized, and built for Karnataka PU students.</p>
        <Link to="/recommend" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-glow transition-smooth">
          Start your guidance <ArrowRight className="size-4" />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-2xl font-semibold text-gold">{n}</div>
      <div className="text-xs uppercase tracking-wider mt-1">{l}</div>
    </div>
  );
}

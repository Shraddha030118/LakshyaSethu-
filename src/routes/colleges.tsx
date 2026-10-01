import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { CollegeCard } from "@/components/CollegeCard";
import { COLLEGES } from "@/lib/colleges";
import { Search } from "lucide-react";

export const Route = createFileRoute("/colleges")({
  component: CollegesPage,
  head: () => ({
    meta: [
      { title: "Browse Colleges — Lakshya Sethu" },
      { name: "description", content: "Explore engineering, medical and commerce colleges in Karnataka. Filter by stream and search by name." },
    ],
  }),
});

const STREAMS = ["All", "Engineering", "Medical", "Commerce", "Arts", "Science"] as const;

function CollegesPage() {
  const [q, setQ] = useState("");
  const [stream, setStream] = useState<(typeof STREAMS)[number]>("All");

  const filtered = useMemo(() => COLLEGES.filter((c) => {
    if (stream !== "All" && !c.streams.includes(stream as any)) return false;
    if (q && !c.name.toLowerCase().includes(q.toLowerCase()) && !c.location.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [q, stream]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <SiteNav />
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Explore</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">All colleges</h1>
          <p className="mt-3 text-muted-foreground">Browse {COLLEGES.length} curated institutions across Karnataka.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name or city…"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border focus:border-primary focus:outline-none transition-smooth text-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {STREAMS.map((s) => (
              <button key={s} onClick={() => setStream(s)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-smooth ${stream === s ? "bg-primary text-primary-foreground shadow-card" : "bg-card border border-border hover:border-primary/40"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">No colleges match your search.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((c) => <CollegeCard key={c.id} college={c} />)}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

import type { College } from "@/lib/colleges";
import { formatINR } from "@/lib/colleges";
import { MapPin, Star, BedDouble, TrendingUp, Award } from "lucide-react";

export function CollegeCard({ college }: { college: College }) {
  return (
    <div className="group relative rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-balance leading-tight">{college.name}</h3>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
            <MapPin className="size-3.5" /> {college.location}
          </div>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/15 text-gold-foreground text-sm font-semibold">
          <Star className="size-3.5 fill-gold text-gold" /> {college.rating}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{college.type}</span>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">NAAC {college.naac}</span>
        {college.tags.slice(0, 2).map((t) => (
          <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium">{t}</span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <Stat icon={<Award className="size-4" />} label="Tuition / yr" value={formatINR(college.feesPerYear)} />
        <Stat icon={<TrendingUp className="size-4" />} label="Avg Package" value={`₹${college.placement.avgPackage} LPA`} />
        <Stat icon={<BedDouble className="size-4" />} label="Hostel" value={college.hostel ? "Available" : "Not available"} />
        <Stat icon={<Star className="size-4" />} label="Cutoff" value={college.cutoff[0] ? `${college.cutoff[0].exam} ${college.cutoff[0].rank.toLocaleString()}` : "—"} />
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="text-xs text-muted-foreground mb-1.5">Top Courses</div>
        <div className="flex flex-wrap gap-1.5">
          {college.courses.slice(0, 4).map((c) => (
            <span key={c} className="text-xs px-2 py-1 rounded-md bg-muted text-foreground/80">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-muted-foreground mt-0.5">{icon}</div>
      <div>
        <div className="text-[11px] text-muted-foreground uppercase tracking-wide">{label}</div>
        <div className="font-semibold text-sm">{value}</div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { CollegeCard } from "@/components/CollegeCard";
import { INTERESTS, recommend, formatINR, type FormData, type Recommendation } from "@/lib/colleges";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/recommend")({
  component: RecommendPage,
  head: () => ({
    meta: [
      { title: "Find My Path — Lakshya Sethu" },
      { name: "description", content: "Tell us your interests, rank and budget to get personalized course and college recommendations." },
    ],
  }),
});

function RecommendPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({ interests: [], exam: "", rank: 5000, budget: 250000, location: "" });
  const [results, setResults] = useState<Recommendation[] | null>(null);

  const submit = () => setResults(recommend(form));
  const reset = () => { setStep(1); setForm({ interests: [], exam: "", rank: 5000, budget: 250000, location: "" }); setResults(null); };
  const toggleInterest = (id: string) => setForm((f) => ({ ...f, interests: f.interests.includes(id) ? f.interests.filter((x) => x !== id) : [...f.interests, id] }));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <SiteNav />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12">
        {!results ? (
          <>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="size-3.5" /> Step {step} of 4
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-balance">Let's find your path.</h1>
              <p className="mt-3 text-muted-foreground">Answer a few quick questions — takes under a minute.</p>
            </div>

            <div className="bg-card border border-border rounded-3xl shadow-card p-8 md:p-10">
              {/* progress */}
              <div className="flex gap-1.5 mb-8">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={`h-1.5 flex-1 rounded-full transition-smooth ${n <= step ? "bg-gradient-gold" : "bg-muted"}`} />
                ))}
              </div>

              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-2">What excites you?</h2>
                  <p className="text-sm text-muted-foreground mb-6">Pick one or more areas you're drawn to.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {INTERESTS.map((i) => {
                      const active = form.interests.includes(i.id);
                      return (
                        <button key={i.id} onClick={() => toggleInterest(i.id)}
                          className={`text-left p-4 rounded-xl border-2 transition-smooth ${active ? "border-primary bg-primary/5 shadow-card" : "border-border hover:border-primary/40"}`}>
                          <div className="font-semibold">{i.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">{i.maps.slice(0, 3).join(" · ")}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-2">Your entrance exam</h2>
                  <p className="text-sm text-muted-foreground mb-6">Which exam did you write? (Skip if not applicable.)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {(["KCET", "JEE", "NEET", "COMEDK"] as const).map((e) => (
                      <button key={e} onClick={() => setForm((f) => ({ ...f, exam: f.exam === e ? "" : e }))}
                        className={`p-4 rounded-xl border-2 font-semibold transition-smooth ${form.exam === e ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}>
                        {e}
                      </button>
                    ))}
                  </div>
                  {form.exam && (
                    <>
                      <label className="block text-sm font-semibold mb-2">Your rank: <span className="text-primary">{form.rank.toLocaleString()}</span></label>
                      <input type="range" min={1} max={100000} step={50} value={form.rank}
                        onChange={(e) => setForm((f) => ({ ...f, rank: +e.target.value }))}
                        className="w-full accent-primary" />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1</span><span>1,00,000</span></div>
                    </>
                  )}
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-2">Your annual budget</h2>
                  <p className="text-sm text-muted-foreground mb-6">Maximum tuition fee per year you're comfortable with.</p>
                  <div className="text-center py-6">
                    <div className="font-display text-5xl font-semibold text-primary">{formatINR(form.budget)}</div>
                    <div className="text-sm text-muted-foreground mt-1">per year</div>
                  </div>
                  <input type="range" min={50000} max={1500000} step={25000} value={form.budget}
                    onChange={(e) => setForm((f) => ({ ...f, budget: +e.target.value }))}
                    className="w-full accent-primary" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>₹50K</span><span>₹15L</span></div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="font-display text-2xl font-semibold mb-2">Preferred location</h2>
                  <p className="text-sm text-muted-foreground mb-6">Pick a city or leave blank to see all of Karnataka.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["", "Bangalore", "Mysore", "Mangalore", "Manipal"].filter(Boolean).map((loc) => (
                      <button key={loc} onClick={() => setForm((f) => ({ ...f, location: f.location === loc ? "" : loc }))}
                        className={`p-3 rounded-xl border-2 font-medium transition-smooth ${form.location === loc ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}>
                        {loc}
                      </button>
                    ))}
                    <button onClick={() => setForm((f) => ({ ...f, location: "" }))}
                      className={`p-3 rounded-xl border-2 font-medium transition-smooth ${form.location === "" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}>
                      Anywhere
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-10 flex justify-between">
                <button onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 transition-smooth">
                  Back
                </button>
                {step < 4 ? (
                  <button onClick={() => setStep((s) => s + 1)} disabled={step === 1 && form.interests.length === 0}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-card hover:shadow-elegant disabled:opacity-50 transition-smooth">
                    Continue <ArrowRight className="size-4" />
                  </button>
                ) : (
                  <button onClick={submit}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-gold text-gold-foreground text-sm font-semibold shadow-glow transition-smooth">
                    <Sparkles className="size-4" /> Show my matches
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
              <div>
                <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Your personalized matches</div>
                <h1 className="font-display text-4xl font-semibold">Here's what fits you.</h1>
              </div>
              <button onClick={reset} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-semibold hover:bg-card transition-smooth">
                <RotateCcw className="size-4" /> Start over
              </button>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-20 bg-card rounded-2xl border border-border">
                <div className="font-display text-2xl font-semibold mb-2">No exact matches.</div>
                <p className="text-muted-foreground mb-6">Try widening your budget or exam rank range.</p>
                <button onClick={reset} className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">Try again</button>
              </div>
            ) : (
              <div className="space-y-12">
                {results.map((rec) => (
                  <section key={rec.course}>
                    <div className="mb-5">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-foreground text-xs font-semibold mb-2">
                        Recommended Course
                      </div>
                      <h2 className="font-display text-3xl font-semibold">{rec.course}</h2>
                      <p className="text-sm text-muted-foreground mt-1">{rec.reason}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      {rec.colleges.map((c) => <CollegeCard key={c.id} college={c} />)}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

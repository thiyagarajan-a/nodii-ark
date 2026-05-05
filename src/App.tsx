import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Gem,
  Compass,
  Hexagon,
  Crown,
  Cog,
  Watch,
  Droplets,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import ExplodedWatch from "./components/ExplodedWatch";
import TempleSilhouette from "./components/TempleSilhouette";

const heroBadges = [
  { icon: Cog, label: "Automatic Movement" },
  { icon: Gem, label: "Sapphire Crystal" },
  { icon: Sparkles, label: "Limited Edition 500" },
  { icon: Compass, label: "Designed in India" },
];

const anatomy = [
  { n: "01", title: "Sapphire Crystal", note: "AR Coated · 1.8mm" },
  { n: "02", title: "Rose Gold PVD Case", note: "316L Stainless Steel" },
  { n: "03", title: "Emerald Sunray Dial", note: "Hand-finished" },
  { n: "04", title: "Tanjore Temple Motif", note: "Applied gold relief" },
  { n: "05", title: "Small Seconds Subdial", note: "Recessed at 6'" },
  { n: "06", title: "Automatic Movement", note: "24 Jewels · 41h" },
  { n: "07", title: "Engraved Rotor", note: "Brihadeeswarar relief" },
  { n: "08", title: "Exhibition Caseback", note: "Sapphire window" },
];

const collection = [
  {
    name: "Tanjore Temple Small Seconds",
    edition: "Limited 500",
    palette: ["#b87357", "#0b6d4f", "#c9a24a", "#0a0a0c"],
    tag: "Sculpted gopuram on emerald sunray. Small seconds at six.",
    price: "₹79,000",
  },
  {
    name: "Tanjore Temple Radiant",
    edition: "Limited 500",
    palette: ["#b87357", "#0b6d4f", "#c9a24a", "#1a1a1f", "#ece4d2"],
    tag: "Fan-rays radiating from a stepped prakara border.",
    price: "₹74,000 – ₹82,000",
  },
  {
    name: "Keezhadi Field Automatic",
    edition: "Limited 500",
    palette: ["#7a4e2e", "#0e6b6b", "#2b2b2b", "#c8b79a"],
    tag: "Pottery motifs and Tamil heritage symbols on a field watch.",
    price: "₹64,000",
  },
];

const specs: [string, string][] = [
  ["Movement", "Automatic Mechanical · 24 Jewels"],
  ["Case", "316L Stainless Steel · Rose Gold PVD"],
  ["Dial", "Emerald Green Sunray · Applied Temple Motif"],
  ["Crystal", "Sapphire · Anti-reflective Coated"],
  ["Water Resistance", "100M / 10 ATM"],
  ["Strap", "Genuine Leather · Quick Release"],
  ["Edition", "500 Pieces · Numbered Worldwide"],
  ["Origin", "Designed in India"],
];

function Badge({
  icon: Icon,
  label,
}: {
  icon: typeof Cog;
  label: string;
}) {
  return (
    <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-bone/80">
      <Icon size={14} className="text-antique" />
      {label}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-antique/80 text-[11px] tracking-[0.4em] uppercase mb-6">
      <span className="w-8 h-px bg-antique/50" />
      {children}
    </div>
  );
}

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroFade = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div className="min-h-screen bg-ink text-bone overflow-x-hidden">
      {/* Background ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070a] via-[#0a0a0d] to-[#050507]" />
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-emerald-radial blur-3xl opacity-50" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gold-radial blur-3xl opacity-60" />
        <div className="absolute inset-0 temple-grid opacity-40" />
      </div>

      {/* Nav */}
      <header className="relative z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md border border-antique/40 flex items-center justify-center">
              <Hexagon size={18} className="text-antique" strokeWidth={1.4} />
            </div>
            <div className="font-display tracking-[0.32em] text-bone text-sm">
              NODII <span className="text-antique">ARK</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.28em] uppercase text-bone/70">
            <a href="#anatomy" className="hover:text-antique transition">Anatomy</a>
            <a href="#heritage" className="hover:text-antique transition">Heritage</a>
            <a href="#collection" className="hover:text-antique transition">Collection</a>
            <a href="#specs" className="hover:text-antique transition">Specs</a>
          </nav>
          <button className="glass px-5 py-2 rounded-full text-xs tracking-[0.28em] uppercase text-bone/90 hover:text-antique transition">
            Reserve
          </button>
        </div>
        <div className="hairline max-w-7xl mx-auto" />
      </header>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-32"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            style={{ y: heroParallax, opacity: heroFade }}
            className="lg:col-span-5 relative"
          >
            <SectionLabel>Tanjore Temple Edition</SectionLabel>
            <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-bone">
              Heritage,
              <br />
              <span className="gold-text italic">Engineered</span>
              <br />
              in Motion.
            </h1>
            <p className="mt-7 text-bone/70 max-w-md leading-relaxed">
              A limited-edition mechanical watch inspired by the sacred
              geometry of Tanjore Temple and the enduring rhythm of time.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button className="group relative overflow-hidden rounded-full px-7 py-3.5 bg-gradient-to-b from-antique to-antique2 text-ink font-medium text-xs tracking-[0.28em] uppercase shadow-gold">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Collection <ChevronRight size={14} />
                </span>
              </button>
              <button className="glass rounded-full px-7 py-3.5 text-xs tracking-[0.28em] uppercase text-bone/90 hover:text-antique transition">
                View Prototype
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroBadges.map((b) => (
                <Badge key={b.label} {...b} />
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="relative"
            >
              <ExplodedWatch />
            </motion.div>
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-[90%] aspect-square rounded-full bg-emerald-radial blur-2xl" />
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-20 hairline" />
        <div className="py-6 flex flex-wrap justify-between gap-6 text-[11px] tracking-[0.4em] uppercase text-bone/50">
          <span>Heritage · Time · Civilisation</span>
          <span>Brihadeeswarar Edition</span>
          <span>500 Pieces Worldwide</span>
          <span>Est. NODII ARK</span>
        </div>
        <div className="hairline" />
      </section>

      {/* Anatomy */}
      <section id="anatomy" className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <SectionLabel>Exploded Anatomy</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-bone leading-tight max-w-xl">
                A luxury teardown of <span className="gold-text italic">eight</span> sacred layers.
              </h2>
            </div>
            <p className="max-w-md text-bone/60 leading-relaxed">
              Each component is engineered, finished, and assembled with the
              reverence of a temple sculptor. Float through the architecture of
              the NODII ARK movement.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="relative aspect-square glass rounded-3xl overflow-hidden noise">
                <ExplodedWatch variant="diagram" />
              </div>
            </div>
            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 content-start">
              {anatomy.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass rounded-xl p-4 group hover:border-antique/40 transition"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-antique text-xl">
                      {p.n}
                    </span>
                    <Hexagon
                      size={14}
                      className="text-antique/50 group-hover:rotate-180 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-3 text-bone text-sm font-medium">
                    {p.title}
                  </div>
                  <div className="mt-1 text-bone/50 text-xs">{p.note}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section id="heritage" className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative glass rounded-3xl overflow-hidden p-10 lg:p-16 noise">
            <div className="absolute inset-0 opacity-[0.07] flex items-end justify-center pointer-events-none">
              <TempleSilhouette className="w-[80%] max-w-3xl text-antique" />
            </div>
            <div className="relative grid lg:grid-cols-2 gap-12">
              <div>
                <SectionLabel>The Heritage</SectionLabel>
                <h2 className="font-display text-4xl md:text-5xl text-bone leading-tight">
                  Carved in stone.
                  <br />
                  <span className="gold-text italic">Cast in time.</span>
                </h2>
                <p className="mt-6 text-bone/70 leading-relaxed max-w-lg">
                  NODII ARK draws from the stepped vimanas of the Brihadeeswarar
                  Temple, the lost-wax bronzes of the Chola masters, and the
                  excavated geometry of Keezhadi. Every dial is a relief. Every
                  case, a sanctum.
                </p>
                <p className="mt-4 text-bone/50 text-sm leading-relaxed max-w-lg">
                  We work with one principle — sacred proportion. The golden
                  ratio that governs the gopuram governs the placement of every
                  index, every chapter mark, every applied motif.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { t: "Brihadeeswarar", s: "Sacred geometry", icon: Hexagon },
                  { t: "Chola Bronze", s: "Lost-wax craft", icon: Crown },
                  { t: "Keezhadi", s: "2,600-year roots", icon: Compass },
                  { t: "Tamil Symbols", s: "Heritage motifs", icon: Sparkles },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="glass rounded-2xl p-5 hover:border-antique/40 transition"
                  >
                    <c.icon
                      size={22}
                      className="text-antique"
                      strokeWidth={1.2}
                    />
                    <div className="mt-5 font-display text-bone text-xl">
                      {c.t}
                    </div>
                    <div className="text-bone/50 text-xs mt-1">{c.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <SectionLabel>The Collection</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-bone leading-tight max-w-xl">
                Three timepieces.
                <br />
                <span className="gold-text italic">One civilisation.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collection.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:border-antique/40 transition"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald2/30 via-ink to-ink" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExplodedWatch variant="mini" tint={c.palette[0]} accent={c.palette[1]} />
                  </div>
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-antique/90 glass rounded-full px-3 py-1">
                    {c.edition}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-bone leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-bone/60 text-sm leading-relaxed">
                    {c.tag}
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    {c.palette.map((p) => (
                      <span
                        key={p}
                        className="w-5 h-5 rounded-full border border-white/10"
                        style={{ background: p }}
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-antique font-display text-lg">
                      {c.price}
                    </span>
                    <button className="text-[11px] tracking-[0.28em] uppercase text-bone/70 hover:text-antique flex items-center gap-1 transition">
                      Discover <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <SectionLabel>Specifications</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-bone leading-tight">
                The <span className="gold-text italic">technical</span> sanctum.
              </h2>
              <p className="mt-6 text-bone/60 max-w-sm leading-relaxed">
                Every NODII ARK is engineered to the standards of independent
                Swiss horology, then finished by hand in our atelier.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="glass rounded-xl p-4 flex flex-col items-start gap-2">
                  <Droplets size={16} className="text-antique" />
                  <div className="text-xs text-bone/60">Water</div>
                  <div className="text-bone text-sm">10 ATM</div>
                </div>
                <div className="glass rounded-xl p-4 flex flex-col items-start gap-2">
                  <ShieldCheck size={16} className="text-antique" />
                  <div className="text-xs text-bone/60">Edition</div>
                  <div className="text-bone text-sm">500 / 500</div>
                </div>
                <div className="glass rounded-xl p-4 flex flex-col items-start gap-2">
                  <Watch size={16} className="text-antique" />
                  <div className="text-xs text-bone/60">Power</div>
                  <div className="text-bone text-sm">41 Hours</div>
                </div>
                <div className="glass rounded-xl p-4 flex flex-col items-start gap-2">
                  <Gem size={16} className="text-antique" />
                  <div className="text-xs text-bone/60">Crystal</div>
                  <div className="text-bone text-sm">Sapphire</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="glass rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    {specs.map(([k, v], i) => (
                      <tr
                        key={k}
                        className={
                          i !== specs.length - 1
                            ? "border-b border-antique/10"
                            : ""
                        }
                      >
                        <td className="py-5 px-6 text-[11px] tracking-[0.3em] uppercase text-bone/50 align-top w-1/3">
                          {k}
                        </td>
                        <td className="py-5 px-6 text-bone/90 font-light">
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 glass rounded-2xl p-8 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-[11px] tracking-[0.3em] uppercase text-bone/50">
                    Limited Edition Certificate
                  </div>
                  <div className="font-display text-2xl text-bone mt-2">
                    001 <span className="text-antique">/</span> 500
                  </div>
                </div>
                <button className="rounded-full px-7 py-3.5 bg-gradient-to-b from-antique to-antique2 text-ink font-medium text-xs tracking-[0.28em] uppercase shadow-gold">
                  Reserve Yours
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-20">
        <div className="hairline max-w-7xl mx-auto" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md border border-antique/40 flex items-center justify-center">
              <Hexagon size={20} className="text-antique" strokeWidth={1.4} />
            </div>
            <div className="font-display tracking-[0.32em] text-bone">
              NODII <span className="text-antique">ARK</span>
            </div>
          </div>
          <div className="text-center">
            <div className="font-display italic text-antique text-lg">
              Heritage. Time. Civilisation.
            </div>
            <div className="text-bone/40 text-xs mt-1 tracking-[0.28em] uppercase">
              © NODII ARK · Designed in India
            </div>
          </div>
          <div className="flex items-center gap-6 text-[11px] tracking-[0.28em] uppercase text-bone/50">
            <a href="#" className="hover:text-antique">Atelier</a>
            <a href="#" className="hover:text-antique">Press</a>
            <a href="#" className="hover:text-antique">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
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
  ChevronDown,
  ArrowUpRight,
  Eye,
  Layers,
  Menu,
  X,
} from "lucide-react";
// ExplodedWatch3D available at ./components/ExplodedWatch3D if needed
import { watches, type Watch as WatchType } from "./data/watches";

/* ── Helper components ── */

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-antique/80 text-[10px] tracking-[0.45em] uppercase font-sans mb-4">
      <span className="w-6 h-px bg-antique/50" />
      {children}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass rounded-2xl ${hover ? "hover:border-antique/40 transition-all duration-500" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function GoldDivider() {
  return <div className="hairline my-0" />;
}

/* ── Main App ── */
export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeWatch, setActiveWatch] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 160]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  const currentWatch = watches[activeWatch];

  return (
    <div className="min-h-screen bg-[#07070a] text-bone overflow-x-hidden selection:bg-antique/30 selection:text-white">
      {/* ── BG Ambience ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070a] via-[#0a0a0d] to-[#050507]" />
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-emerald-radial blur-3xl opacity-40" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-gold-radial blur-3xl opacity-30" />
        <div className="absolute inset-0 temple-grid opacity-30" />
      </div>

      {/* ── Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="glass rounded-none lg:rounded-b-2xl px-6 py-4 flex items-center justify-between border-t-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md border border-antique/40 flex items-center justify-center">
                <Hexagon size={16} className="text-antique" strokeWidth={1.4} />
              </div>
              <span className="font-display tracking-[0.35em] text-[13px] text-bone">
                NODII <span className="text-antique">ARK</span>
              </span>
            </div>
            <nav className="hidden lg:flex items-center gap-10 text-[10px] tracking-[0.3em] uppercase text-bone/60">
              {["Anatomy", "Heritage", "Collection", "Process", "Specs"].map(
                (s) => (
                  <a
                    key={s}
                    href={`#${s.toLowerCase()}`}
                    className="hover:text-antique transition-colors duration-300"
                  >
                    {s}
                  </a>
                )
              )}
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden lg:block glass px-5 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase text-bone/80 hover:text-antique transition">
                Reserve
              </button>
              <button
                className="lg:hidden text-bone/70"
                onClick={() => setMobileNav(!mobileNav)}
              >
                {mobileNav ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {mobileNav && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden glass mx-6 mt-2 rounded-2xl p-6 flex flex-col gap-5"
            >
              {["Anatomy", "Heritage", "Collection", "Process", "Specs"].map(
                (s) => (
                  <a
                    key={s}
                    href={`#${s.toLowerCase()}`}
                    className="text-xs tracking-[0.3em] uppercase text-bone/70 hover:text-antique"
                    onClick={() => setMobileNav(false)}
                  >
                    {s}
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-screen flex items-center pt-24"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
            {/* Left */}
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <SectionTag>Tanjore Temple Edition</SectionTag>

              <h1 className="font-display font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.02em] text-bone">
                Heritage,
                <br />
                <span className="gold-text italic font-normal">
                  Engineered
                </span>
                <br />
                in Motion.
              </h1>

              <p className="mt-8 text-bone/60 max-w-md leading-[1.7] text-[15px]">
                A limited-edition mechanical watch inspired by the sacred
                geometry of Tanjore Temple and the enduring rhythm of time.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#collection"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-gradient-to-b from-antique to-antique2 text-ink font-medium text-[10px] tracking-[0.3em] uppercase shadow-gold hover:shadow-[0_0_36px_rgba(201,162,74,0.4)] transition-shadow duration-500"
                >
                  Explore Collection{" "}
                  <ChevronRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
                <a
                  href="#anatomy"
                  className="glass rounded-full px-7 py-3.5 text-[10px] tracking-[0.3em] uppercase text-bone/80 hover:text-antique transition"
                >
                  View Anatomy
                </a>
              </div>

              {/* Badges */}
              <div className="mt-12 flex flex-wrap gap-3">
                {[
                  { icon: Cog, label: "Automatic Movement" },
                  { icon: Gem, label: "Sapphire Crystal" },
                  { icon: Sparkles, label: "Limited 500" },
                  { icon: Compass, label: "Designed in India" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="glass rounded-full px-3.5 py-1.5 flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase text-bone/60"
                  >
                    <b.icon size={11} className="text-antique/80" />
                    {b.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Hero Watch Image + ambient glow */}
            <div className="relative lg:h-[90vh] flex items-center justify-center">
              <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-radial opacity-50 blur-3xl" />
              <div className="absolute w-[400px] h-[400px] rounded-full bg-gold-radial opacity-30 blur-3xl translate-y-12" />
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="relative z-10"
              >
                <img
                  src="/watches/cropped/tanjore_ss_hero.png"
                  alt="NODII ARK Tanjore Temple Small Seconds"
                  className="w-full max-w-[480px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-bone/40">
            Scroll
          </span>
          <ChevronDown size={14} className="text-antique/60" />
        </motion.div>
      </section>

      {/* ── Marquee ── */}
      <section className="relative z-10 overflow-hidden py-6">
        <GoldDivider />
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] py-5 gap-16 text-[10px] tracking-[0.45em] uppercase text-bone/30">
          {Array.from({ length: 3 }).flatMap((_, rep) =>
            [
              "Heritage · Time · Civilisation",
              "Brihadeeswarar Edition",
              "500 Pieces Worldwide",
              "Sapphire Crystal",
              "Automatic Movement",
              "Designed in India",
            ].map((t, i) => (
              <span key={`${rep}-${i}`} className="flex items-center gap-16">
                {t}
                <Hexagon size={8} className="text-antique/30" />
              </span>
            ))
          )}
        </div>
        <GoldDivider />
      </section>

      {/* ── ANATOMY (AURIK-style big image + text) ── */}
      <section id="anatomy" className="relative z-10 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Intro row */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <SectionTag>Exploded Anatomy</SectionTag>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] text-bone">
                A luxury teardown
                <br />
                of <span className="gold-text italic">eight</span> sacred
                layers.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-bone/50 leading-[1.7] max-w-lg">
                Each component is engineered, finished, and assembled with the
                reverence of a temple sculptor. Float through the architecture
                of the NODII ARK movement — from sapphire crystal to exhibition
                caseback.
              </p>
            </div>
          </div>

          {/* Big diagram panel */}
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <GlassCard className="relative aspect-square overflow-hidden noise p-0">
                <img
                  src="/watches/keezhadi_asset.png"
                  alt="NODII ARK Watch — Front, Back, Side Views"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/60 via-transparent to-transparent" />
              </GlassCard>
            </div>

            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 content-start">
              {[
                {
                  n: "01",
                  t: "Sapphire Crystal",
                  d: "AR Coated · 1.8mm",
                  icon: Eye,
                },
                {
                  n: "02",
                  t: "Rose Gold PVD Case",
                  d: "316L Stainless Steel",
                  icon: ShieldCheck,
                },
                {
                  n: "03",
                  t: "Emerald Sunray Dial",
                  d: "Hand-finished",
                  icon: Sparkles,
                },
                {
                  n: "04",
                  t: "Temple Applied Motif",
                  d: "Gold relief sculpture",
                  icon: Crown,
                },
                {
                  n: "05",
                  t: "Small Seconds",
                  d: "Recessed at 6 o'clock",
                  icon: Watch,
                },
                {
                  n: "06",
                  t: "Automatic Movement",
                  d: "24 Jewels · 41h reserve",
                  icon: Cog,
                },
                {
                  n: "07",
                  t: "Engraved Rotor",
                  d: "Brihadeeswarar relief",
                  icon: Layers,
                },
                {
                  n: "08",
                  t: "Exhibition Caseback",
                  d: "Sapphire window",
                  icon: Gem,
                },
              ].map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  <GlassCard hover className="p-4 h-full">
                    <div className="flex items-start justify-between mb-3">
                      <span className="font-display text-antique text-xl leading-none">
                        {p.n}
                      </span>
                      <p.icon
                        size={14}
                        className="text-antique/50"
                        strokeWidth={1.4}
                      />
                    </div>
                    <div className="text-bone text-sm font-medium">{p.t}</div>
                    <div className="text-bone/40 text-xs mt-1">{p.d}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SWISS PRECISION / Process (AURIK-style) ── */}
      <section id="process" className="relative z-10 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionTag>
              <span className="mx-auto">Swiss Precision Engineering</span>
            </SectionTag>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-bone mt-2">
              Crafted for the <span className="gold-text italic">connoisseur</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Made for Heritage",
                desc: "NODII ARK combines art and engineering, merging aesthetics with centuries of cultural meaning.",
                image: "/watches/cropped/tanjore_dial_macro.png",
              },
              {
                title: "Built for Precision",
                desc: "Creating precise, innovative timepieces that celebrate life's moments with mechanical excellence.",
                image: "/watches/cropped/tanjore_rotor_macro.png",
              },
              {
                title: "Crafted for Legacy",
                desc: "Every watch is individually numbered and finished, becoming an heirloom from day one.",
                image: "/watches/cropped/keezhadi_caseback.png",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <GlassCard hover className="p-0 h-full overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-bone mb-2">
                      {c.title}
                    </h3>
                    <p className="text-bone/50 text-sm leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERITAGE ── */}
      <section id="heritage" className="relative z-10 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <GlassCard className="relative overflow-hidden p-8 lg:p-16 noise">
            {/* Temple silhouette BG */}
            <div className="absolute inset-0 opacity-[0.04] flex items-end justify-center pointer-events-none overflow-hidden">
              <svg viewBox="0 0 800 360" className="w-[80%] max-w-3xl text-antique" fill="currentColor">
                {[
                  { y: 320, w: 700, h: 40 },
                  { y: 280, w: 600, h: 40 },
                  { y: 240, w: 520, h: 40 },
                  { y: 200, w: 440, h: 40 },
                  { y: 160, w: 360, h: 40 },
                  { y: 120, w: 280, h: 40 },
                  { y: 80, w: 200, h: 40 },
                  { y: 40, w: 120, h: 40 },
                ].map((s, i) => (
                  <rect key={i} x={400 - s.w / 2} y={s.y} width={s.w} height={s.h} />
                ))}
                <polygon points="400,0 380,40 420,40" />
              </svg>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-14">
              <div>
                <SectionTag>The Heritage</SectionTag>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] text-bone">
                  Carved in stone.
                  <br />
                  <span className="gold-text italic">Cast in time.</span>
                </h2>
                <p className="mt-8 text-bone/60 leading-[1.7] max-w-lg">
                  NODII ARK draws from the stepped vimanas of the Brihadeeswarar
                  Temple, the lost-wax bronzes of the Chola masters, and the
                  excavated geometry of Keezhadi. Every dial is a relief. Every
                  case, a sanctum.
                </p>
                <p className="mt-4 text-bone/40 text-sm leading-[1.7] max-w-lg">
                  We work with one principle — sacred proportion. The golden
                  ratio that governs the gopuram governs the placement of every
                  index, every chapter mark, every applied motif.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { t: "Brihadeeswarar", s: "Sacred geometry & proportion", icon: Hexagon },
                  { t: "Chola Bronze", s: "Lost-wax master craftsmanship", icon: Crown },
                  { t: "Keezhadi", s: "2,600-year Tamil roots", icon: Compass },
                  { t: "Tamil Symbols", s: "Ancient heritage motifs", icon: Sparkles },
                ].map((c) => (
                  <GlassCard key={c.t} hover className="p-5">
                    <c.icon
                      size={20}
                      className="text-antique"
                      strokeWidth={1.2}
                    />
                    <div className="mt-5 font-display text-bone text-lg">
                      {c.t}
                    </div>
                    <div className="text-bone/40 text-xs mt-1">{c.s}</div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── COLLECTION — All 5 Models ── */}
      <section id="collection" className="relative z-10 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <SectionTag>The Collection</SectionTag>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] text-bone">
                Five timepieces.
                <br />
                <span className="gold-text italic">One civilisation.</span>
              </h2>
            </div>
            <p className="text-bone/50 max-w-md leading-[1.7]">
              Each watch is a chapter of heritage — from the stepped gopurams of
              Tanjore to the pottery motifs of ancient Keezhadi.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap gap-2 mb-10">
            {watches.map((w, i) => (
              <button
                key={w.id}
                onClick={() => setActiveWatch(i)}
                className={`rounded-full px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeWatch === i
                    ? "bg-gradient-to-b from-antique to-antique2 text-ink shadow-gold"
                    : "glass text-bone/60 hover:text-antique"
                }`}
              >
                {w.name.replace("Native American Luxury — ", "NA ")}
              </button>
            ))}
          </div>

          {/* Featured watch */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWatch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="grid lg:grid-cols-2 overflow-hidden">
                {/* Watch visual — real image */}
                <div className="relative aspect-square lg:aspect-auto flex items-center justify-center p-8 lg:p-12 overflow-hidden min-h-[400px]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${currentWatch.dialColor}20, transparent 70%)`,
                    }}
                  />
                  <motion.img
                    key={currentWatch.heroImage}
                    src={currentWatch.heroImage}
                    alt={currentWatch.name}
                    className="relative z-10 w-full max-w-[360px] h-auto object-contain drop-shadow-[0_16px_48px_rgba(0,0,0,0.7)]"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase text-antique/80 glass rounded-full px-3 py-1 z-20">
                    {currentWatch.edition}
                  </div>
                </div>
                {/* Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-antique/70 mb-2">
                    {currentWatch.subtitle}
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl text-bone leading-tight">
                    {currentWatch.name}
                  </h3>
                  <p className="mt-5 text-bone/55 leading-[1.7] text-sm">
                    {currentWatch.story}
                  </p>

                  {/* Quick specs */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {[
                      ["Movement", currentWatch.movement.split(",")[0]],
                      ["Case", currentWatch.caseDiameter],
                      ["Crystal", "Sapphire AR"],
                      ["Water", currentWatch.waterResistance.split("/")[1]?.trim() || "10 ATM"],
                    ].map(([k, v]) => (
                      <div key={k} className="border-l border-antique/20 pl-3">
                        <div className="text-[9px] tracking-[0.3em] uppercase text-bone/40">
                          {k}
                        </div>
                        <div className="text-bone/80 text-sm mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>

                  {/* Palette */}
                  <div className="mt-8 flex items-center gap-3">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-bone/40">
                      Material Palette
                    </span>
                    <div className="flex gap-1.5">
                      {currentWatch.palette.map((p) => (
                        <div
                          key={p.hex}
                          className="w-5 h-5 rounded-full border border-white/10"
                          style={{ background: p.hex }}
                          title={p.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-10 flex items-center justify-between">
                    <div>
                      <div className="text-[9px] tracking-[0.3em] uppercase text-bone/40">
                        Target Price
                      </div>
                      <div className="font-display text-2xl text-antique mt-1">
                        {currentWatch.price}
                      </div>
                    </div>
                    <button className="flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-b from-antique to-antique2 text-ink text-[10px] tracking-[0.3em] uppercase shadow-gold hover:shadow-[0_0_36px_rgba(201,162,74,0.4)] transition-shadow">
                      See Details <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {watches.map((w, i) => (
              <motion.button
                key={w.id}
                onClick={() => setActiveWatch(i)}
                className={`glass rounded-xl p-4 text-center transition-all duration-300 ${
                  activeWatch === i
                    ? "border-antique/50 shadow-gold"
                    : "hover:border-antique/30"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-20 h-20 mx-auto overflow-hidden rounded-lg flex items-center justify-center">
                  <img
                    src={w.heroImage}
                    alt={w.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-3 text-[10px] tracking-[0.15em] uppercase text-bone/60 leading-tight">
                  {w.name.length > 25 ? w.name.slice(0, 22) + "…" : w.name}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section id="specs" className="relative z-10 py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <SectionTag>Specifications</SectionTag>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] text-bone">
                The{" "}
                <span className="gold-text italic">technical</span>{" "}
                sanctum.
              </h2>
              <p className="mt-6 text-bone/50 max-w-sm leading-[1.7]">
                Every NODII ARK is engineered to the standards of independent
                Swiss horology, then finished by hand in our atelier.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: Droplets, k: "Water", v: "10 ATM" },
                  { icon: ShieldCheck, k: "Edition", v: "500 / 500" },
                  { icon: Watch, k: "Power", v: "41 Hours" },
                  { icon: Gem, k: "Crystal", v: "Sapphire" },
                ].map((s) => (
                  <GlassCard key={s.k} className="p-4 flex flex-col items-start gap-2">
                    <s.icon size={14} className="text-antique" />
                    <div className="text-[9px] tracking-[0.2em] uppercase text-bone/40">
                      {s.k}
                    </div>
                    <div className="text-bone text-sm">{s.v}</div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <GlassCard className="overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    {(
                      [
                        ["Movement", "Automatic Mechanical · 24 Jewels"],
                        ["Case", "316L Stainless Steel · Rose Gold PVD"],
                        ["Dial", "Emerald Green Sunray · Applied Temple Motif"],
                        ["Crystal", "Sapphire · Anti-reflective Coated"],
                        ["Water Resistance", "100M / 10 ATM"],
                        ["Strap", "Genuine Leather · Quick Release"],
                        ["Edition", "500 Pieces · Numbered Worldwide"],
                        ["Origin", "Designed in India"],
                      ] as [string, string][]
                    ).map(([k, v], i, arr) => (
                      <tr
                        key={k}
                        className={
                          i !== arr.length - 1
                            ? "border-b border-antique/10"
                            : ""
                        }
                      >
                        <td className="py-5 px-6 text-[10px] tracking-[0.3em] uppercase text-bone/40 align-top w-1/3">
                          {k}
                        </td>
                        <td className="py-5 px-6 text-bone/80 text-sm font-light">
                          {v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </GlassCard>

              {/* Certificate CTA */}
              <GlassCard className="mt-8 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-bone/40">
                    Limited Edition Certificate
                  </div>
                  <div className="font-display text-3xl text-bone mt-2">
                    001 <span className="text-antique">/</span> 500
                  </div>
                </div>
                <button className="rounded-full px-7 py-3.5 bg-gradient-to-b from-antique to-antique2 text-ink font-medium text-[10px] tracking-[0.3em] uppercase shadow-gold hover:shadow-[0_0_36px_rgba(201,162,74,0.4)] transition-shadow">
                  Reserve Yours
                </button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 mt-16">
        <GoldDivider />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-10 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md border border-antique/40 flex items-center justify-center">
              <Hexagon size={18} className="text-antique" strokeWidth={1.4} />
            </div>
            <div className="font-display tracking-[0.35em] text-bone">
              NODII <span className="text-antique">ARK</span>
            </div>
          </div>
          <div className="text-center">
            <div className="font-display italic text-antique text-lg">
              Heritage. Time. Civilisation.
            </div>
            <div className="text-bone/30 text-[10px] mt-1 tracking-[0.3em] uppercase">
              © NODII ARK · Designed in India
            </div>
          </div>
          <div className="flex items-center justify-end gap-8 text-[10px] tracking-[0.3em] uppercase text-bone/40">
            <a href="#" className="hover:text-antique transition">
              Atelier
            </a>
            <a href="#" className="hover:text-antique transition">
              Press
            </a>
            <a href="#" className="hover:text-antique transition">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* ── Marquee animation keyframes ── */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

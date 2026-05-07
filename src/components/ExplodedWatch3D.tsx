import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * 3D Exploded mechanical watch using CSS perspective + stacked layers.
 * Each layer is a disc/ring rendered with gradients and borders,
 * spread apart on the Z axis to create a convincing teardown effect.
 */

const layers = [
  {
    id: "sapphire",
    label: "Sapphire Crystal",
    z: 280,
    size: 320,
    render: () => (
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <div className="absolute inset-0 rounded-full border border-white/20" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
        <div className="absolute top-[20%] left-[15%] w-[40%] h-[15%] rounded-full bg-white/20 blur-md rotate-[-20deg]" />
        <div className="absolute bottom-[30%] right-[20%] w-[25%] h-[8%] rounded-full bg-white/10 blur-sm rotate-[15deg]" />
      </div>
    ),
  },
  {
    id: "bezel",
    label: "Rose Gold Bezel",
    z: 220,
    size: 340,
    render: () => (
      <div className="relative w-full h-full rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f3d68a] via-[#c9a24a] to-[#7a5420]" />
        <div className="absolute inset-[6px] rounded-full bg-[#0a0a0c]" />
        {/* Minute markers */}
        {Array.from({ length: 60 }).map((_, i) => {
          const a = (i / 60) * 360;
          const isMajor = i % 5 === 0;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-0 origin-[50%_160px]"
              style={{
                transform: `rotate(${a}deg)`,
                width: isMajor ? "2px" : "1px",
                height: isMajor ? "12px" : "6px",
                marginLeft: isMajor ? "-1px" : "-0.5px",
                background: isMajor
                  ? "linear-gradient(180deg, #f3d68a, #c9a24a)"
                  : "rgba(201,162,74,0.5)",
              }}
            />
          );
        })}
      </div>
    ),
  },
  {
    id: "dial",
    label: "Emerald Sunray Dial",
    z: 160,
    size: 300,
    render: () => (
      <div className="relative w-full h-full rounded-full overflow-hidden">
        {/* Green sunray */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a8c66] via-[#0b6d4f] to-[#02261b]" />
        {/* Sunray lines */}
        {Array.from({ length: 120 }).map((_, i) => {
          const a = (i / 120) * 360;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 origin-[0_0]"
              style={{
                transform: `rotate(${a}deg)`,
                width: "150px",
                height: "0.5px",
                background: `linear-gradient(90deg, transparent, ${i % 2 ? "rgba(26,140,102,0.6)" : "rgba(11,109,79,0.3)"}, transparent)`,
              }}
            />
          );
        })}
        {/* Chapter ring */}
        <div className="absolute inset-[8%] rounded-full border border-[#c9a24a]/30" />
        {/* Applied indices */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * 360 - 90;
          const r = 42;
          const x = 50 + r * Math.cos((a * Math.PI) / 180);
          const y = 50 + r * Math.sin((a * Math.PI) / 180);
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: "3px",
                height: i % 3 === 0 ? "14px" : "10px",
                marginLeft: "-1.5px",
                marginTop: "-5px",
                background: "linear-gradient(180deg, #f3d68a, #c9a24a)",
                transform: `rotate(${a + 90}deg)`,
                boxShadow: "0 0 6px rgba(243,214,138,0.4)",
              }}
            />
          );
        })}
      </div>
    ),
  },
  {
    id: "motif",
    label: "Temple Applied Motif",
    z: 130,
    size: 160,
    render: () => (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Gopuram stepped pyramid */}
        <svg viewBox="0 0 120 100" className="w-full h-full" fill="none">
          {[
            { y: 70, w: 100, h: 12 },
            { y: 58, w: 82, h: 12 },
            { y: 46, w: 66, h: 12 },
            { y: 34, w: 50, h: 12 },
            { y: 22, w: 36, h: 12 },
            { y: 12, w: 22, h: 10 },
          ].map((s, i) => (
            <rect
              key={i}
              x={60 - s.w / 2}
              y={s.y}
              width={s.w}
              height={s.h}
              fill="url(#goldFill)"
              stroke="#8a6a25"
              strokeWidth="0.5"
            />
          ))}
          <polygon points="60,2 54,12 66,12" fill="url(#goldFill)" />
          {/* Pillar details */}
          {[-20, -10, 10, 20].map((ox) => (
            <line
              key={ox}
              x1={60 + ox}
              y1={35}
              x2={60 + ox}
              y2={80}
              stroke="#8a6a25"
              strokeWidth="0.4"
              opacity="0.6"
            />
          ))}
          <defs>
            <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3d68a" />
              <stop offset="100%" stopColor="#a8852f" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    id: "hands",
    label: "Dauphine Hands",
    z: 200,
    size: 280,
    render: () => (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Hour hand */}
          <polygon
            points="100,100 97,98 96,42 100,38 104,42 103,98"
            fill="url(#handGold)"
            filter="drop-shadow(0 0 3px rgba(243,214,138,0.5))"
          />
          {/* Minute hand */}
          <g transform="rotate(72 100 100)">
            <polygon
              points="100,100 98,98 97.5,28 100,24 102.5,28 102,98"
              fill="url(#handGold)"
              filter="drop-shadow(0 0 3px rgba(243,214,138,0.5))"
            />
          </g>
          {/* Center cap */}
          <circle cx="100" cy="100" r="5" fill="#f3d68a" />
          <circle cx="100" cy="100" r="2" fill="#1a0e05" />
          <defs>
            <linearGradient id="handGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f3d68a" />
              <stop offset="100%" stopColor="#a8852f" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    id: "movement",
    label: "Automatic Movement",
    z: 60,
    size: 280,
    render: () => (
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d8b76a] via-[#8a6a25] to-[#3a2a14]" />
        {/* Bridges */}
        <div className="absolute top-[25%] left-[20%] w-[60%] h-[50%] rounded-xl bg-[#1a0e05]/70 border border-[#5a3a1a]/30" />
        <div className="absolute top-[30%] left-[25%] w-[50%] h-[8%] bg-[#c9a24a]/40 rounded" />
        <div className="absolute top-[55%] left-[22%] w-[56%] h-[8%] bg-[#c9a24a]/30 rounded" />
        {/* Jewels */}
        {[
          [45, 35],
          [55, 35],
          [40, 60],
          [60, 60],
          [50, 48],
        ].map(([x, y], i) => (
          <div
            key={i}
            className="absolute w-[3%] h-[3%] rounded-full bg-[#c41e3a] shadow-[0_0_4px_rgba(196,30,58,0.8)]"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}
        {/* Gear teeth on edge */}
        {Array.from({ length: 48 }).map((_, i) => {
          const a = (i / 48) * 360;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-0 origin-[50%_140px]"
              style={{
                transform: `rotate(${a}deg)`,
                width: "2px",
                height: "5px",
                marginLeft: "-1px",
                background: "#3a2a14",
              }}
            />
          );
        })}
        <div className="absolute inset-[8%] rounded-full border border-[#c9a24a]/20" />
      </div>
    ),
  },
  {
    id: "rotor",
    label: "Engraved Rotor",
    z: 20,
    size: 300,
    render: () => (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Half-circle rotor */}
          <path
            d="M 100 100 L 30 100 A 70 70 0 0 1 170 100 Z"
            fill="url(#rotorGrad)"
            stroke="#8a6a25"
            strokeWidth="1"
          />
          {/* Engraving lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d={`M ${50 + i * 14} 100 A ${50 - i * 3} ${50 - i * 3} 0 0 1 ${150 - i * 14} 100`}
              fill="none"
              stroke="#5a3a1a"
              strokeWidth="0.5"
              opacity="0.6"
            />
          ))}
          <circle cx="100" cy="100" r="8" fill="#f3d68a" stroke="#8a6a25" strokeWidth="1" />
          <circle cx="100" cy="100" r="3" fill="#1a0e05" />
          <text
            x="100"
            y="70"
            textAnchor="middle"
            fill="#1a0e05"
            fontSize="5"
            fontFamily="serif"
            letterSpacing="2"
          >
            NODII ARK
          </text>
          <defs>
            <linearGradient id="rotorGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f3d68a" />
              <stop offset="50%" stopColor="#c9a24a" />
              <stop offset="100%" stopColor="#8a6a25" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    id: "caseback",
    label: "Exhibition Caseback",
    z: -40,
    size: 340,
    render: () => (
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9a24a] via-[#8a6a25] to-[#3a2a14]" />
        <div className="absolute inset-[10%] rounded-full bg-[#0a0a0c] border border-[#c9a24a]/30" />
        <div className="absolute inset-[15%] rounded-full border border-[#c9a24a]/15" />
        {/* Screw holes */}
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * 360;
          const r = 44;
          const x = 50 + r * Math.cos((a * Math.PI) / 180);
          const y = 50 + r * Math.sin((a * Math.PI) / 180);
          return (
            <div
              key={i}
              className="absolute w-[3%] h-[3%] rounded-full bg-[#5a3a1a] border border-[#c9a24a]/30"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[8px] tracking-[3px] text-[#c9a24a]/60 font-serif uppercase">
            Limited 500
          </span>
        </div>
      </div>
    ),
  },
];

export default function ExplodedWatch3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const spread = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.6]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 15, 5]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-radial opacity-40 blur-2xl" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gold-radial opacity-30 blur-3xl" />

      <motion.div
        className="relative"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          width: 380,
          height: 380,
        }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            rotateX,
          }}
        >
          {layers.map((layer, i) => (
            <motion.div
              key={layer.id}
              className="absolute"
              style={{
                width: layer.size,
                height: layer.size,
                left: `calc(50% - ${layer.size / 2}px)`,
                top: `calc(50% - ${layer.size / 2}px)`,
                transformStyle: "preserve-3d",
                z: useTransform(spread, (s) => layer.z * s),
                filter: `drop-shadow(0 ${4 + i * 2}px ${8 + i * 4}px rgba(0,0,0,0.5))`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
            >
              {layer.render()}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating labels */}
      <div className="absolute inset-0 pointer-events-none">
        {layers.filter((_, i) => i % 2 === 0).map((layer, i) => {
          const isLeft = i % 2 === 0;
          const yPos = 10 + i * 12;
          return (
            <motion.div
              key={layer.id}
              className={`absolute ${isLeft ? "left-0" : "right-0"} flex items-center gap-3`}
              style={{ top: `${yPos}%` }}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              {isLeft && (
                <>
                  <div className="text-right">
                    <div className="text-antique text-[10px] tracking-[3px] uppercase">
                      {String(i * 2 + 1).padStart(2, "0")}
                    </div>
                    <div className="text-bone/80 text-xs mt-0.5">{layer.label}</div>
                  </div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-antique/40" />
                </>
              )}
              {!isLeft && (
                <>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-antique/40" />
                  <div>
                    <div className="text-antique text-[10px] tracking-[3px] uppercase">
                      {String(i * 2 + 1).padStart(2, "0")}
                    </div>
                    <div className="text-bone/80 text-xs mt-0.5">{layer.label}</div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

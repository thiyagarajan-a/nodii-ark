import { motion } from "framer-motion";

type Props = {
  variant?: "hero" | "diagram" | "mini";
  tint?: string;
  accent?: string;
};

/**
 * SVG composition of an exploded mechanical watch.
 * Layers (top to bottom in SVG = front to back visually): sapphire, hands,
 * dial with applied temple motif, chapter ring, movement, rotor, caseback,
 * crown + lugs as side flourishes.
 */
export default function ExplodedWatch({
  variant = "hero",
  tint = "#b87357",
  accent = "#0b6d4f",
}: Props) {
  const isMini = variant === "mini";
  const isDiagram = variant === "diagram";

  const float = (delay = 0, y = 8) => ({
    initial: { y: 0 },
    animate: { y: [0, -y, 0] },
    transition: {
      duration: 6 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <div className="relative w-full aspect-square">
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="dialGrad" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor={accent} stopOpacity="1" />
            <stop offset="60%" stopColor="#073d2c" stopOpacity="1" />
            <stop offset="100%" stopColor="#02110b" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="caseGrad" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#f3d68a" />
            <stop offset="55%" stopColor={tint} />
            <stop offset="100%" stopColor="#5a2f1d" />
          </radialGradient>
          <radialGradient id="movementGrad" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#d8b76a" />
            <stop offset="100%" stopColor="#3a2a14" />
          </radialGradient>
          <radialGradient id="sapphireGrad" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="goldEdge" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f3d68a" />
            <stop offset="100%" stopColor="#8a6a25" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Floating exploded layers */}
        {/* Caseback (bottom) */}
        <motion.g {...float(0.1, 6)}>
          <circle cx="300" cy="430" r="105" fill="url(#caseGrad)" opacity="0.85" />
          <circle cx="300" cy="430" r="105" fill="none" stroke="url(#goldEdge)" strokeWidth="1.5" />
          <circle cx="300" cy="430" r="80" fill="none" stroke="#c9a24a" strokeWidth="0.6" opacity="0.6" />
          {/* engraved temple ring */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const x = 300 + Math.cos(a) * 92;
            const y = 430 + Math.sin(a) * 92;
            return (
              <rect
                key={i}
                x={x - 1.2}
                y={y - 4}
                width="2.4"
                height="8"
                fill="#f3d68a"
                opacity="0.7"
                transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
              />
            );
          })}
          {/* center text */}
          <text
            x="300"
            y="434"
            textAnchor="middle"
            fill="#1a0e05"
            fontSize="9"
            fontFamily="serif"
            letterSpacing="3"
          >
            NODII ARK
          </text>
        </motion.g>

        {/* Movement + rotor */}
        <motion.g {...float(0.4, 7)}>
          <circle cx="300" cy="340" r="92" fill="url(#movementGrad)" />
          <circle cx="300" cy="340" r="92" fill="none" stroke="url(#goldEdge)" strokeWidth="1.5" />
          {/* Bridges */}
          <path
            d="M250 290 Q300 310 350 290 L355 360 Q300 380 245 360 Z"
            fill="#1a0e05"
            opacity="0.65"
          />
          {/* Jewels */}
          {[
            [300, 305],
            [275, 350],
            [325, 350],
            [300, 380],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.2" fill="#b81e3a" />
          ))}
          {/* Rotor arc */}
          <path
            d="M225 340 A75 75 0 0 1 375 340"
            fill="none"
            stroke="#f3d68a"
            strokeWidth="14"
            opacity="0.95"
          />
          <circle cx="300" cy="340" r="6" fill="#f3d68a" />
          {/* gear teeth */}
          {Array.from({ length: 36 }).map((_, i) => {
            const a = (i / 36) * Math.PI * 2;
            const x = 300 + Math.cos(a) * 88;
            const y = 340 + Math.sin(a) * 88;
            return (
              <rect
                key={i}
                x={x - 1}
                y={y - 3}
                width="2"
                height="6"
                fill="#3a2a14"
                transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
              />
            );
          })}
        </motion.g>

        {/* Dial (emerald sunray + temple motif) */}
        <motion.g {...float(0.7, 9)}>
          <circle cx="300" cy="240" r="98" fill="url(#dialGrad)" />
          {/* sunray */}
          {Array.from({ length: 60 }).map((_, i) => {
            const a = (i / 60) * Math.PI * 2;
            const x1 = 300 + Math.cos(a) * 6;
            const y1 = 240 + Math.sin(a) * 6;
            const x2 = 300 + Math.cos(a) * 92;
            const y2 = 240 + Math.sin(a) * 92;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#0fa676"
                strokeOpacity={i % 2 ? 0.18 : 0.4}
                strokeWidth="0.7"
              />
            );
          })}
          {/* stepped border (prakara) */}
          <circle
            cx="300"
            cy="240"
            r="98"
            fill="none"
            stroke="url(#goldEdge)"
            strokeWidth="2"
          />
          <circle
            cx="300"
            cy="240"
            r="92"
            fill="none"
            stroke="#c9a24a"
            strokeWidth="0.6"
            opacity="0.7"
          />
          {/* Temple gopuram silhouette - applied motif */}
          <g transform="translate(300 240)" opacity="0.95">
            {[
              { y: -10, w: 80, h: 14 },
              { y: -22, w: 64, h: 12 },
              { y: -32, w: 50, h: 10 },
              { y: -40, w: 38, h: 8 },
              { y: -46, w: 26, h: 6 },
            ].map((s, i) => (
              <rect
                key={i}
                x={-s.w / 2}
                y={s.y}
                width={s.w}
                height={s.h}
                fill="#f3d68a"
                stroke="#8a6a25"
                strokeWidth="0.4"
                opacity="0.85"
              />
            ))}
            {/* finial */}
            <polygon points="0,-58 -4,-46 4,-46" fill="#f3d68a" />
            {/* base */}
            <rect x="-44" y="4" width="88" height="6" fill="#f3d68a" opacity="0.85" />
          </g>
          {/* Indices */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const x = 300 + Math.cos(a) * 80;
            const y = 240 + Math.sin(a) * 80;
            return (
              <rect
                key={i}
                x={x - 1.2}
                y={y - 5}
                width="2.4"
                height="10"
                fill="#f3d68a"
                transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`}
              />
            );
          })}
        </motion.g>

        {/* Hands */}
        <motion.g {...float(1.0, 10)}>
          <g transform="translate(300 175)">
            {/* hour */}
            <polygon points="-2,0 2,0 1,-46 -1,-46" fill="#f3d68a" />
            {/* minute */}
            <polygon
              points="-1.4,0 1.4,0 0.7,-66 -0.7,-66"
              fill="#f3d68a"
              transform="rotate(40)"
            />
            {/* center cap */}
            <circle r="4" fill="#f3d68a" />
            <circle r="1.5" fill="#1a0e05" />
          </g>
        </motion.g>

        {/* Sapphire crystal (top, glassy) */}
        <motion.g {...float(1.3, 11)}>
          <ellipse cx="300" cy="105" rx="105" ry="22" fill="url(#sapphireGrad)" />
          <ellipse
            cx="300"
            cy="105"
            rx="105"
            ry="22"
            fill="none"
            stroke="url(#goldEdge)"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <ellipse
            cx="278"
            cy="100"
            rx="40"
            ry="6"
            fill="#ffffff"
            opacity="0.18"
          />
        </motion.g>

        {/* Crown (right) */}
        <motion.g {...float(0.6, 5)}>
          <rect x="495" y="320" width="22" height="36" rx="3" fill="url(#caseGrad)" />
          <rect x="495" y="320" width="22" height="36" rx="3" fill="none" stroke="url(#goldEdge)" strokeWidth="1" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="495"
              y1={324 + i * 4}
              x2="517"
              y2={324 + i * 4}
              stroke="#5a2f1d"
              strokeWidth="0.6"
            />
          ))}
        </motion.g>

        {/* Lugs / strap hint */}
        <motion.g {...float(0.2, 4)} opacity="0.85">
          <path
            d="M180 470 Q300 540 420 470 L420 560 Q300 600 180 560 Z"
            fill="#1a0e05"
          />
          <path
            d="M180 470 Q300 540 420 470"
            stroke="url(#goldEdge)"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          {/* stitching */}
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={i}
              x1={200 + i * 16}
              y1={510 + Math.sin(i) * 2}
              x2={208 + i * 16}
              y2={512 + Math.sin(i) * 2}
              stroke="#c9a24a"
              strokeWidth="0.6"
              opacity="0.5"
            />
          ))}
        </motion.g>

        {/* Diagram annotations */}
        {isDiagram && (
          <g
            fontFamily="'Inter', sans-serif"
            fontSize="9"
            fill="#c9a24a"
            letterSpacing="1.6"
          >
            {[
              { n: "01", x: 460, y: 105, label: "SAPPHIRE" },
              { n: "02", x: 540, y: 340, label: "CROWN" },
              { n: "03", x: 60, y: 240, label: "DIAL" },
              { n: "04", x: 60, y: 200, label: "TEMPLE MOTIF" },
              { n: "05", x: 60, y: 340, label: "MOVEMENT" },
              { n: "06", x: 540, y: 430, label: "CASEBACK" },
              { n: "07", x: 60, y: 470, label: "STRAP" },
              { n: "08", x: 540, y: 175, label: "HANDS" },
            ].map((a) => (
              <g key={a.n}>
                <text x={a.x} y={a.y} textAnchor={a.x < 300 ? "start" : "end"}>
                  {a.n} · {a.label}
                </text>
                <line
                  x1={a.x < 300 ? a.x + 4 : a.x - 4}
                  y1={a.y - 3}
                  x2={a.x < 300 ? a.x + 60 : a.x - 60}
                  y2={a.y - 3}
                  stroke="#c9a24a"
                  strokeOpacity="0.4"
                  strokeWidth="0.6"
                />
              </g>
            ))}
          </g>
        )}

        {/* Soft halo */}
        <circle
          cx="300"
          cy="300"
          r="180"
          fill="none"
          stroke="#c9a24a"
          strokeOpacity="0.08"
          strokeWidth={isMini ? 0 : 0.8}
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}

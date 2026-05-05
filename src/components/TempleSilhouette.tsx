export default function TempleSilhouette({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 360"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stepped gopuram silhouette inspired by Brihadeeswarar */}
      <g>
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
      </g>
    </svg>
  );
}

import type { CSSProperties } from "react";

const MAPLE_PATH =
  "M14 1 L17 8 L25 5 L22 12 L28 16 L21 19 L24 27 L16 24 L14 31 L12 24 L4 27 L7 19 L0 16 L6 12 L3 5 L11 8 Z";

const LEAVES = [
  { x: "4%", dur: "21s", delay: "-4s", size: 19, drift: "70px", spin: "320deg", color: "#e0621a" },
  { x: "12%", dur: "26s", delay: "-13s", size: 14, drift: "-48px", spin: "-260deg", color: "#f59e0b" },
  { x: "22%", dur: "18s", delay: "-8s", size: 22, drift: "54px", spin: "410deg", color: "#c2410c" },
  { x: "31%", dur: "24s", delay: "-19s", size: 16, drift: "-72px", spin: "-300deg", color: "#fbbf24" },
  { x: "40%", dur: "29s", delay: "-2s", size: 12, drift: "46px", spin: "280deg", color: "#d97706" },
  { x: "49%", dur: "20s", delay: "-16s", size: 20, drift: "-58px", spin: "-360deg", color: "#b45309" },
  { x: "58%", dur: "27s", delay: "-10s", size: 15, drift: "66px", spin: "330deg", color: "#f59e0b" },
  { x: "67%", dur: "22s", delay: "-6s", size: 23, drift: "-42px", spin: "-420deg", color: "#e0621a" },
  { x: "76%", dur: "30s", delay: "-22s", size: 13, drift: "52px", spin: "250deg", color: "#fbbf24" },
  { x: "84%", dur: "19s", delay: "-11s", size: 18, drift: "-64px", spin: "-310deg", color: "#c2410c" },
  { x: "92%", dur: "25s", delay: "-3s", size: 16, drift: "44px", spin: "360deg", color: "#d97706" },
  { x: "97%", dur: "23s", delay: "-17s", size: 12, drift: "-50px", spin: "-280deg", color: "#f59e0b" },
];

const TURKEYS = [
  { bottom: "13%", dur: "54s", delay: "-12s", scale: 0.78 },
  { bottom: "19%", dur: "44s", delay: "-33s", scale: 1 },
  { bottom: "8%", dur: "64s", delay: "-5s", scale: 0.62 },
];

const GARLAND_LEAVES = [
  { x: 20, y: 24, r: -38, s: 1.05, c: "#c2410c" },
  { x: 38, y: 35, r: 24, s: 0.95, c: "#e0621a" },
  { x: 57, y: 34, r: -14, s: 1.15, c: "#f59e0b" },
  { x: 75, y: 44, r: 38, s: 0.9, c: "#b45309" },
  { x: 93, y: 47, r: -28, s: 1.1, c: "#d97706" },
  { x: 111, y: 57, r: 18, s: 0.86, c: "#c2410c" },
  { x: 129, y: 61, r: -42, s: 1.02, c: "#fbbf24" },
  { x: 147, y: 70, r: 30, s: 0.92, c: "#e0621a" },
  { x: 164, y: 76, r: -18, s: 1.08, c: "#b45309" },
];

const GARLAND_BERRIES = [
  { x: 30, y: 29, c: "#dc2626" },
  { x: 66, y: 40, c: "#f97316" },
  { x: 102, y: 52, c: "#dc2626" },
  { x: 138, y: 68, c: "#f97316" },
];

const GARLAND_SVG = (
  <>
    <path d="M6 8 C46 32 101 34 170 90" fill="none" stroke="#7c4a1e" strokeWidth="3.4" strokeLinecap="round" />
    <path d="M32 24 C38 35 36 46 30 55 M91 45 C95 58 91 68 84 76 M143 68 C151 80 149 92 142 100" fill="none" stroke="#7c4a1e" strokeWidth="2" strokeLinecap="round" opacity=".8" />
    {GARLAND_LEAVES.map((leaf, index) => (
      <g key={index} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}>
        <path d="M0 -14 L3 -5 L11 -8 L9 0 L16 4 L8 8 L10 16 L2 12 L0 20 L-2 12 L-10 16 L-8 8 L-16 4 L-9 0 L-11 -8 L-3 -5 Z" fill={leaf.c} />
        <path d="M0 -10 V15" stroke="rgba(67,32,8,.35)" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    ))}
    {GARLAND_BERRIES.map((berry, index) => (
      <g key={index}>
        <circle cx={berry.x} cy={berry.y} r="4.3" fill={berry.c} opacity=".95" />
        <circle cx={berry.x - 1.2} cy={berry.y - 1.4} r="1.2" fill="#ffe2b8" opacity=".7" />
      </g>
    ))}
  </>
);

function Turkey({ style }: { style: CSSProperties }) {
  return (
    <span className="thanks-turkey" style={style}>
      <svg viewBox="0 0 165 132" aria-hidden="true">
        <g className="thanks-turkey-bob">
          <g stroke="#3b1608" strokeWidth="3.4" strokeLinejoin="round">
            <ellipse cx="66" cy="61" rx="16" ry="34" transform="rotate(-52 66 61)" fill="#7c2d12" />
            <ellipse cx="65" cy="59" rx="16" ry="36" transform="rotate(-32 65 59)" fill="#9a3412" />
            <ellipse cx="65" cy="58" rx="16" ry="37" transform="rotate(-11 65 58)" fill="#c2410c" />
            <ellipse cx="65" cy="58" rx="16" ry="37" transform="rotate(10 65 58)" fill="#ea580c" />
            <ellipse cx="66" cy="59" rx="16" ry="36" transform="rotate(31 66 59)" fill="#b45309" />
            <ellipse cx="67" cy="61" rx="16" ry="34" transform="rotate(51 67 61)" fill="#7c2d12" />
          </g>

          <path d="M96 100 L96 118 M96 118 L88 124 M96 118 L104 124" fill="none" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
          <path d="M112 98 L112 116 M112 116 L104 122 M112 116 L120 122" fill="none" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />

          <ellipse cx="98" cy="84" rx="34" ry="28" fill="#8b4513" stroke="#3b1608" strokeWidth="4" />
          <path d="M80 77 C91 66 112 68 120 81 C112 96 91 96 80 83 Z" fill="#a0522d" stroke="#4a1d08" strokeWidth="3" />
          <path d="M88 82 C96 78 106 79 112 85" fill="none" stroke="#d6a06a" strokeWidth="2.2" strokeLinecap="round" opacity=".7" />

          <path d="M119 72 C122 58 124 50 130 45" fill="none" stroke="#a0522d" strokeWidth="16" strokeLinecap="round" />
          <circle cx="132" cy="42" r="14" fill="#a0522d" stroke="#3b1608" strokeWidth="4" />
          <circle cx="137" cy="37" r="3.5" fill="#1a0a02" />
          <circle cx="138" cy="36" r="1.2" fill="#fff7e6" />
          <path d="M145 45 L160 49 L145 55 Z" fill="#fbbf24" stroke="#7c4a1e" strokeWidth="2.6" />
          <path d="M143 55 C141 64 147 69 151 62" fill="#dc2626" stroke="#7f1d1d" strokeWidth="2" />
          <path d="M128 53 C131 55 134 55 137 53" fill="none" stroke="#7f1d1d" strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
        </g>
      </svg>
    </span>
  );
}

export function ThanksgivingDecor() {
  return (
    <div className="thanks-decor" aria-hidden="true">
      <div className="thanks-glow" />
      <svg className="thanks-garland thanks-garland--tl" viewBox="0 0 200 150">{GARLAND_SVG}</svg>
      <svg className="thanks-garland thanks-garland--tr" viewBox="0 0 200 150">{GARLAND_SVG}</svg>
      {LEAVES.map((leaf, index) => (
        <svg
          key={index}
          className="thanks-leaf"
          viewBox="0 0 28 32"
          style={{
            "--x": leaf.x,
            "--dur": leaf.dur,
            "--delay": leaf.delay,
            "--size": `${leaf.size}px`,
            "--drift": leaf.drift,
            "--spin": leaf.spin,
            color: leaf.color,
          } as CSSProperties}
        >
          <path d={MAPLE_PATH} fill="currentColor" opacity=".92" />
          <path d="M14 6 V28" fill="none" stroke="rgba(58,25,6,.4)" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ))}
      {TURKEYS.map((turkey, index) => (
        <Turkey
          key={index}
          style={{
            "--bottom": turkey.bottom,
            "--dur": turkey.dur,
            "--delay": turkey.delay,
            "--scale": turkey.scale,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

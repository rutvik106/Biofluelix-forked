import type { ReactNode } from "react";

type Pillar = { num: string; title: string; body: string; icon: ReactNode };

const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "Quality Assurance",
    body: "Every batch is tested for Gross Calorific Value, moisture, and ash residue. Lab reports follow each delivery — you get exactly what you pay for.",
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="32" cy="32" r="22" />
        <path d="M32 18v14l9 5" />
        <circle cx="32" cy="32" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Operational Efficiency",
    body: "Optimizing energy systems to improve performance, scalability, and resource utilization — ensuring that supply chain fluctuations never affect your bottom line.",
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="32" cy="34" r="20" />
        <path d="M32 34l11-9" />
        <path d="M32 34v-2" />
        <path d="M20 14l4 6M44 14l-4 6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Industrial Reliability",
    body: "Delivering dependable, future-ready energy solutions for evolving industry needs — so your boilers stay supplied through every season and harvest cycle.",
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M32 8l20 8v14c0 14-9 22-20 26-11-4-20-12-20-26V16z" />
        <path d="M24 32l6 6 12-13" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Environmental Responsibility",
    body: "Supporting cleaner energy adoption while reducing environmental impact — turning agricultural residue into low-emission fuel and measurable carbon savings.",
    icon: (
      <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M32 8C20 8 12 16 12 28c0 16 14 28 20 28 6 0 20-12 20-28 0-12-8-20-20-20z" />
        <path d="M32 14c0 8 4 16 12 22" />
        <path d="M32 14c0 8-4 16-12 22" />
      </svg>
    ),
  },
];

export function Pillars() {
  return (
    <section className="section section-bone">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Why Biofuelix</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              Built for the future of{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>sustainable industry.</span>
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              In an unpredictable market, reliability is a strategy. We address the two biggest hurdles
              in green energy — consistency and quality — through structure, not optimism.
            </p>
          </div>
        </div>
        <div className="pillar-grid reveal-stagger">
          {PILLARS.map((p) => (
            <div className="pillar-card" key={p.num}>
              <div className="pillar-icon">{p.icon}</div>
              <div className="pillar-num">{p.num} / 04</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

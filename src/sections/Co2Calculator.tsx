import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "../components/icons";

function CalcCell({
  label,
  value,
  suffix,
  detail,
}: {
  label: string;
  value: string;
  suffix: string;
  detail: string;
}) {
  return (
    <div style={{ background: "var(--forest-deep)", padding: "32px 28px" }}>
      <div
        className="mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "rgba(245,240,230,0.55)",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <div
          className="serif"
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 300,
            lineHeight: 1,
            color: "var(--accent-bright)",
            letterSpacing: "-0.02em",
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: 13, color: "rgba(245,240,230,0.65)" }}>{suffix}</div>
      </div>
      <div style={{ fontSize: 13, color: "rgba(245,240,230,0.5)", marginTop: 12 }}>{detail}</div>
    </div>
  );
}

export function Co2Calculator() {
  const [tons, setTons] = useState(100);
  const co2 = tons * 2.42;
  const trees = Math.round(co2 * 50);
  const credits = Math.round(co2);

  return (
    <section id="calculator" className="section section-dark">
      <div className="shell">
        <div className="section-header reveal">
          <div className="left">
            <div className="eyebrow">Carbon offset calculator</div>
            <h2 className="serif" style={{ marginTop: 16 }}>
              How much CO₂
              <br />
              could{" "}
              <span className="italic" style={{ color: "var(--accent-bright)" }}>you</span> save?
            </h2>
          </div>
          <div className="right">
            <p className="lead">
              Coal emits ~2.42 kg CO₂ per kg burned. Biomass, under IPCC short-cycle carbon
              guidelines, is effectively zero. Drag the slider to see the math.
            </p>
          </div>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 64,
            padding: "clamp(40px, 5vw, 80px)",
            background: "rgba(245,240,230,0.04)",
            border: "1px solid rgba(245,240,230,0.12)",
            borderRadius: 8,
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "rgba(245,240,230,0.6)",
              marginBottom: 20,
            }}
          >
            HOW MANY TONS OF COAL DO YOU BURN PER MONTH?
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 32 }}>
            <div
              className="serif"
              style={{
                fontSize: "clamp(72px, 10vw, 144px)",
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "var(--cream)",
              }}
            >
              {tons.toLocaleString()}
            </div>
            <div className="mono" style={{ fontSize: 14, color: "var(--accent-bright)" }}>
              tons / month
            </div>
          </div>

          <input
            type="range"
            min={10}
            max={5000}
            step={10}
            value={tons}
            onChange={(e) => setTons(+e.target.value)}
            style={{ width: "100%", accentColor: "var(--accent-bright)" }}
          />

          <div
            className="calc-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              marginTop: 64,
              background: "rgba(245,240,230,0.12)",
            }}
          >
            <CalcCell
              label="CO₂ offset / month"
              value={co2.toFixed(1)}
              suffix="tons"
              detail="vs. equivalent coal burn"
            />
            <CalcCell
              label="Equivalent trees planted"
              value={trees.toLocaleString()}
              suffix="trees / yr"
              detail="based on annual sequestration"
            />
            <CalcCell
              label="Carbon credit potential"
              value={credits.toLocaleString()}
              suffix="CCC / month"
              detail="under India CCTS, indicative"
            />
          </div>

          <div
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "rgba(245,240,230,0.5)",
                textTransform: "uppercase",
              }}
            >
              Indicative · For exact projection request a consultation
            </div>
            <Link to="/contact" className="btn btn-ghost">
              Get a precise estimate <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .calc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

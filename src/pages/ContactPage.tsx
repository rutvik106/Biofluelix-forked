import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, WhatsApp } from "../components/icons";

function ContactHero() {
  return (
    <header className="hero">
      <div className="hero-bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="shell">
        <div className="hero-eyebrow-row reveal">
          <div className="eyebrow">Contact · Let's talk</div>
          <div className="eyebrow no-bar mono" style={{ color: "var(--ink-soft)" }}>
            Mon – Sat · 9:00 – 18:30 IST
          </div>
        </div>
        <h1
          className="display-xxl hero-headline reveal"
          style={{ transitionDelay: "0.15s", maxWidth: "16ch" }}
        >
          Let's power your <span className="accent-mark italic">transition</span> to green energy.
        </h1>
        <div className="hero-meta-row reveal" style={{ transitionDelay: "0.3s" }}>
          <p className="lead">
            Whether you're ready to switch to biomass or just exploring your options, our energy
            consultants are here to help. Reach out through any of the channels below.
          </p>
          <div className="hero-cta-row">
            <a href="mailto:connect@biofuelix.com" className="btn btn-ghost">
              connect@biofuelix.com
            </a>
            <a href="tel:+919898281520" className="btn btn-primary">
              +91 9898281520 <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ContactBlock({
  label,
  children,
  last,
}: {
  label: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <div
      style={{
        paddingBottom: last ? 0 : 24,
        marginBottom: last ? 0 : 24,
        borderBottom: last ? "none" : "1px solid rgba(245,240,230,0.12)",
      }}
    >
      <div
        className="mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "rgba(245,240,230,0.5)",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

function ContactBody() {
  return (
    <section className="section">
      <div className="shell">
        <div
          className="reveal contact-location-grid"
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(360px, 1.1fr)",
            background: "var(--forest-deep)",
            color: "var(--cream)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "clamp(32px, 4vw, 56px)" }}>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "var(--accent-bright)",
                marginBottom: 24,
              }}
            >
              DIRECT CHANNELS
            </div>

            <ContactBlock label="Email">
              <a href="mailto:biofuelixsolutions@gmail.com">biofuelixsolutions@gmail.com</a>
              <br />
              <a href="mailto:connect@biofuelix.com">connect@biofuelix.com</a>
            </ContactBlock>

            <ContactBlock label="Phone">
              <a href="tel:+919898281520">+91 9898281520</a>
            </ContactBlock>

            <ContactBlock label="WhatsApp Business">
              <a
                href="https://wa.me/919898281520"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <WhatsApp size={18} color="#25D366" />
                Open chat <ArrowUpRight size={12} />
              </a>
              <div style={{ fontSize: 13, color: "rgba(245,240,230,0.55)", marginTop: 4 }}>
                For quick quote requests
              </div>
            </ContactBlock>

            <ContactBlock label="Office hours">
              Mon – Sat
              <br />
              9:00 AM – 6:30 PM IST
            </ContactBlock>

            <ContactBlock label="Registered address" last>
              Biofuelix Solutions
              <br />
              218 Prodesk, Aamrakunj Business Centre, near KB Royal Phoenix, Tragad,
              <br />
              Chandkheda, Ahmedabad, Gujarat 382424
            </ContactBlock>
          </div>

          <div style={{ minHeight: 540, position: "relative", background: "var(--bone)" }}>
            <iframe
              title="Biofuelix Solutions office at Aamrakunj Business Centre"
              src="https://www.google.com/maps?q=Aamrakunj%20Business%20Centre%2C%20Chandkheda%2C%20Ahmedabad%2C%20Gujarat%20382424&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: "100%", height: "100%", minHeight: 540, border: 0 }}
              allowFullScreen
            />
            <a
              href="https://share.google/StdQon8YDe9EIWFhG"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ position: "absolute", left: 24, bottom: 24 }}
            >
              Get directions <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <style>{`@media (max-width: 820px) {
          .contact-location-grid { grid-template-columns: 1fr !important; }
          .contact-location-grid > div:last-child,
          .contact-location-grid iframe { min-height: 380px !important; }
        }`}</style>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
    </>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NAV_LINKS = [
  { label: "Home", to: "/", id: "home" },
  { label: "About", to: "/about", id: "about" },
  { label: "Products", to: "/products", id: "products" },
  { label: "Why Biofuelix", to: "/why", id: "why" },
  { label: "Contact", to: "/contact", id: "contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the menu is open: lock background scroll and allow Escape to close.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
        <Link className="nav-brand" to="/" onClick={() => setOpen(false)}>
          <img src="/assets/biofuelix-logo.jpeg" alt="Biofuelix Solutions" />
          <div>
            <div className="b-name">Biofuelix</div>
            <small>Solutions</small>
          </div>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <Link to={l.to} className={pathname === l.to ? "active" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Full-screen mobile menu. Kept as a sibling of <nav> (not a child) so its
          position:fixed resolves against the viewport — the nav's backdrop-filter
          would otherwise make it a containing block and shrink the overlay. */}
      <div id="nav-mobile" className={`nav-mobile ${open ? "open" : ""}`}>
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <Link
                to={l.to}
                className={pathname === l.to ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

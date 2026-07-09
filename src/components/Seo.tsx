import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://biofuelix.com";
const SITE_NAME = "Biofuelix Solutions";
const DEFAULT_IMAGE = `${SITE_URL}/assets/biofuelix-logo.jpeg`;

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

const SEO_BY_PATH: Record<string, SeoConfig> = {
  "/": {
    title: "Biofuelix Solutions — The bridge between fields & fuel",
    description:
      "Biofuelix Solutions supplies industrial-grade biomass briquettes and pellets with vetted sourcing, verified calorific value, and ESG-ready logistics.",
    path: "/",
  },
  "/about": {
    title: "About Biofuelix Solutions — Biomass Fuel Supply Partner",
    description:
      "Meet Biofuelix Solutions, an Ahmedabad-based biomass fuel trading house helping industries shift from fossil fuels to reliable briquettes and pellets.",
    path: "/about",
  },
  "/products": {
    title: "Biomass Briquettes & Pellets — Biofuelix Products",
    description:
      "Compare Biofuelix biomass briquettes and pellets for industrial boilers, including calorific value, moisture, ash content, feedstocks, and use cases.",
    path: "/products",
    image: `${SITE_URL}/assets/briquettes.jpg`,
  },
  "/why": {
    title: "Why Switch to Biomass Fuel — Biofuelix Solutions",
    description:
      "See how biomass briquettes and pellets help industries lower emissions, improve compliance, manage fuel costs, and strengthen ESG reporting.",
    path: "/why",
    image: `${SITE_URL}/assets/why-hero-biomass.png`,
  },
  "/contact": {
    title: "Contact Biofuelix Solutions — Biomass Fuel Quotes",
    description:
      "Contact Biofuelix Solutions in Ahmedabad for biomass briquette and pellet supply, product samples, quote requests, and industrial fuel guidance.",
    path: "/contact",
  },
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attr, value);
}

function upsertMeta(selector: string, createAttrs: Record<string, string>, content: string) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const config =
      SEO_BY_PATH[pathname] ??
      ({
        title: "Page Not Found — Biofuelix Solutions",
        description: "The requested Biofuelix Solutions page could not be found.",
        path: pathname,
        noindex: true,
      } satisfies SeoConfig);

    const canonical = `${SITE_URL}${config.path === "/" ? "/" : config.path}`;
    const robots = config.noindex ? "noindex, follow" : "index, follow";
    const image = config.image ?? DEFAULT_IMAGE;

    document.title = config.title;
    setMeta('meta[name="description"]', "content", config.description);
    setMeta('meta[name="robots"]', "content", robots);
    setMeta('meta[name="googlebot"]', "content", robots);
    setMeta('link[rel="canonical"]', "href", canonical);

    upsertMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, SITE_NAME);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, config.title);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, config.description);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonical);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, image);
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, config.title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, config.description);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);
  }, [pathname]);

  return null;
}

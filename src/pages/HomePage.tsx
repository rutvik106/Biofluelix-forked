import { Hero } from "../sections/Hero";
import { MarqueeBand } from "../sections/MarqueeBand";
import { Pillars } from "../sections/Pillars";
import { ProductsPreview } from "../sections/ProductsPreview";
import { WhyNow } from "../sections/WhyNow";
import { Co2Calculator } from "../sections/Co2Calculator";
import { FounderNote } from "../sections/FounderNote";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Pillars />
      <WhyNow />
      <ProductsPreview />
      <Co2Calculator />
      <FounderNote />
    </>
  );
}

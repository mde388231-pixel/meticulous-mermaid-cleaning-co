import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, About, Services, WhyUs, Process, BeforeAfter, Gallery, Reels, Testimonials, ServiceMap, Contact, Footer } from "@/components/site/Sections";

const title = "Meticulous Mermaids Cleaning | The Best Clean on the Coast";
const description = "Licensed & insured luxury residential, commercial, Airbnb and deep cleaning across Brevard County, FL. Call 321-258-9631.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <BeforeAfter />
      <Gallery />
      <Reels />
      <Testimonials />
      <ServiceMap />
      <Contact />
      <Footer />
    </main>
  );
}

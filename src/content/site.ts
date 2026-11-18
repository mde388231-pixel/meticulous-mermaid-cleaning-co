// Edit all business details, copy and images here.
import hero from "@/assets/hero.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bath from "@/assets/bath.jpg";
import bedroom from "@/assets/bedroom.jpg";
import cleaner from "@/assets/cleaner.jpg";
import office from "@/assets/office.jpg";
import before from "@/assets/before.jpg";
import detail from "@/assets/detail.jpg";

export const business = {
  name: "Meticulous Mermaids Cleaning LLC",
  shortName: "Meticulous Mermaids",
  phone: "321-258-9631",
  phoneHref: "tel:+13212589631",
  serviceArea: "Brevard County",
  status: "Licensed & Insured",
  tagline: "The Best Clean on the Coast!",
  message: "A Cleaner Home, A Happier You",
};

export const images = { hero, kitchen, bath, bedroom, cleaner, office, before, detail };

export const services = [
  { title: "Residential Cleaning", text: "Thoughtful, top-to-bottom care for the home you love to come back to.", image: bedroom },
  { title: "Commercial Cleaning", text: "Polished offices and storefronts that make every first impression count.", image: office },
  { title: "Airbnb / STR", text: "Guest-ready turnovers between stays, staged with hospitality in mind.", image: detail },
  { title: "Move-In / Move-Out", text: "A fresh, spotless start — whether you're arriving or handing over the keys.", image: kitchen },
  { title: "Deep Cleans", text: "Detailed attention to the corners, fixtures and surfaces everyday cleaning misses.", image: bath },
  { title: "Recurring Services", text: "Weekly, bi-weekly or monthly visits that keep your space consistently serene.", image: hero },
];

export const reasons = [
  { title: "Licensed & Insured", text: "Peace of mind with every visit to your home or business." },
  { title: "Meticulous by Name", text: "Detail is our signature — not an afterthought." },
  { title: "Local to the Coast", text: "Proudly serving homes and businesses across Brevard County." },
  { title: "Tailored to You", text: "Every clean is shaped around your space and your priorities." },
];

export const process = [
  { title: "Reach Out", text: "Call us to share your space, needs and preferred schedule." },
  { title: "Tailored Plan", text: "We shape a cleaning plan around your home or business." },
  { title: "The Meticulous Clean", text: "Our team arrives and treats every detail with care." },
  { title: "Enjoy & Unwind", text: "Step into a fresh, calm space — a cleaner home, a happier you." },
];

export const gallery = [
  { src: hero, alt: "Coastal living room after cleaning" },
  { src: kitchen, alt: "Gleaming marble kitchen" },
  { src: bath, alt: "Spotless spa bathroom" },
  { src: bedroom, alt: "Freshly made coastal bedroom" },
  { src: detail, alt: "Folded towels and coastal details" },
  { src: office, alt: "Polished office lobby" },
];

// Replace with genuine reviews. Placeholders only — no real customers shown.
export const testimonials = Array.from({ length: 9 }, (_, i) => ({
  name: `Client Name ${i + 1}`,
  location: "Brevard County, FL",
  body: "Your genuine client review will appear here. Edit this placeholder in the site content file.",
  img: "",
}));

// Replace `src` with your video file/URL to fill each reel.
export const reels: { title: string; src?: string }[] = [
  { title: "Behind the Sparkle" },
  { title: "Before & After" },
  { title: "Coastal Details" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Service Area", href: "#area" },
  { label: "Contact", href: "#contact" },
];

export { before as beforeImage, kitchen as afterImage, cleaner as aboutImage };

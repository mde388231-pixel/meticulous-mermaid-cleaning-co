import { Quote } from "lucide-react";

export type Testimonial = { name: string; location: string; body: string; img?: string };

export default function Testimonials3D({ items }: { items: Testimonial[] }) {
  const reviews = items.filter(({ name, body }) => {
    const cleanName = name.trim().toLowerCase();
    const cleanBody = body.trim().toLowerCase();
    return cleanName.length > 0 && cleanBody.length > 0 && !cleanName.startsWith("client name") && !cleanBody.includes("your genuine client review");
  });

  if (reviews.length === 0) {
    return (
      <div className="mx-auto flex min-h-64 max-w-3xl flex-col items-center justify-center border-y border-pearl/20 px-6 py-12 text-center text-pearl">
        <Quote className="h-8 w-8 text-champagne" aria-hidden="true" />
        <p className="mt-5 max-w-lg font-display text-2xl leading-relaxed sm:text-3xl">
          Thoughtful care, in every detail.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map(({ name, location, body }, index) => (
        <figure key={`${name}-${index}`} className="flex h-full min-h-56 flex-col border border-pearl/20 bg-pearl/5 p-6 text-pearl sm:p-8">
          <Quote className="mb-5 h-5 w-5 shrink-0 text-champagne" aria-hidden="true" />
          <blockquote className="flex-1 font-display text-xl leading-relaxed">{body}</blockquote>
          <figcaption className="mt-7 border-t border-pearl/15 pt-4">
            <p className="font-medium">{name}</p>
            {location.trim() && <p className="mt-1 text-sm text-pearl/60">{location}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

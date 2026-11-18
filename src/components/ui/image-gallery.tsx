import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string };

export default function ImageGallery({ images, className }: { images: GalleryImage[]; className?: string }) {
  return (
    <div className={cn("flex h-[28rem] w-full flex-col gap-3 md:h-[32rem] md:flex-row", className)}>
      {images.map((img, i) => (
        <div
          key={i}
          className="group relative flex-1 cursor-pointer overflow-hidden rounded-[2rem] border border-champagne/30 shadow-soft transition-[flex] duration-700 ease-out hover:flex-[4]"
        >
          <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <p className="absolute bottom-5 left-6 translate-y-3 font-display text-xl italic text-pearl opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {img.alt}
          </p>
        </div>
      ))}
    </div>
  );
}

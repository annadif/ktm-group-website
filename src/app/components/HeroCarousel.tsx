import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface CarouselSlide {
  image: string;
  title: string;
}

const slides: CarouselSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1767420899569-9e7497cee934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWluZXJhbCUyMHJvY2tzJTIwY2xvc2V8ZW58MXx8fHwxNzY4NDcwNjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Or - Gold"
  },
  {
    image: "https://images.unsplash.com/photo-1524391697575-8ea102803604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF2ZWwlMjBhZ2dyZWdhdGUlMjBtaW5pbmd8ZW58MXx8fHwxNzY4NDcwNjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Gravier - Gravel"
  },
  {
    image: "https://images.unsplash.com/photo-1760651691848-e401abe6191b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lcmFsJTIwb3JlJTIwZXh0cmFjdGlvbnxlbnwxfHx8fDE3Njg0NzA2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Minerai - Mineral Ore"
  },
  {
    image: "https://images.unsplash.com/photo-1718752773283-de1f92513671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaW91cyUyMG1ldGFscyUyMG1pbmluZ3xlbnwxfHx8fDE3Njg0NzA2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Métaux Précieux"
  },
  {
    image: "https://images.unsplash.com/photo-1746508765078-1ecdee3b0dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjByZXNvdXJjZXMlMjBzdG9uZXN8ZW58MXx8fHwxNzY4NDcwNjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Pierres Minières"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-amber-500 w-10 sm:w-12 md:w-16"
                : "bg-white/30 hover:bg-white/50 w-8 sm:w-10 md:w-12"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Current Resource Label */}
      <div className="absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 px-4 max-w-full">
        <div className="bg-black/40 backdrop-blur-md rounded-full px-4 sm:px-6 py-1.5 sm:py-2 border border-amber-500/30">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap">
            {slides[currentSlide].title}
          </span>
        </div>
      </div>
    </div>
  );
}

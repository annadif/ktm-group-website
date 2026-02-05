import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import explorationImage from "@/assets/img/exploration.jpg";
import exploitationImage from "@/assets/img/exploitation.webp";
import traitementImage from "@/assets/img/traitement.jpg";

interface CarouselSlide {
  image: string;
  title: string;
}

const slides: CarouselSlide[] = [
  {
    image: explorationImage,
    title: "Exploration Minière",
  },
  {
    image: exploitationImage,
    title: "Exploitation Minière",
  },
  {
    image: traitementImage,
    title: "Traitement Minéral",
  },
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
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="relative w-full max-w-none h-[520px] px-0 overflow-hidden md:mx-auto md:max-w-[860px]">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35"></div>
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
    </div>
  );
}

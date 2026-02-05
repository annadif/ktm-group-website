import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Truck,
  Layers,
  Globe,
  Wrench,
  Database,
  HardHat,
  Play,
  ChevronRight,
  Award,
  Shield,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import HeroCarousel from "@/app/components/HeroCarousel";
import logoImage from "@/assets/1b6de91575602d267fe6362ec65edefd64586b44.png";
import aboutImage from "@/assets/23ef2151733bc2fd69d57a28823d76425a42cc68.png";
import explorationImage from "@/assets/img/exploration.jpg";
import exploitationImage from "@/assets/img/exploitation.webp";
import traitementImage from "@/assets/img/traitement.jpg";
import commerceImage from "@/assets/img/commerce.webp";
import prestationImage from "@/assets/img/prestation.webp";
import transportImage from "@/assets/img/transport.jpg";
import cielImage from "@/assets/img/ciel.jpeg";
import minerauxIndustrielsImage from "@/assets/img/mineraux industriels.jpg";  

const ParticleBackground = ({
  color = "#FFAB00",
  count = 40,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            backgroundColor: color,
            width: Math.random() * 10 + 2,
            height: Math.random() * 10 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [Math.random() * 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const companyName = "KTM GROUP";
  const primaryColor = "#4B5563";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const secondaryColor = "#374151";
  const accentColor = "#3B82F6";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesEnabled = true;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const { scrollYProgress } = useScroll();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 1.15],
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0],
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const scrollPosition = window.scrollY + 100;

      Object.entries(sectionsRef.current).forEach(
        ([section, ref]) => {
          if (
            ref &&
            ref.offsetTop <= scrollPosition &&
            ref.offsetTop + ref.offsetHeight > scrollPosition
          ) {
            setActiveSection(section);
          }
        },
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      id: 1,
      title: "Exploration Minière",
      description:
        "Identification et évaluation des gisements minéraux avec des technologies de pointe et une expertise géologique approfondie.",
      icon: <Layers size={32} />,
      image: explorationImage,
      color: "#1F2937",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      id: 2,
      title: "Exploitation Minière",
      description:
        "Extraction efficace et durable des ressources minérales avec des équipements de dernière génération.",
      icon: <HardHat size={32} />,
      image: exploitationImage,
      color: "#1F2937",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      id: 3,
      title: "Traitement Minéral",
      description:
        "Transformation et valorisation des minerais selon les normes internationales pour obtenir des produits de haute qualité.",
      icon: <Database size={32} />,
      image: traitementImage,
      color: "#1F2937",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      id: 4,
      title: "Commerce Import-Export",
      description:
        "Distribution et commercialisation des produits miniers sur les marchés locaux et internationaux avec une logistique optimisée.",
      icon: <Globe size={32} />,
      image: commerceImage,
      color: "#1F2937",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      id: 5,
      title: "Prestation de Services",
      description:
        "Services spécialisés pour l'industrie minière, incluant consultation, expertise technique et études de faisabilité.",
      icon: <Wrench size={32} />,
      image: prestationImage,
      color: "#1F2937",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      id: 6,
      title: "Transport & Logistique",
      description:
        "Solutions logistiques intégrées pour le transport sécurisé des matériaux et équipements miniers.",
      icon: <Truck size={32} />,
      image: transportImage,
      color: "#1F2937",
      gradient: "from-gray-800 to-gray-900",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Exploitation aurifère au sud du Tchad",
      description:
        "Projet d'extraction d'or utilisant des techniques de pointe respectueuses de l'environnement et des communautés locales.",
      image:
        "https://images.unsplash.com/photo-1647485938389-91df46750f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwcGl0JTIwZ29sZCUyMG1pbmV8ZW58MXx8fHwxNzY4Mzk4NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Extraction Or",
      year: 2022,
      stats: {
        investment: "45M",
        jobs: "320",
        production: "2.5T",
      },
    },
    {
      id: 2,
      title: "Mine à ciel ouvert",
      description:
        "Exploitation de gisements avec des équipements à la fine pointe de la technologie et une gestion durable.",
      image: cielImage,
      category: "Open Pit",
      year: 2021,
      stats: {
        investment: "68M",
        jobs: "450",
        production: "4.2T",
      },
    },
    {
      id: 3,
      title: "Traitement de minéraux industriels",
      description:
        "Installation moderne pour le traitement et la valorisation de minéraux industriels selon les standards internationaux.",
      image: minerauxIndustrielsImage,
      category: "Traitement",
      year: 2023,
      stats: {
        investment: "52M",
        jobs: "280",
        production: "3.8T",
      },
    },
  ];

  const valueProps = [
    {
      id: 1,
      title: "Excellence Opérationnelle",
      description:
        "Une équipe d'experts qualifiés et des processus optimisés pour garantir les plus hauts standards de qualité.",
      icon: <Award size={32} />,
      color: primaryColor,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Innovation Technologique",
      description:
        "Utilisation de technologies de pointe et d'équipements modernes pour une exploitation efficace et durable.",
      icon: <Zap size={32} />,
      color: accentColor,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      title: "Développement Durable",
      description:
        "Engagement pour une exploitation minière respectueuse de l'environnement et des communautés locales.",
      icon: <Shield size={32} />,
      color: "#10B981",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      title: "Croissance Continue",
      description:
        "Expansion stratégique et développement constant de nos capacités et de notre expertise.",
      icon: <TrendingUp size={32} />,
      color: "#8B5CF6",
      gradient: "from-purple-500 to-violet-600",
    },
  ];

  const stats = [
    {
      label: "Années d'expérience",
      value: 15,
      prefix: "",
      suffix: "+",
      color: primaryColor,
    },
    {
      label: "Projets réalisés",
      value: 80,
      prefix: "",
      suffix: "+",
      color: accentColor,
    },
    {
      label: "Experts qualifiés",
      value: 250,
      prefix: "",
      suffix: "+",
      color: "#10B981",
    },
    {
      label: "Pays d'opération",
      value: 6,
      prefix: "",
      suffix: "",
      color: "#EC4899",
    },
  ];

  const timeline = [
    {
      year: "2008",
      title: "Fondation",
      description:
        "Création de KTM GROUP avec une vision d'excellence dans le secteur minier.",
      icon: <Target size={20} />,
    },
    {
      year: "2012",
      title: "Expansion Régionale",
      description:
        "Développement des activités au-delà des frontières du Tchad.",
      icon: <Globe size={20} />,
    },
    {
      year: "2016",
      title: "Modernisation",
      description:
        "Introduction de technologies de pointe dans nos processus d'exploitation.",
      icon: <Zap size={20} />,
    },
    {
      year: "2020",
      title: "Certification ISO",
      description:
        "Obtention des certifications internationales pour nos opérations.",
      icon: <Award size={20} />,
    },
    {
      year: "2023",
      title: "Leadership Africain",
      description:
        "Reconnaissance comme leader du secteur minier en Afrique centrale.",
      icon: <TrendingUp size={20} />,
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-800 overflow-hidden text-center md:text-left">
      {/* Fixed Elements */}
      <div className="fixed right-6 bottom-6 z-50 hidden md:flex flex-col gap-4">
        <motion.button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: scrollY > 300 ? 1 : 0,
            y: scrollY > 300 ? 0 : 20,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </motion.button>
      </div>

      {/* Header - Modern Glass Effect */}
      <motion.header
        className={`bg-white/95 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 border-b ${scrollY > 100 ? "shadow-lg shadow-gray-200/50 py-3 border-gray-200" : "py-4 border-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mx-auto w-full max-w-[860px] px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <motion.div
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection("home")}
              >
                <img
                  src={logoImage}
                  alt="KTM GROUP Logo"
                  className="h-16 sm:h-20 md:h-24 w-auto"
                />
              </motion.div>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-2 overflow-x-auto">
              {[
                "home",
                "about",
                "services",
                "contact",
              ].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-5 py-2.5 font-semibold rounded-xl transition-all duration-300 capitalize relative group ${
                    activeSection === item
                      ? `text-white bg-gray-900`
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item === "home"
                    ? "Accueil"
                    : item === "about"
                      ? "À Propos"
                      : item === "services"
                        ? "Services"
                        : "Contact"}
                </motion.button>
              ))}
              <motion.button
                className="px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
              >
                Devis Gratuit
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="hidden text-gray-700 focus:outline-none w-10 h-10 items-center justify-center rounded-xl hover:bg-gray-100"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {false && isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden border-t border-gray-200"
            >
              <div className="mx-auto w-full max-w-[860px] px-0 py-4">
                <div className="flex flex-col space-y-2">
                  {[
                    "home",
                    "about",
                    "services",
                    "contact",
                  ].map((item) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`py-3 px-5 font-semibold rounded-xl transition-all duration-200 capitalize text-left ${
                        activeSection === item
                          ? `text-white bg-gray-900`
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      whileTap={{ scale: 0.97 }}
                    >
                      {item === "home"
                        ? "Accueil"
                        : item === "about"
                          ? "À Propos"
                          : item === "services"
                            ? "Services"
                            : "Contact"}
                    </motion.button>
                  ))}
                  <motion.button
                    className="mt-2 py-3 px-5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 text-center"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollToSection("contact")}
                  >
                    Devis Gratuit
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
      {/* Hero Section - Ultra Modern */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current.home = el;
        }}
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden h-[520px] flex items-center"
      >
        <HeroCarousel />
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute -top-12 right-0 text-white p-2 hover:text-blue-400 transition-colors"
                onClick={() => setVideoModalOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <X size={32} />
              </motion.button>
              <div className="bg-gradient-to-br from-gray-900 to-black w-full h-full rounded-3xl flex items-center justify-center border border-blue-500/20">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/50">
                    <Play
                      size={32}
                      className="text-white ml-1"
                      fill="currentColor"
                    />
                  </div>
                  <p className="text-white text-xl font-semibold">
                    Vidéo de Présentation
                  </p>
                  <p className="text-gray-400 mt-2">
                    Découvrez KTM GROUP en images
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section - Modern Layout */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current.about = el;
        }}
        className="py-16 bg-white relative overflow-hidden"
      >
        <div className="mx-auto w-full max-w-[860px] px-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <img
                    src={aboutImage}
                    alt="KTM Mining Operations"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </motion.div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-700 font-bold text-sm uppercase tracking-wider">
                  À Propos de Nous
                </span>
              </div>

              <h2 className="text-3xl font-black mb-4 text-gray-900 leading-tight">
                Leader du Secteur Minier au Tchad
              </h2>

              <p className="text-gray-700 mb-6 text-base leading-relaxed">
                <strong className="text-gray-900">
                  {companyName}
                </strong>{" "}
                est spécialisée dans l'exploration, l'exploitation et le traitement des ressources minérales.
              </p>

              <motion.button
                className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("services")}
              >
                En Savoir Plus
                <ChevronRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section
        ref={(el) => {
          if (el) sectionsRef.current.services = el;
        }}
        className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTE4IDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0zNiAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="mx-auto w-full max-w-[860px] px-0 relative z-10">
          <div className="text-center mb-8">
            <motion.h2
              className="text-3xl font-black text-gray-900 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Nos Services
            </motion.h2>

            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Solutions complètes pour l'industrie minière
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 h-full">
                  <div className="h-40 overflow-hidden relative">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20`}
                      >
                        <div className="text-white">
                          {service.icon}
                        </div>
                        <h3 className="text-white font-bold text-lg">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => { if (el) sectionsRef.current.contact = el; }}
        className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="mx-auto w-full max-w-[860px] px-0 relative z-10">
          <div className="text-center mb-8">
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contactez-nous
            </motion.h2>

            <motion.p
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Notre équipe est prête à vous accompagner
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
            <motion.div
              className="w-full md:w-1/3 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Téléphone</h4>
                  <p className="text-gray-600 text-sm">(+235) 62 41 59 59</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                  <p className="text-gray-600 text-sm">contact@ktmgroup.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Adresse</h4>
                  <p className="text-gray-600 text-sm">N'Djamena, Tchad</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-800 font-medium mb-1 text-sm">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-800 font-medium mb-1 text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-800 font-medium mb-1 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Envoyer
                    <ArrowRight size={20} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Modern Design */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 pb-8 relative overflow-hidden">
        {particlesEnabled && (
          <ParticleBackground color="#FFFFFF" count={15} />
        )}

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnptLTE4IDBjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAyem0zNiAwYzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="mx-auto w-full max-w-[860px] px-0 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
            <div>
              <div className="mb-6 sm:mb-8">
                <img
                  src={logoImage}
                  alt="KTM GROUP Logo"
                  className="h-20 sm:h-24 w-auto mb-3 sm:mb-4"
                />
                <p className="text-gray-400 leading-relaxed">
                  Leader dans l'exploration, l'exploitation et
                  le traitement des ressources minières au
                  Tchad.
                </p>
              </div>

              <div className="flex space-x-3">
                {[
                  "facebook",
                  "twitter",
                  "linkedin",
                  "instagram",
                ].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 flex items-center justify-center text-white transition-all duration-300 border border-white/10"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {platform === "facebook" && (
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      )}
                      {platform === "twitter" && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      )}
                      {platform === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                      {platform === "instagram" && (
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      )}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h3>

              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul className="space-y-3">
                {services.slice(0, 6).map((service) => (
                  <motion.li
                    key={service.id}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight
                        size={16}
                        className="text-blue-500 group-hover:translate-x-1 transition-transform"
                      />
                      {service.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
                Liens Rapides
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h3>

              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul className="space-y-3">
                {[
                  { label: "À Propos", link: "about" },
                  { label: "Projets", link: "projects" },
                  { label: "Carrières", link: "#" },
                  { label: "Actualités", link: "#" },
                  { label: "Contact", link: "contact" },
                  { label: "Certifications", link: "#" },
                ].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                      onClick={(e) => {
                        e.preventDefault();
                        if (sectionsRef.current[item.link]) {
                          scrollToSection(item.link);
                        }
                      }}
                    >
                      <ChevronRight
                        size={16}
                        className="text-blue-500 group-hover:translate-x-1 transition-transform"
                      />
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
                Newsletter
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h3>

              <p className="text-gray-400 mb-6">
                Restez informé des dernières actualités du
                secteur minier.
              </p>

              <form className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-500 transition-all duration-300"
                  />
                  <motion.button
                    type="submit"
                    className="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-r-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex-shrink-0 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>

                <p className="text-gray-500 text-xs">
                  En vous inscrivant, vous acceptez notre
                  politique de confidentialité.
                </p>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} {companyName}.
                Tous droits réservés.
              </p>

              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                >
                  Politique de confidentialité
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                >
                  Conditions d'utilisation
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                >
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
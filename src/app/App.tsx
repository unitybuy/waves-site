import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Code,
  Brain,
  Lightbulb,
  Users,
  Calendar,
  Instagram,
  Youtube,
  Menu,
  X,
  ChevronRight,
  Zap,
  Network,
  CircuitBoard,
  Power,
  Settings,
  Search,
  GraduationCap,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./components/ui/dialog";
import wavesLogo from "../assets/waves25_logo-white.png";
import electricalLogo from "../assets/7.png";
import collegeLogo from "../assets/ceg-white.png";
import wattsTheMovePoster from "../assets/Watt's-the-move.png";
import linkSpherePoster from "../assets/Link-sphere .png";
import bidTheGridPoster from "../assets/BID-THE-GRID.png";
import buildAndBreakPoster from "../assets/B-and-B.png";
import seenaThaanaPoster from "../assets/SeenaThana.png";
import backToSchoolPoster from "../assets/BackToSchool.png";
import indruNetruNaalaiPoster from "../assets/Indru-Netru-Naalai.jpeg";
import kashmirPoster from "../assets/Kashmir.png";
import solarPanelPoster from "../assets/solar.png";
import arWorkshopPoster from "../assets/Augment-Reality-Poster.png";
import aimlPoster from "../assets/AIML.png";
import chiefGuestImage from "../assets/Ms-V-C-Mirunalini.jpeg";
import swelectLogo from "../assets/swelect.png";
import integratedElectricLogo from "../assets/IE.jpeg";
import vetriIASLogo from "../assets/vetrii.jpeg";
import tmiSystemsLogo from "../assets/TMI-system.png";
import jskLabLogo from "../assets/jsk.jpeg";
import intelisenzLogo from "../assets/intellisenz.jpeg";
import altrazenLogo from "../assets/altrazen.jpeg";
import rajamsLogo from "../assets/rajams.jpeg";
import sparkAndSyncPoster from "../assets/spark.png";
import projectDisplayPoster from "../assets/PROJECT-DISPLAY.png";
import paperPresentationPoster from "../assets/pp.png";
import majestronicsLogo from "../assets/Majestronicz.png";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState("");
  const [posterDialogOpen, setPosterDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const technicalEvents = [
    {
      title: "WATT'S THE MOVE ?",
      description: "Solve the Puzzle. Power the Strategy.",
      icon: Power,
      poster: wattsTheMovePoster,
    },
    {
      title: "Link Sphere",
      description: "See the Clues. Find the Connection.",
      icon: Network,
      poster: linkSpherePoster,
    },
    {
      title: "SPARK & SYNC",
      description: "Think Fast. Connect Smarter.",
      icon: Zap,
      poster: sparkAndSyncPoster,
    },
    {
      title: "BID THE GRID",
      description: "Earn Smart. Bid Smarter.",
      icon: CircuitBoard,
      poster: bidTheGridPoster,
    },
    {
      title: "BUILD & BREAK",
      description: "Find the Fault. Rebuild the Power.",
      icon: Settings,
      poster: buildAndBreakPoster,
    },
  ];

  const nonTechnicalEvents = [
    {
      title: "SEENA THAANA",
      description: "CEGians in the detective mode",
      icon: Search,
      poster: seenaThaanaPoster,
    },
    {
      title: "Back to School",
      description: "Pallikudathula paadam padichathill...",
      icon: GraduationCap,
      poster: backToSchoolPoster,
    },
    {
      title: "Indru Netru Nalai",
      description: "Three eras. One destiny.",
      icon: Clock,
      poster: indruNetruNaalaiPoster,
    },
    {
      title: "kashmir to kanyakumari",
      description: "Travel across India without leaving the campus",
      icon: MapPin,
      poster: kashmirPoster,
    },
  ];

  const othersEvents = [
    {
      title: "Project Display",
      description: "Showcase your engineering projects and prototypes to visitors and judges",
      icon: Lightbulb,
      poster: projectDisplayPoster,
    },
    {
      title: "Paper Presentation",
      description: "Innovate with power",
      icon: Brain,
      poster: paperPresentationPoster,
    },
  ];

  const workshops = [
    {
      title: "Solar Panel - Building with PVsyst Software",
      date: "March 18",
      time: "9:00 AM",
      fee: "₹200",
      contact: "JANANI : +91 80720 19180",
      poster: solarPanelPoster,
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc9M5Qk96M7CiIkxnvQo2npwuOLNJN9pUVZ5RUyV5bWzbk5kA/viewform",
    },
    {
      title: "Build Your First Augmented Reality App with Unity Engine",
      date: "20 March 2026",
      time: "9:00 AM",
      fee: "Individual - ₹200, Team of 2 - ₹300",
      contact: "SANTOSH - +91 7418077614",
      instructor: "Lokeshwaran E, Founder, TAMIZH",
      location: "X Hall, EEE Department",
      poster: arWorkshopPoster,
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd0I2bMFU3lDjwfolWILMXzvEXzyMoLysM2Re6onUekU0XhTQ/viewform",
    },
    {
      title: "AIML and Deep Learning",
      date: "March 19",
      time: "9:00 AM",
      fee: "₹200",
      contact: "VIJAY: 9600073056",
      poster: aimlPoster,
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5Gna_G1alI1pmlV11qCZ2_WilXFRci5kBXEQj_7SaEeWo8w/viewform",
    },
  ];

  const sponsors = [
    { name: "Swelect", category: "Title Sponsor", logo: swelectLogo },
    { name: "Integrated Electric", category: "Event Sponsor", logo: integratedElectricLogo },
    { name: "Vetri IAS Academy", category: "Event Sponsor", logo: vetriIASLogo },
    { name: "TMI Systems", category: "Mini Sponsor", logo: tmiSystemsLogo },
    { name: "JSK Lab Electronics", category: "Mini Sponsor", logo: jskLabLogo },
    { name: "Majestronicz", category: "Mini Sponsor", logo: majestronicsLogo },
    { name: "Intelisenz", category: "Co Sponsor", logo: intelisenzLogo },
    { name: "Altrazen Engineering", category: "Printing Sponsor", logo: altrazenLogo },
    { name: "Rajams Digital Offset Prints", category: "Printables Sponsor", logo: rajamsLogo },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-cyan-500/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
              <img src={wavesLogo} alt="Waves Logo" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Waves'26
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: "home", label: "home" },
                { id: "about", label: "about" },
                { id: "events", label: "events" },
                { id: "workshops", label: "workshops" },
                { id: "speakers", label: "chief guests" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="capitalize hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            >
              {[
                { id: "home", label: "home" },
                { id: "about", label: "about" },
                { id: "events", label: "events" },
                { id: "workshops", label: "workshops" },
                { id: "speakers", label: "chief guests" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="capitalize text-left hover:text-cyan-400 transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.85), rgba(2, 6, 23, 0.85)), url('https://images.unsplash.com/photo-1585051256362-eb56bf4d5ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NzI3OTczOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-500/5"></div>

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              WAVES 2026
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-cyan-300">The Ultimate Technical Symposium</p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-slate-300">
              Join us for two days of innovation, competition, and learning. Experience cutting-edge technology,
              compete in exciting events, and network with industry leaders at the most anticipated tech symposium of
              the year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("events")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8"
              >
                Explore Events
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("workshops")}
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-lg px-8"
              >
                View Workshops
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About WAVES – Energy Drive
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                WAVES is a National Level Technical Symposium organized by the Department of Electrical and Electronics
                Engineering, bringing together students, innovators, and tech enthusiasts from across the country. With
                the theme "Energy Drive", the symposium focuses on the power of ideas, innovation, and technology that
                drive the future of energy and engineering.
              </p>
              <p>
                WAVES provides a platform for young minds to showcase their technical skills, creativity, and
                problem-solving abilities through workshops, competitions, project displays, and technical events. The
                symposium aims to encourage knowledge sharing, practical learning, and collaboration among participants
                from different institutions.
              </p>
              <p>
                With a strong focus on modern technologies, sustainable energy, and engineering excellence, WAVES –
                Energy Drive stands as a celebration of innovation, learning, and the spirit of technical advancement.
              </p>
            </div>
            <div className="flex items-center gap-8 mt-12 justify-center">
              <img
                src={electricalLogo}
                alt="Electrical Department Logo"
                className="h-32 w-32 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
              <img
                src={collegeLogo}
                alt="College Logo"
                className="h-20 w-20 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Events
            </h2>
            <p className="text-lg text-slate-400">Compete, innovate, and showcase your skills</p>
          </motion.div>

          {/* Technical Events */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Technical</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-cyan-400">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400">{event.description}</CardDescription>
                      {event.poster && (
                        <div
                          className="mt-4 cursor-pointer"
                          onClick={() => {
                            setSelectedPoster(event.poster);
                            setPosterDialogOpen(true);
                          }}
                        >
                          <img
                            src={event.poster}
                            alt={event.title}
                            className="w-full h-40 object-cover rounded hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Non-Technical Events */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-purple-400 mb-8 text-center">Non-Technical</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nonTechnicalEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-slate-900 border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-purple-400">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400">{event.description}</CardDescription>
                      {event.poster && (
                        <div
                          className="mt-4 cursor-pointer"
                          onClick={() => {
                            setSelectedPoster(event.poster);
                            setPosterDialogOpen(true);
                          }}
                        >
                          <img
                            src={event.poster}
                            alt={event.title}
                            className="w-full h-40 object-cover rounded hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Others Events */}
          <div>
            <h3 className="text-3xl font-bold text-orange-400 mb-8 text-center">Others</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {othersEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-slate-900 border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-orange-400">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400">{event.description}</CardDescription>
                      {event.poster && (
                        <div
                          className="mt-4 cursor-pointer"
                          onClick={() => {
                            setSelectedPoster(event.poster);
                            setPosterDialogOpen(true);
                          }}
                        >
                          <img
                            src={event.poster}
                            alt={event.title}
                            className="w-full h-40 object-cover rounded hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Workshops
            </h2>
            <p className="text-lg text-slate-400">Learn from industry experts and enhance your skills</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-950 border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full overflow-hidden">
                  {/* Workshop Poster Image */}
                  <div
                    className="w-full h-64 overflow-hidden cursor-pointer"
                    onClick={() => {
                      setSelectedPoster(workshop.poster);
                      setPosterDialogOpen(true);
                    }}
                  >
                    <img
                      src={workshop.poster}
                      alt={workshop.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-purple-400 text-lg">{workshop.title}</CardTitle>
                    {workshop.instructor && (
                      <CardDescription className="text-cyan-400">{workshop.instructor}</CardDescription>
                    )}
                  </CardHeader>

                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span>
                        {workshop.date} | {workshop.time}
                      </span>
                    </div>
                    {workshop.location && (
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <MapPin className="h-4 w-4 text-cyan-400" />
                        <span>{workshop.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Users className="h-4 w-4 text-cyan-400" />
                      <span>{workshop.contact}</span>
                    </div>
                    <div className="pt-2 text-lg font-semibold text-purple-400">Registration: {workshop.fee}</div>
                    <div className="mt-4">
                      <a
                        href={workshop.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                      >
                        Register Now →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Chief Guest
            </h2>
            <p className="text-lg text-slate-400">Honored to have an inspiring leader with us</p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-md"
            >
              <Avatar className="w-64 h-64 mx-auto mb-6 ring-4 ring-cyan-500/30 hover:ring-cyan-500/60 transition-all">
                <AvatarImage src={chiefGuestImage} alt="VC Mirunalini" />
                <AvatarFallback>VM</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">VC Mirunalini</h3>
              <p className="text-purple-400 mb-2">Alumnus from EEE'2006</p>
              <p className="text-slate-300 text-lg">Director - Manufacturing</p>
              <p className="text-slate-400">Swelect Systems</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Sponsors
            </h2>
            <p className="text-lg text-slate-400">Powered by industry leaders</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-950 border border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="w-full h-24 mb-3 flex items-center justify-center">
                  <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="max-h-20 max-w-full object-contain" />
                </div>
                <h4 className="text-sm font-semibold text-cyan-400 text-center">{sponsor.category}</h4>
                <p className="text-xs text-slate-500 text-center mt-1">{sponsor.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Waves 2026 and showcase your skills.</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Don't miss this opportunity to be part of the biggest technical symposium of the year!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("events")}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8"
              >
                Explore Events
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("workshops")}
                className="border-purple-400 text-purple-400 hover:bg-purple-400/10 text-lg px-8"
              >
                View Workshops
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <img src={wavesLogo} alt="Waves Logo" className="h-10 w-10 object-contain" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Waves 2026
                </span>
              </div>
              <p className="text-slate-400 text-sm">The Energy Drive</p>
              <p className="text-slate-500 text-xs max-w-xs mx-auto md:mx-0 mt-1">
                The Ultimate Technical Symposium bringing innovation and technology together.
              </p>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="font-semibold mb-4 text-cyan-400">Follow Us</h3>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.instagram.com/seee_ceg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.youtube.com/@seeeceg5966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
            <p className="mb-2">© 2026 Waves Technical Symposium. All rights reserved.</p>
            <p className="text-slate-600">
              Created by <span className="text-cyan-400">Siddharth</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Poster Dialog */}
      <Dialog open={posterDialogOpen} onOpenChange={setPosterDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-cyan-400">Event Poster</DialogTitle>
            <DialogDescription className="text-slate-400">
              Click outside or press escape to close
            </DialogDescription>
          </DialogHeader>
          <div className="w-full">
            <img src={selectedPoster} alt="Event Poster" className="w-full h-auto object-contain" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
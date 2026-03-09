import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Services", href: "/services" },
  { label: "Appointment", href: "/appointment" },
  { label: "Contact", href: "/contact" },
];

export { navLinks };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const showTransparent = isHome && !scrolled;

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md border-b shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          <Link
            href="/"
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg sm:text-xl">
                T
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif font-bold text-base sm:text-lg leading-tight transition-colors ${
                  showTransparent ? "text-white" : "text-foreground"
                }`}
              >
                Dr. Tani
              </span>
              <span
                className={`text-[10px] sm:text-xs leading-tight transition-colors ${
                  showTransparent ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                Holistic Wellness
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                asChild
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`font-medium ${
                  location === link.href
                    ? showTransparent
                      ? "text-white bg-white/15"
                      : "text-primary bg-accent"
                    : showTransparent
                      ? "text-white/80"
                      : "text-muted-foreground"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <Button
              size="sm"
              className="ml-3"
              asChild
              data-testid="button-nav-appointment"
            >
              <Link href="/appointment">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Schedule Visit
              </Link>
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className={`md:hidden ${showTransparent ? "text-white" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-b"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  asChild
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  className={`w-full justify-start font-medium ${
                    location === link.href
                      ? "text-primary bg-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <Button
                className="w-full mt-2"
                asChild
                data-testid="button-mobile-appointment"
              >
                <Link href="/appointment">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Visit
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer
      className="bg-foreground text-background py-10 sm:py-14"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">
                  T
                </span>
              </div>
              <div>
                <span className="font-serif font-bold text-base">
                  Dr. John Tani
                </span>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Holistic chiropractic and wellness care. Serving the Draper, Utah
              community for over 38 years.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wider uppercase text-background/80">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/60 text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wider uppercase text-background/80">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:1-801-269-8989"
                className="flex items-center gap-2 text-background/60 text-sm transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4" />
                (801) 269-8989
              </a>
              <a
                href="mailto:askDrTani@gmail.com"
                className="flex items-center gap-2 text-background/60 text-sm transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
                askDrTani@gmail.com
              </a>
              <div
                className="flex items-start gap-2 text-background/60 text-sm"
                data-testid="text-footer-address"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>12226 S 1000 E, Ste #1, Draper, UT 84020</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/10" />

        <p className="text-center text-background/40 text-xs sm:text-sm">
          Dr. John Tani, D.C. -- ASKnutrigenomic Wellness Center
        </p>
      </div>
    </footer>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h1>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

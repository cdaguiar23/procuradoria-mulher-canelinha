
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "subtle-glass border-b border-border shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-brand-600"></span>
          <span className="font-serif text-xl font-semibold">
            Procuradoria da Mulher
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="animated-link text-sm font-medium">
            Sobre
          </a>
          <a href="#servicos" className="animated-link text-sm font-medium">
            Serviços
          </a>
          <a href="#equipe" className="animated-link text-sm font-medium">
            Equipe
          </a>
          <a href="#noticias" className="animated-link text-sm font-medium">
            Notícias
          </a>
          <a
            href="#contato"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-brand-700"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="flex md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 md:hidden",
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-lg">
          <a 
            href="#sobre" 
            className="animated-link font-medium"
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            className="animated-link font-medium"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#equipe" 
            className="animated-link font-medium"
            onClick={() => setIsOpen(false)}
          >
            Equipe
          </a>
          <a 
            href="#noticias" 
            className="animated-link font-medium"
            onClick={() => setIsOpen(false)}
          >
            Notícias
          </a>
          <a
            href="#contato"
            className="rounded-full bg-brand-600 px-5 py-2 font-medium text-white transition-all hover:bg-brand-700"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

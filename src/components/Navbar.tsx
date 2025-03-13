import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  // Efeito ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Atualizar o link ativo ao clicar
  const handleSetActive = (section: string) => {
    setActiveLink(section);
    setIsOpen(false); // Fecha o menu no mobile ao clicar
  };

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
          <img
            src="public/logo.jpg"
            alt="logo"
            height={32}
            width={32}
            className="h-8 w-8"
          />
          <span className="font-serif text-xl font-semibold">
            Procuradoria Especial da Mulher | Canelinha - SC
          </span>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {["sobre", "servicos", "equipe", "noticias", "contato"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleSetActive(id)}
              className={`text-sm font-medium transition-all ${
                activeLink === id
                  ? "rounded-full bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
                  : "animated-link"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          className="flex md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navegação Mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 md:hidden",
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-lg">
          {["sobre", "servicos", "equipe", "noticias", "contato"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleSetActive(id)}
              className={`font-medium transition-all ${
                activeLink === id
                  ? "rounded-full bg-brand-600 px-5 py-2 text-white hover:bg-brand-700"
                  : "animated-link"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
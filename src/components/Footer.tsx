
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-brand-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-8 w-8 rounded-full bg-brand-400">
                <img
                src="public/logo.jpg"
                alt="logo"
                height={8}
                width={8}
                className="h-8 w-8"
              /></span>
              <span className="font-serif text-xl font-semibold">
                Procuradoria da Mulher de Canelinha
              </span>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              Somos um órgão permanente da Câmara Municipal de Canelinha, dedicado à defesa dos direitos das mulheres, ao combate à discriminação e à promoção da igualdade de gênero em nosso município.
            </p>
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Câmara Municipal de Canelinha. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-brand-200 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-brand-200 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-brand-200 hover:text-white transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#noticias" className="text-brand-200 hover:text-white transition-colors">
                  Notícias e Eventos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-brand-200 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a href="http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm" target="_blank" className="text-brand-200 hover:text-white transition-colors">
                  Lei Maria da Penha
                </a>
              </li>
              <li>
                <a href="https://www.canelinha.sc.gov.br" target="_blank" className="text-brand-200 hover:text-white transition-colors">
                  Prefeitura de Canelinha
                </a>
              </li>
              <li>
                <a href="https://www.gov.br/mdh/pt-br/navegue-por-temas/politicas-para-mulheres/arquivo/arquivos-diversos/sobre/spm" target="_blank" className="text-brand-200 hover:text-white transition-colors">
                  Secretaria de Políticas para Mulheres
                </a>
              </li>
              <li>
                <a href="https://www.sas.sc.gov.br/" target="_blank" className="text-brand-200 hover:text-white transition-colors">
                  Secretaria da Assistência Social, Mulher e Família de Santa Catarina
                </a>
              </li>
              <li>
                <a href="tel:180" className="text-brand-200 hover:text-white transition-colors">
                  Disque 180 - Central de Atendimento à Mulher
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 h-12 w-12 rounded-full bg-brand-600 text-white shadow-lg transition-all duration-300 flex items-center justify-center ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;

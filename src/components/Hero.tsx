
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background design element */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-brand-100 blur-3xl opacity-60"></div>
        <div className="absolute top-[30%] -left-[5%] h-[30%] w-[30%] rounded-full bg-brand-50 blur-3xl opacity-40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          <div className="flex flex-col items-start">
            <span className="hero-tag animate-fade-in">Câmara Municipal</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
              Procuradoria
              <span className="gradient-text block"> da Mulher</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "400ms" }}>
              Trabalhando para garantir os direitos das mulheres, promover políticas de igualdade e combater todas as formas de violência e discriminação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "600ms" }}>
              <a 
                href="#servicos"
                className="rounded-full bg-brand-600 px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md flex items-center gap-2 group"
              >
                Conheça Nossos Serviços
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#contato"
                className="rounded-full bg-transparent border border-brand-200 hover:border-brand-400 px-6 py-3 font-medium text-foreground shadow-sm transition-all hover:shadow-md"
              >
                Entre em Contato
              </a>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl animate-scale-in" style={{ animationDelay: "800ms" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-brand-800/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Mulheres em posição de liderança"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

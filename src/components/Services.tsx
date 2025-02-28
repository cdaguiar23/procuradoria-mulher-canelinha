
import { useEffect, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Orientação Jurídica",
    description: "Encaminhamento e orientação sobre questões jurídicas para mulheres vítimas de violência ou que necessitem de informações sobre seus direitos.",
    icon: "⚖️",
  },
  {
    id: 2,
    title: "Encaminhamento Psicológico",
    description: "Apoio e encaminhamento para atendimento psicológico às mulheres em situação de vulnerabilidade através da rede municipal.",
    icon: "💭",
  },
  {
    id: 3,
    title: "Proposição Legislativa",
    description: "Elaboração e acompanhamento de projetos de lei que visam garantir direitos e proteção às mulheres no município de Canelinha.",
    icon: "📝",
  },
  {
    id: 4,
    title: "Campanhas Educativas",
    description: "Desenvolvimento de campanhas de conscientização sobre igualdade de gênero e combate à violência contra a mulher na comunidade de Canelinha.",
    icon: "📣",
  },
  {
    id: 5,
    title: "Articulação com Rede de Proteção",
    description: "Integração com órgãos e instituições da rede de proteção à mulher, facilitando o acesso aos serviços públicos necessários.",
    icon: "🔄",
  },
  {
    id: 6,
    title: "Fiscalização de Políticas Públicas",
    description: "Acompanhamento e fiscalização da implementação de políticas públicas destinadas às mulheres no município de Canelinha.",
    icon: "📊",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const staggerItems = entry.target.querySelectorAll(".stagger-item");
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("stagger-visible");
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="servicos" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="hero-tag stagger-item">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 stagger-item">
            Como Podemos Ajudar
          </h2>
          <p className="text-lg text-muted-foreground stagger-item">
            Oferecemos diversos serviços para atender às necessidades das mulheres de Canelinha, sempre com compromisso público, ética e sensibilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="feature-card hover-lift stagger-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <span className="text-2xl" aria-hidden="true">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

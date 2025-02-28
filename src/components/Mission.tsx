
import { Shield, Users, Scale } from "lucide-react";
import { useEffect, useRef } from "react";

const Mission = () => {
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
    <section id="sobre" className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="hero-tag stagger-item">Nossa Missão</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 stagger-item">
            Defendendo os Direitos das Mulheres
          </h2>
          <p className="text-lg text-muted-foreground stagger-item">
            A Procuradoria da Mulher é um órgão que possui como objetivo principal a defesa e a promoção da igualdade de gênero, dos direitos das mulheres, e o combate à violência e à discriminação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card hover-lift stagger-item">
            <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-brand-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Proteção</h3>
            <p className="text-muted-foreground">
              Trabalhamos para proteger mulheres contra todas as formas de violência, garantindo acompanhamento jurídico e psicológico.
            </p>
          </div>

          <div className="feature-card hover-lift stagger-item">
            <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
              <Scale className="h-6 w-6 text-brand-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Igualdade</h3>
            <p className="text-muted-foreground">
              Promovemos ações legislativas que garantam a igualdade de direitos e oportunidades entre homens e mulheres.
            </p>
          </div>

          <div className="feature-card hover-lift stagger-item">
            <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-brand-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Representatividade</h3>
            <p className="text-muted-foreground">
              Incentivamos a participação das mulheres nos espaços políticos e de poder, fortalecendo a democracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

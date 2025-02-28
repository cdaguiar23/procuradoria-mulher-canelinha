
import { useEffect, useRef } from "react";

const team = [
  {
    id: 1,
    name: "Vereadora Joana Almeida",
    role: "Procuradora da Mulher",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    bio: "Vereadora em seu segundo mandato, preside a Procuradoria da Mulher e tem ampla experiência na defesa de causas relacionadas à igualdade de gênero."
  },
  {
    id: 2,
    name: "Paula Santos",
    role: "Assessora Jurídica",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    bio: "Assessora da Câmara Municipal especializada em direito das mulheres, com foco no acompanhamento de casos de violência doméstica e familiar."
  },
  {
    id: 3,
    name: "Carolina Silva",
    role: "Assessora Legislativa",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    bio: "Responsável pelo desenvolvimento de projetos de lei e fiscalização de políticas públicas voltadas para as mulheres em Canelinha."
  },
  {
    id: 4,
    name: "Fernanda Oliveira",
    role: "Assessora de Comunicação",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    bio: "Coordena as campanhas educativas e a divulgação das ações da Procuradoria da Mulher junto à comunidade de Canelinha."
  },
];

const Team = () => {
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
    <section id="equipe" className="py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="hero-tag stagger-item">Nossa Equipe</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 stagger-item">
            Profissionais Dedicadas
          </h2>
          <p className="text-lg text-muted-foreground stagger-item">
            Conheça nossa equipe multidisciplinar, composta por servidoras qualificadas e comprometidas com a defesa dos direitos das mulheres de Canelinha.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.id} 
              className="stagger-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square hover-lift">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
              <p className="text-brand-600 font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;


import { useEffect, useRef } from "react";

const team = [
  {
    id: 1,
    name: "Dra. Maria Silva",
    role: "Procuradora",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    bio: "Advogada com especialização em Direito das Mulheres e experiência de mais de 15 anos na defesa de causas relacionadas à igualdade de gênero."
  },
  {
    id: 2,
    name: "Dra. Ana Oliveira",
    role: "Advogada",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    bio: "Especialista em Direito Familiar e Penal, com foco em casos de violência doméstica e familiar contra a mulher."
  },
  {
    id: 3,
    name: "Camila Rodrigues",
    role: "Psicóloga",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    bio: "Psicóloga com mestrado em Psicologia Social, especializada no atendimento a mulheres em situação de vulnerabilidade."
  },
  {
    id: 4,
    name: "Patrícia Mendes",
    role: "Assistente Social",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400",
    bio: "Profissional com vasta experiência na articulação de redes de apoio e no desenvolvimento de políticas públicas para mulheres."
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
            Conheça nossa equipe multidisciplinar, composta por profissionais qualificadas e comprometidas com a defesa dos direitos das mulheres.
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

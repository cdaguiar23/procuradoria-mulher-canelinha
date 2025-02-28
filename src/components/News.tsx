
import { Calendar, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const news = [
  {
    id: 1,
    title: "Audiência Pública sobre Violência Doméstica",
    excerpt: "A Procuradoria da Mulher realizará audiência pública para discutir políticas de enfrentamento à violência doméstica durante a pandemia.",
    date: new Date(2023, 5, 15),
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Campanha Agosto Lilás",
    excerpt: "Lançamento da campanha Agosto Lilás, que visa conscientizar a população sobre a Lei Maria da Penha e seus mecanismos de proteção.",
    date: new Date(2023, 7, 7),
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Capacitação para Conselheiros Tutelares",
    excerpt: "Procuradoria promoverá curso de capacitação para conselheiros tutelares sobre o atendimento a crianças e adolescentes expostos à violência doméstica.",
    date: new Date(2023, 8, 22),
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400"
  },
];

const formatDate = (date: Date) => {
  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
};

const News = () => {
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
    <section id="noticias" className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="hero-tag stagger-item">Notícias & Eventos</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 stagger-item">
            Acompanhe Nossas Atividades
          </h2>
          <p className="text-lg text-muted-foreground stagger-item">
            Fique por dentro das ações, eventos e notícias relacionadas ao trabalho da Procuradoria da Mulher em nossa cidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article 
              key={item.id} 
              className="rounded-xl border border-border overflow-hidden hover-lift stagger-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={16} />
                  <time dateTime={item.date.toISOString()}>
                    {formatDate(item.date)}
                  </time>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-1 text-brand-600 font-medium hover:text-brand-700 group"
                >
                  Leia mais
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12 stagger-item">
          <a 
            href="#" 
            className="rounded-full bg-transparent border border-brand-200 hover:border-brand-400 px-6 py-3 font-medium text-foreground shadow-sm transition-all hover:shadow-md inline-flex items-center gap-2"
          >
            Ver Todas as Notícias
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;

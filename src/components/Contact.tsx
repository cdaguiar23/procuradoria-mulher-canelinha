
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="hero-tag animate-fade-in">Contato</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
              Estamos à Disposição Para Te Atender
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
              Se você precisa de orientação, informações ou deseja conhecer mais sobre o trabalho da Procuradoria da Mulher em Canelinha, entre em contato conosco.
            </p>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <a href="mailto:procuradoria.mulher@camaracanelinha.sc.gov.br" className="text-brand-600 hover:text-brand-700 animated-link">
                    procuradoria.mulher@camaracanelinha.sc.gov.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Telefone</h3>
                  <a href="tel:+554832643069" className="text-brand-600 hover:text-brand-700 animated-link">
                    (48) 3264-0033
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Câmara Municipal de Canelinha<br />
                    Rua Manoel Francisco Correa, 417<br />
                    Centro - Canelinha/SC - CEP: 88230-000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "500ms" }}>
            <form 
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-6 md:p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl font-serif font-semibold mb-6">Envie sua mensagem</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="Denúncia">Denúncia</option>
                    <option value="Dúvida">Dúvida</option>
                    <option value="Orientação">Orientação</option>
                    <option value="Sugestão">Sugestão</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-brand-600 py-3 font-medium text-white transition-all hover:bg-brand-700 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Mensagem
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

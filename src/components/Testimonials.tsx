import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialsBg from "@/assets/testimonials-bg.jpg";

const testimonials = [
  {
    name: "Dra. Ana Paula Silva",
    role: "Diretora Clínica Saúde Plena",
    content: "Reduzimos em 70% as faltas sem aviso prévio. O sistema de lembretes automáticos é fantástico!",
    rating: 5,
  },
  {
    name: "Dr. Roberto Costa",
    role: "Proprietário Clínica MedCenter",
    content: "Nossa recepção agora foca no que realmente importa. A IA cuida de 80% dos agendamentos sozinha.",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    role: "Gestora Consultório Vida",
    content: "Nossos pacientes adoram o atendimento rápido e eficiente via WhatsApp. Aumentamos 40% a satisfação!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section 
      className="py-16 md:py-24 bg-muted relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${testimonialsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            O que dizem{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              nossos clientes
            </span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Resultados reais de clínicas que transformaram seu atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

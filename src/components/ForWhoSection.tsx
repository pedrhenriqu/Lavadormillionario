import { Rocket, Award, DollarSign } from "lucide-react";

const cards = [
  {
    icon: Rocket,
    title: "Está Começando do Zero",
    desc: "Nunca trabalhou com limpeza mas quer entrar nesse mercado lucrativo",
  },
  {
    icon: Award,
    title: "Já é Profissional",
    desc: "Trabalha na área mas quer elevar seu nível e cobrar mais pelos serviços",
  },
  {
    icon: DollarSign,
    title: "Busca Renda Extra",
    desc: "Quer uma fonte de renda adicional trabalhando nos finais de semana",
  },
];

const ForWhoSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Esse curso é para <span className="text-gold">VOCÊ</span> que:
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-secondary border border-border rounded-2xl p-8 hover:border-gold/40 transition-all hover:-translate-y-1 duration-300"
            >
              <card.icon className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;

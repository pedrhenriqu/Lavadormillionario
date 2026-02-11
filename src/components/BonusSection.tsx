import { Users, Package, CalendarDays } from "lucide-react";

const bonuses = [
  { icon: Users, title: "Grupo Exclusivo VIP", desc: "Acesso ao grupo exclusivo de alunos com suporte direto", originalPrice: "R$497" },
  { icon: Package, title: "Suporte com Produtos", desc: "Lista completa dos melhores produtos e onde comprar", originalPrice: "R$297" },
  { icon: CalendarDays, title: "Acesso por 12 Meses", desc: "Acesso total às aulas e atualizações por 1 ano", originalPrice: "R$397" },
];

const BonusSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-navy-light">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold font-bold text-lg mb-2">🎁 BÔNUS EXCLUSIVOS</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          E ainda leva esses BÔNUS INCRÍVEIS
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              className="bg-secondary border border-gold/20 rounded-2xl p-6 relative overflow-hidden"
            >
              <span className="absolute top-3 right-3 bg-green-check text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                GRÁTIS
              </span>
              <bonus.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">{bonus.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{bonus.desc}</p>
              <p className="text-muted-foreground text-sm line-through">De {bonus.originalPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;

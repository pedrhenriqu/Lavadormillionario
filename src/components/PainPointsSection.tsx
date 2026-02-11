import { X } from "lucide-react";

const painPoints = [
  "Está cansado de trabalhar muito e ganhar pouco?",
  "Quer ter um negócio próprio mas não sabe por onde começar?",
  "Já tentou outras rendas extras e não deu certo?",
  "Sonha em ter liberdade financeira e geográfica?",
  "Quer sair do emprego que não te valoriza?",
  "Precisa de uma renda extra urgente?",
];

const PainPointsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Você se identifica com alguma dessas situações?
        </h2>

        <div className="grid gap-4 md:grid-cols-2 text-left mb-12">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-secondary/50 border border-border rounded-xl p-5 hover:border-gold/30 transition-colors"
            >
              <X className="w-5 h-5 text-red-x mt-0.5 shrink-0" />
              <span className="text-foreground">{point}</span>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-2xl p-8 border border-border">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            E se eu te dissesse que existe uma <span className="text-gold">solução</span>?
          </h3>
          <p className="text-muted-foreground">
            O mercado de limpeza profissional movimenta{" "}
            <strong className="text-foreground">bilhões de reais</strong> por ano e está em
            crescimento constante. A demanda por profissionais qualificados é{" "}
            <strong className="text-foreground">muito maior que a oferta</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;

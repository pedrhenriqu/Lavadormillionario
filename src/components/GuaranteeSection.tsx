import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-navy-light">
      <div className="max-w-3xl mx-auto text-center">
        <ShieldCheck className="w-20 h-20 text-gold mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Garantia Incondicional de 7 Dias
        </h2>
        <p className="text-muted-foreground text-lg">
          Se dentro de 7 dias você acessar o curso, assistir as aulas e achar que não é para
          você, basta enviar um e-mail que devolvemos{" "}
          <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem
          burocracia. O risco é todo nosso.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;

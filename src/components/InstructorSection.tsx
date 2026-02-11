import instructorImg from "@/assets/instructor.jpeg";

const stats = [
  { label: "Experiência", value: "+29 anos" },
  { label: "Alunos formados", value: "+2.847" },
  { label: "Faturados", value: "+R$10 Mi" },
  { label: "Avaliação", value: "4.9 ⭐" },
];

const InstructorSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-navy-light">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-2 border-gold/30 shadow-gold">
              <img
                src={instructorImg}
                alt="Helvander Guimarães - Lavador Milionário"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <span className="bg-secondary px-3 py-1 rounded-full text-xs text-muted-foreground border border-border">
                Especialista +10 anos
              </span>
              <span className="bg-secondary px-3 py-1 rounded-full text-xs text-muted-foreground border border-border">
                +2.847 Alunos
              </span>
            </div>
          </div>

          <div>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Seu Professor
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Conheça o Helvander Guimarães
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Não adianta negar</strong>, a maioria dos
              profissionais na área da limpeza ficam estagnados, não buscam por mais conhecimento
              e não exploram outros serviços dentro da própria limpeza como o pós-obra.
            </p>
            <p className="text-muted-foreground mb-6">
              Por esse motivo resolvi fundar o <strong className="text-foreground">Lavador 10K</strong>,
              que é um treinamento completo para profissionais que desejam chegar ao nível mais alto
              em qualidade de limpeza, aplicando <strong className="text-gold">técnicas exclusivas</strong>.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-secondary rounded-xl p-4 text-center border border-border">
                  <p className="text-gold font-bold text-lg">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-gold pl-4 italic text-muted-foreground">
              "Minha missão é tirar você da estagnação e te levar ao topo da profissão. Vou te
              mostrar exatamente o que eu fiz para faturar mais de R$10.000 por mês trabalhando
              com o que eu amo."
              <footer className="mt-2 text-gold font-semibold not-italic">— Helvander Guimarães</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;

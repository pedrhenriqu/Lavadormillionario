import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso de experiência prévia?",
    a: "Não! O curso foi desenvolvido para iniciantes. Você vai aprender tudo do zero, passo a passo.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Você terá acesso ao curso por 12 meses completos, incluindo todas as atualizações.",
  },
  {
    q: "Quanto preciso investir em equipamentos?",
    a: "Você pode começar com investimento baixo, em torno de R$500 a R$1.000, e ir crescendo conforme fatura.",
  },
  {
    q: "Em quanto tempo posso começar a faturar?",
    a: "Muitos alunos fecham seu primeiro serviço ainda na primeira semana após iniciar os estudos.",
  },
  {
    q: "E se eu não gostar do curso?",
    a: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-secondary border border-border rounded-xl px-6 data-[state=open]:border-gold/40"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-gold transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

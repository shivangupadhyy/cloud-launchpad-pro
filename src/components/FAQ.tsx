import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you start on my project?",
    answer: "Most projects can begin within 1-2 weeks of our initial consultation. For urgent production issues, I can often start within 48 hours.",
  },
  {
    question: "Do you work with companies outside my timezone?",
    answer: "Absolutely. I've worked with teams across the US, Europe, and Asia. Async communication works great for most infrastructure work, and I'm flexible with scheduling calls during overlapping hours.",
  },
  {
    question: "What's your pricing model?",
    answer: "I offer both project-based pricing and monthly retainers depending on your needs. Project work is priced based on scope and complexity, while retainers start at 20 hours/month. Let's discuss what makes sense for you.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, I'm happy to sign mutual NDAs before discussing sensitive information. Confidentiality and trust are fundamental to how I work with clients.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Definitely. I often work alongside in-house developers and DevOps engineers, either leading initiatives or supporting their efforts. Knowledge transfer is built into everything I do.",
  },
  {
    question: "What if something breaks after you're done?",
    answer: "All projects include a warranty period where I'll address any issues related to my work at no extra cost. For ongoing peace of mind, many clients opt for a support retainer.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to questions you might have.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

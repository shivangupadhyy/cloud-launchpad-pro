import { 
  MessageSquare, 
  FileCode, 
  Rocket, 
  FileText, 
  Headphones 
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We discuss your current setup, pain points, and goals. I ask the right questions to understand what success looks like for you.",
  },
  {
    number: "02",
    icon: FileCode,
    title: "Architecture & Planning",
    description: "I design a tailored solution with a clear roadmap, timeline, and transparent pricing. No surprises.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementation",
    description: "I build and deploy your infrastructure with best practices, security, and monitoring baked in from day one.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Documentation & Handover",
    description: "You receive comprehensive documentation and a hands-on walkthrough so your team can operate with confidence.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Ongoing Support",
    description: "Optional retainer for continuous optimization, maintenance, and on-call support when you need it.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How We Work Together
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven process designed for clarity, efficiency, and results. 
            From first call to production deployment in weeks, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

            {/* Step Items */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex items-start gap-6 lg:gap-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`pl-16 lg:pl-0 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                      <span className="text-primary text-sm font-semibold mb-2 block">
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

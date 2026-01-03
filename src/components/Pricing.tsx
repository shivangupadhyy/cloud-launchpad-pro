import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for startups getting started with DevOps",
    price: "$2,500",
    period: "one-time",
    features: [
      "CI/CD Pipeline Setup",
      "Docker Configuration",
      "Basic Cloud Infrastructure",
      "GitHub/GitLab Integration",
      "Deployment Automation",
      "Documentation & Handover",
      "2 Weeks Support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    description: "For growing teams needing production-ready infrastructure",
    price: "$5,000",
    period: "one-time",
    features: [
      "Everything in Starter",
      "Kubernetes Deployment",
      "Auto-scaling Configuration",
      "Monitoring & Alerting",
      "Security Hardening",
      "Cost Optimization Audit",
      "Load Balancing Setup",
      "1 Month Support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Ongoing support for mission-critical systems",
    price: "$3,000",
    period: "/month",
    features: [
      "Everything in Professional",
      "24/7 Incident Response",
      "Monthly Architecture Reviews",
      "Continuous Optimization",
      "Dedicated Slack Channel",
      "Priority Support",
      "Quarterly Strategy Sessions",
      "Unlimited Consultations"
    ],
    cta: "Contact Us",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Transparent Pricing for Every Stage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose the package that fits your needs. All plans include comprehensive 
              documentation and hands-on implementation.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <StaggerItem key={index}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  tier.popular
                    ? "bg-primary/10 border-2 border-primary shadow-lg shadow-primary/20"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? "hero" : "heroOutline"}
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {tier.cta}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-muted-foreground mt-12 text-sm">
            Need a custom solution?{" "}
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:underline font-medium"
            >
              Let's discuss your requirements
            </button>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;

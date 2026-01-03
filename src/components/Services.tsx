import { motion } from "framer-motion";
import { 
  GitBranch, 
  Cloud, 
  Container, 
  DollarSign, 
  Headphones,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const services = [
  {
    icon: GitBranch,
    title: "DevOps Starter Setup",
    description: "Get your CI/CD pipeline, Docker containers, and deployment automation set up right from day one.",
    problem: "Spending hours on manual deployments and debugging failed releases?",
    includes: [
      "GitHub/GitLab CI/CD pipeline setup",
      "Docker containerization",
      "Automated testing integration",
      "Deployment to staging & production",
    ],
    idealFor: "Early-stage startups ready to ship faster",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Setup",
    description: "Production-ready AWS infrastructure with security, monitoring, and scalability built-in.",
    problem: "Worried about security vulnerabilities and infrastructure that can't scale?",
    includes: [
      "AWS/GCP architecture design",
      "VPC, subnets & security groups",
      "IAM policies & access control",
      "Monitoring & alerting setup",
    ],
    idealFor: "Companies launching production workloads",
  },
  {
    icon: Container,
    title: "Kubernetes Deployment",
    description: "Container orchestration that scales with your traffic and keeps your services running smoothly.",
    problem: "Struggling to manage multiple services and handle traffic spikes?",
    includes: [
      "K8s cluster setup (EKS/GKE)",
      "Helm charts & deployments",
      "Auto-scaling configuration",
      "Service mesh & ingress",
    ],
    idealFor: "Growing teams with microservices",
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization",
    description: "Reduce your cloud bill by 30-50% without sacrificing performance or reliability.",
    problem: "Cloud costs growing faster than your revenue?",
    includes: [
      "Full cost audit & analysis",
      "Right-sizing recommendations",
      "Reserved instance strategy",
      "Cost monitoring dashboards",
    ],
    idealFor: "Companies spending $5k+/month on cloud",
  },
  {
    icon: Headphones,
    title: "Monthly DevOps Support",
    description: "Ongoing partnership to keep your infrastructure healthy and evolving with your needs.",
    problem: "Need expert DevOps help but can't afford a full-time hire?",
    includes: [
      "Dedicated support hours",
      "Infrastructure maintenance",
      "Performance optimization",
      "24/7 incident response",
    ],
    idealFor: "Teams without in-house DevOps",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            End-to-End DevOps & Cloud Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From initial setup to ongoing support, I provide the infrastructure 
            expertise your startup needs to scale with confidence.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative h-full p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 shadow-card"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>

                {/* Problem */}
                <div className="p-3 rounded-lg bg-secondary/50 mb-4">
                  <p className="text-sm text-muted-foreground italic">
                    "{service.problem}"
                  </p>
                </div>

                {/* What's Included */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    What's Included
                  </p>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Ideal for:</span>{" "}
                    {service.idealFor}
                  </p>
                </div>

                {/* CTA */}
                <Button variant="ghost" className="mt-4 w-full justify-between group-hover:text-primary" asChild>
                  <a href="#contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

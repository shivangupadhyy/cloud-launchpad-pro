import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted by 50+ Startups</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
            Reliable <span className="text-gradient">DevOps & Cloud</span>{" "}
            <br className="hidden sm:block" />
            Infrastructure for Growing Startups
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
            Focus on building your product while I handle your cloud infrastructure, 
            CI/CD pipelines, and production reliability. No fluff, just results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="gap-2">
                Get a Free Consultation
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up animation-delay-400">
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border/50">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border/50">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Fast Deployments</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border/50">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Cost Optimized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

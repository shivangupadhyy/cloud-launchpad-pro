import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted by 50+ Startups</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            Reliable <span className="text-gradient">DevOps & Cloud</span>{" "}
            <br className="hidden sm:block" />
            Infrastructure for Growing Startups
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Focus on building your product while I handle your cloud infrastructure, 
            CI/CD pipelines, and production reliability. No fluff, just results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="gap-2">
                Get a Free Consultation
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">View Services</a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Shield, label: "99.9% Uptime SLA" },
              { icon: Zap, label: "Fast Deployments" },
              { icon: TrendingUp, label: "Cost Optimized" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border/50"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

import { motion } from "framer-motion";
import { Award, Users, Clock, Target } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const stats = [
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Clock, value: "99.9%", label: "Uptime Delivered" },
  { icon: Target, value: "100+", label: "Projects Completed" },
];

const values = [
  {
    title: "Reliability First",
    description: "Your production systems are treated with the same care as if they were my own. No shortcuts, no excuses.",
  },
  {
    title: "Ownership Mentality",
    description: "I don't just complete tasks—I take full ownership of outcomes and proactively solve problems before they arise.",
  },
  {
    title: "Clear Communication",
    description: "No jargon, no disappearing acts. You'll always know what's happening, why, and what's next.",
  },
  {
    title: "Long-Term Partnerships",
    description: "I'm here to grow with you. Most of my clients have been working with me for years, not months.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - About Content */}
          <ScrollReveal direction="left">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Your Dedicated DevOps Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a freelance DevOps and Cloud consultant with 8+ years of experience 
              helping startups and growing companies build reliable, scalable infrastructure.
            </p>
            <p className="text-muted-foreground mb-8">
              Having worked with companies from seed stage to Series C, I understand the unique 
              challenges of building technology in fast-moving environments. My focus is on 
              delivering infrastructure that enables your team to move fast without breaking things.
            </p>
            <p className="text-muted-foreground mb-8">
              I specialize in AWS, Kubernetes, CI/CD automation, and everything in between. 
              When you work with me, you get a senior-level engineer who treats your infrastructure 
              as their own—with full ownership, proactive communication, and a commitment to your success.
            </p>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Right Column - Values */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What I Stand For
              </h3>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-semibold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "DevOps Setup", href: "#services" },
      { label: "Cloud Infrastructure", href: "#services" },
      { label: "Kubernetes", href: "#services" },
      { label: "Cost Optimization", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">DO</span>
                </div>
                <span className="font-semibold text-lg text-foreground">DevOps Pro</span>
              </a>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Freelance DevOps & Cloud consultant helping startups build reliable, 
                scalable infrastructure that grows with their business.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-foreground mb-4">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 4 }}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-block"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DevOps Pro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

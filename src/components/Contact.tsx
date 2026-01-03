import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - CTA Content */}
            <ScrollReveal direction="left">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Let's Build Something{" "}
                <span className="text-gradient">Reliable</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to level up your infrastructure? I'd love to hear about your 
                project. Fill out the form and I'll get back to you within 24 hours.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@devopspro.com"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email Me</div>
                    <div className="text-sm text-muted-foreground">
                      hello@devopspro.com
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Schedule a Call
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Book a 30-min consultation
                    </div>
                  </div>
                </motion.a>
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Form */}
            <ScrollReveal direction="right" delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="you@company.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="Your company"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        How can I help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                        placeholder="Tell me about your project or challenge..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

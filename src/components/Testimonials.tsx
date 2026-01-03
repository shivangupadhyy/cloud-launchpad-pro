import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Working with DevOps Pro transformed our deployment process. We went from weekly releases with constant issues to daily deployments with zero downtime.",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
    avatar: "SC",
  },
  {
    quote: "Finally, an infrastructure consultant who actually delivers. Our AWS bill dropped by 40% and our systems have never been more reliable.",
    author: "Marcus Johnson",
    role: "Founder, ScaleUp Labs",
    avatar: "MJ",
  },
  {
    quote: "The documentation and handover process was exceptional. Our team can now confidently manage the infrastructure independently.",
    author: "Elena Rodriguez",
    role: "VP Engineering, DataSync",
    avatar: "ER",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Engineering Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Here's what CTOs and founders say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

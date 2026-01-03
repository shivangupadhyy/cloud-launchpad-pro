import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import Pricing from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DevOps Pro | Reliable DevOps & Cloud Infrastructure for Startups</title>
        <meta
          name="description"
          content="Freelance DevOps and Cloud consultant helping startups build reliable, scalable infrastructure. AWS, Kubernetes, CI/CD setup, and ongoing support."
        />
        <meta
          name="keywords"
          content="DevOps services, Cloud consulting, AWS DevOps, CI/CD setup, Kubernetes deployment, cloud infrastructure, DevOps consultant, startup infrastructure"
        />
        <link rel="canonical" href="https://devopspro.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="DevOps Pro | Reliable DevOps & Cloud Infrastructure for Startups" />
        <meta property="og:description" content="Freelance DevOps and Cloud consultant helping startups build reliable, scalable infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devopspro.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevOps Pro | Reliable DevOps & Cloud Infrastructure" />
        <meta name="twitter:description" content="Freelance DevOps and Cloud consultant helping startups build reliable, scalable infrastructure." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <About />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

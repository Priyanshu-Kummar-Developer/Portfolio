
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useToast } from "../components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome message with enhanced toast
    toast({
      title: "Welcome to my portfolio!",
      description: "Thanks for visiting. Feel free to explore my work and get in touch.",
      duration: 5000,
      className: "backdrop-blur-md bg-secondary/10 border-secondary/30",
    });

    // Add scroll animation observer with better performance
    const observerOptions = { 
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px' 
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);
    
    // Observe all reveal elements with a small delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(item => {
        observer.observe(item);
      });
    }, 100);
    
    return () => {
      observer.disconnect();
    };
  }, [toast]);

  return (
    <div className="min-h-screen dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

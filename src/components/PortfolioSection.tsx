
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "UI Design",
  "Projects"
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="portfolio" className="section-spacing relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            My Portfolio
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my upcoming projects and works
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full backdrop-blur-sm transition-all duration-300 hover:shadow-md ${
                activeCategory === category 
                  ? "bg-gradient-to-r from-primary to-accent border-transparent" 
                  : "bg-secondary/10 border-secondary/30"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid place-items-center min-h-[400px] reveal">
          <div className="text-center space-y-6 max-w-md mx-auto glass-card p-8 backdrop-blur-md">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-24 h-24 mx-auto rounded-full flex items-center justify-center animate-float">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Coming Soon</h3>
            <p className="text-muted-foreground">
              I'm currently working on exciting projects that will be showcased here soon. 
              Stay tuned for updates!
            </p>
            <div className="pt-4">
              <div className="flex space-x-2 justify-center">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                <span className="w-3 h-3 rounded-full bg-accent animate-pulse delay-300"></span>
                <span className="w-3 h-3 rounded-full bg-secondary animate-pulse delay-600"></span>
              </div>
            </div>
            <p className="text-primary italic font-light">
              "The best is yet to come!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

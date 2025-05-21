
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { useEffect } from "react";

const AboutSection = () => {
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
    <section id="about" className="section-spacing bg-secondary/5 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-[80px] animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-[80px] animate-pulse-slow"></div>
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-primary/40 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-full bg-accent/30 animate-float-delay"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my background, education, and what drives me to create amazing web experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3 reveal">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Who am I?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="transition-all hover:text-foreground">
                I'm Priyanshu Kumar, a frontend developer passionate about building efficient, user-friendly applications. 
                My journey in software development started with curiosity and has evolved into expertise in React.js and React Native.
              </p>
              <p className="transition-all hover:text-foreground">
                I believe in creating clean, accessible, and performant applications that provide exceptional user experiences. 
                I'm constantly learning and adapting to new technologies to improve my skills and deliver better solutions.
              </p>
              <p className="transition-all hover:text-foreground">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying 
                updated with the latest trends in web development.
              </p>
            </div>
            
            <Button className="mt-6 group neo-blur" variant="outline">
              <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={18} />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-size-200">
                Download Resume
              </span>
            </Button>
          </div>
          
          <div className="md:col-span-2 space-y-6 reveal">
            <div className="glass-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-4 text-gradient-primary">Education</h3>
              <div className="space-y-3">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary"></div>
                  <p className="font-semibold">BCA - Bachelor of Computer Applications</p>
                  <p className="text-muted-foreground">MGKVP University, Varanasi</p>
                  <p className="text-sm text-muted-foreground">2022 - 2025 (Expected)</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-medium mb-4 text-gradient-primary">Experience</h3>
              <div className="space-y-3">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent"></div>
                  <p className="font-semibold">Software Development Engineer (Intern)</p>
                  <p className="text-muted-foreground">Blue Stack FinTech Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground">Current</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

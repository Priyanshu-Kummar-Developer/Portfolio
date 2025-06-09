
import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const HeroSection = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add animation classes once the component mounts
    const profileEl = profileRef.current;
    const textEl = textContentRef.current;
    
    if (profileEl) {
      setTimeout(() => {
        profileEl.classList.add("translate-x-0", "opacity-100");
      }, 300);
    }
    
    if (textEl) {
      setTimeout(() => {
        textEl.classList.add("translate-y-0", "opacity-100");
      }, 500);
    }
  }, []);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-24">
      {/* Modern background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
        <div className="absolute top-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content with enhanced styling */}
          <div 
            ref={textContentRef} 
            className="order-2 md:order-1 transform translate-y-10 opacity-0 transition-all duration-700"
          >
            <div className="inline-block px-6 py-2 rounded-full bg-secondary/30 text-secondary-foreground text-sm mb-6 backdrop-blur-sm border border-secondary/20">
              <span className="animate-pulse inline-block mr-2">👋</span>
              Frontend Developer | React & React Native Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient bg-size-200">Priyanshu Kumar</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              A passionate software developer focused on creating efficient, user-friendly applications. 
              I specialize in frontend development with React.js and React Native, 
              always eager to learn and implement new technologies.
            </p>
            
            {/* Enhanced social links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://github.com/Priyanshu-Kummar-Developer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors border border-secondary/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
              >
                <Github size={20} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/priyanshu-kumar-287a59345/"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors border border-secondary/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
              >
                <Linkedin size={20} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:priyanshujaiswara@gmail.com"
                className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors border border-secondary/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
              >
                <Mail size={20} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">Email</span>
              </a>
              <a 
                href="tel:+919336006280"
                className="p-3 rounded-full bg-secondary/20 hover:bg-secondary/40 transition-colors border border-secondary/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
              >
                <Phone size={20} className="text-foreground/80 hover:text-primary transition-colors" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
            
            {/* Enhanced CTA button */}
            <Button 
              onClick={scrollToContact} 
              className="group relative overflow-hidden px-8 py-6 bg-gradient-to-r from-primary to-accent hover:bg-gradient-to-l transition-all duration-300"
            >
              <span className="relative z-10 flex items-center font-medium">
                Let's Talk 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
          </div>
          
          {/* Profile Picture with enhanced styling */}
          <div 
            ref={profileRef}
            className="order-1 md:order-2 mx-auto transform translate-x-10 opacity-0 transition-all duration-700"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-full relative">
                {/* Animated gradient border */}
                <div className="absolute inset-0 p-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow"></div>
                
                {/* Profile picture container */}
                <div className="absolute inset-1.5 rounded-full overflow-hidden bg-gradient-to-tr from-primary/5 to-accent/5">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="https://i.postimg.cc/BQknhHBp/Whats-App-Image-2025-05-26-at-3-07-09-PM-1-Copy.jpg" 
                      alt="Priyanshu Kumar" 
                      className="w-full h-full object-cover object-center"
                    />
                    <AvatarFallback className="text-2xl">PK</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute top-5 -right-4 w-16 h-16 bg-accent/20 rounded-full backdrop-blur-md border border-accent/30 animate-float"></div>
              <div className="absolute bottom-10 -left-6 w-20 h-20 bg-primary/20 rounded-full backdrop-blur-md border border-primary/30 animate-float-delay"></div>
              <div className="absolute -bottom-2 right-10 w-12 h-12 bg-secondary/30 rounded-full backdrop-blur-md border border-secondary/20 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <span className="text-sm text-foreground/50 mb-2">Scroll Down</span>
        <div className="w-5 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

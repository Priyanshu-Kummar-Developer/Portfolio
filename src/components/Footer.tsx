
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-white/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-secondary/5 backdrop-blur-sm"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              i'm Priyanshu<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Building beautiful web experiences
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/Priyanshu-Kummar-Developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2 hover:bg-secondary/20 rounded-full hover:scale-110 transform transition-transform"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/priyanshu-kumar-287a59345/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2 hover:bg-secondary/20 rounded-full hover:scale-110 transform transition-transform"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:priyanshujaiswara@gmail.com"
              className="hover:text-primary transition-colors p-2 hover:bg-secondary/20 rounded-full hover:scale-110 transform transition-transform"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} Priyanshu Kumar. All rights reserved.
          </div>
        </div>
        
        {/* <div className="mt-6 pt-6 border-t border-white/5 text-center text-xs text-muted-foreground/60">
          <p>Designed with passion and code</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

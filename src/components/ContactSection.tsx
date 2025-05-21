
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "priyanshujaiswara@gmail.com",
      link: "mailto:priyanshujaiswara@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+91 93360 06280",
      link: "tel:+919336006280",
    },
    {
      icon: <Github className="h-5 w-5 text-primary" />,
      label: "GitHub",
      value: "Priyanshu-Kummar-Developer",
      link: "https://github.com/Priyanshu-Kummar-Developer/",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      label: "LinkedIn",
      value: "Priyanshu Kumar",
      link: "https://www.linkedin.com/in/priyanshu-kumar-287a59345/",
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-secondary/5 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full border border-primary/30 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full border border-accent/20 animate-float-delay"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8 reveal">
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Let's Talk</h3>
            <p className="text-muted-foreground">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other request or question, don't hesitate to use the form.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start group hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-lg mr-4 backdrop-blur-sm group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <a 
                      href={item.link} 
                      className="hover:text-primary transition-colors"
                      target={item.label !== "Email" && item.label !== "Phone" ? "_blank" : undefined}
                      rel={item.label !== "Email" && item.label !== "Phone" ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card backdrop-blur-md rounded-xl p-6 border border-white/10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 reveal">
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gradient-primary">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/10 border-secondary/30 focus:border-primary transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gradient-primary">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary/10 border-secondary/30 focus:border-primary transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gradient-primary">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-secondary/10 border-secondary/30 focus:border-primary transition-all"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full group bg-gradient-to-r from-primary to-accent hover:bg-gradient-to-l transition-all duration-300" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Send Message 
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

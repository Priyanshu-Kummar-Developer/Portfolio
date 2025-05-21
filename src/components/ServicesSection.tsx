
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Frontend Web Development",
    description: "Building responsive, interactive web applications using React.js, with focus on performance and modern UI patterns.",
    features: [
      "React.js application development",
      "Interactive UI/UX implementation",
      "Performance optimization",
      "State management with Redux",
      "API integration",
    ],
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications with React Native that work seamlessly across iOS and Android.",
    features: [
      "React Native app development",
      "Cross-platform compatibility",
      "Native module integration",
      "App performance optimization",
      "App store deployment support",
    ],
  },
  {
    title: "Frontend Consulting",
    description: "Providing expert advice on frontend architecture, best practices, and optimization strategies.",
    features: [
      "Code review and improvement",
      "Performance audit",
      "Architecture planning",
      "Team training and support",
      "Technical documentation",
    ],
  },
];

const ServicesSection = () => {
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
    <section id="services" className="section-spacing bg-secondary/5 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-accent/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-20 w-20 h-20 rounded-full border border-primary/30 animate-spin-slow opacity-30"></div>
      <div className="absolute bottom-1/3 right-20 w-32 h-32 rounded-full border border-accent/20 animate-spin-slow opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            My Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what I can do for you and your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card backdrop-blur-md rounded-xl p-6 border border-white/10 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                <div className="text-2xl">{index === 0 ? '💻' : index === 1 ? '📱' : '🛠️'}</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="text-primary h-5 w-5 mt-0.5 mr-2" />
                    <span className="text-sm transition-colors hover:text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

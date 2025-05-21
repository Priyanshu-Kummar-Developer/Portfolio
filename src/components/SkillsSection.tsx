
import { useEffect } from "react";

const skills = [
  {
    name: "React.js",
    icon: "📱",
    level: 90,
  },
  {
    name: "React Native",
    icon: "📲",
    level: 85,
  },
  {
    name: "JavaScript (ES6+)",
    icon: "💻",
    level: 90,
  },
  {
    name: "Redux",
    icon: "🔄",
    level: 80,
  },
  {
    name: "Firebase",
    icon: "🔥",
    level: 75,
  },
  {
    name: "Git",
    icon: "📊",
    level: 85,
  },
];

const tools = [
  "VS Code",
  "Postman",
  "GitHub",
  "Figma",
  "npm",
  "yarn",
];

const SkillsSection = () => {
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
    <section id="skills" className="section-spacing relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute top-20 left-20 w-6 h-6 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-40 w-10 h-10 bg-accent/20 rounded-full animate-float-delay"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 inline-block relative">
            My Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in frontend technologies with a focus on creating responsive, 
            dynamic user interfaces and integrating APIs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card backdrop-blur-md reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-3 transform hover:scale-125 transition-transform duration-300">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{skill.name}</h3>
              <div className="w-full bg-secondary/20 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full relative"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="absolute inset-0 bg-white/20 animate-pulse"></span>
                </div>
              </div>
              <p className="text-sm mt-2 text-muted-foreground">{skill.level}%</p>
            </div>
          ))}
        </div>
        
        <div className="reveal">
          <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div 
                key={tool} 
                className="px-4 py-2 bg-secondary/20 rounded-full text-sm backdrop-blur-sm border border-secondary/30 hover:bg-secondary/40 transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

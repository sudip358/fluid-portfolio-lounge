
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl = "https://placehold.co/600x400/f5f5f5/cccccc", 
  liveUrl = "#", 
  githubUrl = "#" 
}) => {
  return (
    <div className="neo-blur rounded-xl overflow-hidden transition-all duration-300 hover-scale">
      <div className="h-48 md:h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button size="sm" variant="outline" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce SEO Optimization",
      description: "Complete SEO strategy and implementation for a health essentials e-commerce platform.",
      tags: ["SEO", "E-commerce", "Content Strategy"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=E-commerce+SEO",
    },
    {
      title: "Casino Site Ranking System",
      description: "Developed a comprehensive ranking system and link building strategy for a gaming platform.",
      tags: ["SEO", "Casino", "Link Building"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Casino+SEO",
    },
    {
      title: "CBD Product Platform",
      description: "Technical SEO and content optimization for a CBD product company.",
      tags: ["SEO", "CBD", "Technical SEO"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=CBD+SEO",
    },
    {
      title: "Essential Oils Website",
      description: "Complete SEO audit and strategy implementation for an essential oils company.",
      tags: ["SEO", "Health", "Content Marketing"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Essential+Oils",
    },
    {
      title: "Mental Health Platform",
      description: "SEO and content strategy for a mental health resources website.",
      tags: ["SEO", "Mental Health", "Content"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Mental+Health",
    },
    {
      title: "PR Link Building Campaign",
      description: "Executed PR link-building campaigns, securing high-authority backlinks from publications.",
      tags: ["SEO", "PR", "Link Building"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=PR+Links",
    },
  ];

  return (
    <PageTransition>
      <div className="container max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A showcase of my SEO work with companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

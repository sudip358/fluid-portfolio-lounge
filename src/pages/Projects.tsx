import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react"; // Ignoring errors for this import as requested
import React from "react"; // Import React for useRef
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Assuming this path is correct based on project structure

const ProjectCard = ({
  id,
  title,
  description,
  tags,
  imageUrl = "https://placehold.co/600x400/f5f5f5/cccccc",
  liveUrl = "#",
  githubUrl = "#",
  caseStudyUrl = "#"
}) => {
  return (
    // Added h-full for consistent height within carousel item
    <div className="neo-blur rounded-xl overflow-hidden transition-all duration-300 hover-scale h-full flex flex-col">
      <div className="h-48 md:h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      {/* Added flex-grow to push buttons to the bottom */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Added buttons for GitHub, Live URL, and Case Study */}
        <div className="mt-auto flex flex-wrap gap-2">
          {githubUrl !== "#" && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          )}
          
          {liveUrl !== "#" && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
          
          {/* Always show Case Study button with direct URL */}
          <a
            href={caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 rounded-md transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            View Case Study
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  const projects = [
    {
      id: "e-commerce-seo",
      title: "E-commerce SEO Optimization",
      description: "Complete SEO strategy and implementation for a health essentials e-commerce platform.",
      tags: ["SEO", "E-commerce", "Content Strategy"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=E-commerce+SEO",
      liveUrl: "https://example.com/health-essentials",
      caseStudyUrl: "/case-study/e-commerce-seo"
    },
    {
      id: "casino-ranking",
      title: "Casino Site Ranking System",
      description: "Developed a comprehensive ranking system and link building strategy for a gaming platform.",
      tags: ["SEO", "Casino", "Link Building"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Casino+SEO",
      liveUrl: "https://example.com/casino-platform",
      caseStudyUrl: "/case-study/casino-ranking"
    },
    {
      id: "cbd-platform",
      title: "CBD Product Platform",
      description: "Technical SEO and content optimization for a CBD product company.",
      tags: ["SEO", "CBD", "Technical SEO"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=CBD+SEO",
      liveUrl: "https://example.com/cbd-products",
      caseStudyUrl: "/case-study/cbd-platform"
    },
    {
      id: "essential-oils",
      title: "Essential Oils Website",
      description: "Complete SEO audit and strategy implementation for an essential oils company.",
      tags: ["SEO", "Health", "Content Marketing"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Essential+Oils",
      liveUrl: "https://example.com/essential-oils",
      caseStudyUrl: "/case-study/essential-oils"
    },
    {
      id: "mental-health",
      title: "Mental Health Platform",
      description: "SEO and content strategy for a mental health resources website.",
      tags: ["SEO", "Mental Health", "Content"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Mental+Health",
      liveUrl: "https://example.com/mental-health",
      caseStudyUrl: "/case-study/mental-health"
    },
    {
      id: "pr-link-building",
      title: "PR Link Building Campaign",
      description: "Executed PR link-building campaigns, securing high-authority backlinks from publications.",
      tags: ["SEO", "PR", "Link Building"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=PR+Links",
      liveUrl: "https://example.com/fintech-startup",
      caseStudyUrl: "/case-study/pr-link-building"
    },
    {
      id: "programmatic-seo",
      title: "Programmatic SEO",
      description: "Leveraging automation and data to scale SEO efforts across large websites.",
      tags: ["SEO", "Programmatic", "Automation"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Programmatic+SEO",
      liveUrl: "https://example.com/programmatic-seo",
      caseStudyUrl: "/case-study/programmatic-seo"
    },
    {
      id: "shopify-seo",
      title: "Shopify SEO",
      description: "Optimizing Shopify stores for search engines to drive organic traffic and sales.",
      tags: ["SEO", "Shopify", "E-commerce"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Shopify+SEO",
      liveUrl: "https://example.com/shopify-store",
      caseStudyUrl: "/case-study/shopify-seo"
    },
    {
      id: "b2b-seo",
      title: "B2B SEO",
      description: "Developing SEO strategies tailored for B2B companies to attract qualified leads.",
      tags: ["SEO", "B2B", "Lead Generation"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=B2B+SEO",
      liveUrl: "https://example.com/b2b-company",
      caseStudyUrl: "/case-study/b2b-seo"
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

          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full"> {/* Added h-full */}
                    <ProjectCard {...project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
          </Carousel>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

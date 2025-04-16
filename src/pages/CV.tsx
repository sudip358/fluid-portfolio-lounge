
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Phone, MapPin, Linkedin, Send, ArrowRight, ExternalLink, Github } from "lucide-react"; // Ignoring errors for this import as requested
import React from "react"; // Import React for useRef
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Assuming this path is correct

// Define ProjectCard component locally within CV.tsx
const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl = "https://placehold.co/600x400/f5f5f5/cccccc",
  liveUrl = "#",
  githubUrl = "#"
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
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Added mt-auto to push buttons down */}
        <div className="flex gap-3 mt-auto">
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


const CV = () => {
  // Initialize Autoplay plugin
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  // Define projects data locally
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
    {
      title: "Programmatic SEO",
      description: "Leveraging automation and data to scale SEO efforts across large websites.",
      tags: ["SEO", "Programmatic", "Automation"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Programmatic+SEO",
    },
    {
      title: "Shopify SEO",
      description: "Optimizing Shopify stores for search engines to drive organic traffic and sales.",
      tags: ["SEO", "Shopify", "E-commerce"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=Shopify+SEO",
    },
    {
      title: "B2B SEO",
      description: "Developing SEO strategies tailored for B2B companies to attract qualified leads.",
      tags: ["SEO", "B2B", "Lead Generation"],
      imageUrl: "https://placehold.co/600x400/f5f5f5/cccccc?text=B2B+SEO",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section id="top" className="relative min-h-[90vh] w-full flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <div className="container max-w-5xl z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-enter">
              Sudip Kumar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-enter" style={{ animationDelay: "0.1s" }}>
              SEO Specialist with 10+ years of experience in developing and implementing successful search strategies for businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-enter" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full group px-6">
                <a href="/Sudiip-Kumr-Resume-Accenture.pdf" className="flex items-center gap-2">
                  Download CV 
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-enter" style={{ animationDelay: "0.3s" }}>
            <div className="neo-blur p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-2">SEO Expertise</h3>
              <p className="text-muted-foreground">Comprehensive strategies covering technical SEO, content optimization, and link building.</p>
            </div>
            
            <div className="neo-blur p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-2">Global Experience</h3>
              <p className="text-muted-foreground">Worked with clients across the US, Canada, Malta, Hong Kong, and India.</p>
            </div>
            
            <div className="neo-blur p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-2">Industry Knowledge</h3>
              <p className="text-muted-foreground">Specialized in e-commerce, casino, health, CBD, and mental health niches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A seasoned SEO professional with over 10 years of experience in helping businesses achieve their digital marketing goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">My Journey</h3>
                  <p className="text-muted-foreground">
                    I started my SEO career in 2013 at Ebuzznet in India, where I learned the foundations of keyword research and optimization. Over the years, I've worked with companies across the globe, including PearlLike Technology, Latched INC, Aphex Media, Gyalabs, and DigiMar, progressively taking on more responsibility and leadership roles.
                  </p>
                  <p className="text-muted-foreground">
                    My experience spans multiple industries and niches, from e-commerce and health essentials to CBD products, casino, and mental health websites. This diverse background has equipped me with a versatile skill set and the ability to adapt SEO strategies to different business contexts.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="neo-blur p-6 rounded-xl space-y-4">
                  <h3 className="text-xl font-semibold">Industries</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>E-commerce</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>Health & Wellness</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>CBD & Cannabis</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>Casino & Gaming</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>Mental Health</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work Experience</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A decade of progressive experience in SEO strategy and implementation across global companies.
              </p>
            </div>

            <div className="space-y-8">
              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">Team Lead</h3>
                  <p className="text-sm text-muted-foreground">10/2023 - Current</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">DigiMar, United States</p>
                <ul className="space-y-1 text-sm">
                  <li>• Led a cross-functional SEO team, managing writers, developers, and SEO specialists</li>
                  <li>• Managed SEO automation & reporting, leveraging tools like Google Analytics, Ahrefs, SEMrush</li>
                  <li>• Executed PR link-building campaigns, securing high-authority backlinks from top-tier publications</li>
                </ul>
              </div>
              
              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">SEO Head</h3>
                  <p className="text-sm text-muted-foreground">07/2022 - 10/2023</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Gyalabs.com, Hong Kong</p>
                <ul className="space-y-1 text-sm">
                  <li>• Conducted comprehensive technical SEO audits for essential oil websites</li>
                  <li>• Collaborated with cross-functional teams to integrate SEO best practices</li>
                </ul>
              </div>
              
              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">SEO Lead</h3>
                  <p className="text-sm text-muted-foreground">05/2020 - 07/2022</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Aphex Media, Malta</p>
                <ul className="space-y-1 text-sm">
                  <li>• Worked in Casino, Mental Health, Adult niches, deploying PBN and Rank Tracker systems</li>
                  <li>• Optimized website content and meta tags, resulting in a 25% increase in organic traffic</li>
                  <li>• Implemented technical SEO improvements, resulting in a 15% increase in website performance</li>
                </ul>
              </div>
              
              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">SEO Head</h3>
                  <p className="text-sm text-muted-foreground">01/2018 - 05/2020</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Latched INC, Canada</p>
                <ul className="space-y-1 text-sm">
                  <li>• Worked in CBD and drug niches, leading a team of SEO specialists</li>
                  <li>• Increased organic traffic by 30% through effective roadmap implementation</li>
                  <li>• Improved technical SEO across all company websites, resulting in 20% better performance</li>
                </ul>
              </div>

              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">Senior SEO Manager</h3>
                  <p className="text-sm text-muted-foreground">12/2016 - 12/2017 · 1 yr 1 mo</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Pearl Like Technology, India</p>
                <ul className="space-y-1 text-sm">
                  <li>• Implemented on-page and off-page SEO strategies, resulting in a 25% increase in organic search traffic</li>
                  <li>• Conducted keyword research, competitor analysis, and website audits to identify optimization opportunities</li>
                  <li>• Optimized website content, meta tags, and headings for improved organic visibility and user experience</li>
                  <li>• Monitored and reported on key SEO metrics, providing regular performance updates to clients</li>
                  <li>• Collaborated with development teams to implement technical SEO recommendations</li>
                  <li>• Executed link-building campaigns to enhance website authority and increase organic rankings</li>
                </ul>
              </div>

              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">Jr Search Engine Optimization Expert</h3>
                  <p className="text-sm text-muted-foreground">02/2015 - 12/2016 · 1 yr 11 mos</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Pearl Like Technology, Indore, Madhya Pradesh, India</p>
                <ul className="space-y-1 text-sm">
                  <li>• Specialized in outreach services, healthcare, e-commerce, and backlink building</li>
                  <li>• Assisted in keyword research and on-page optimization for various client websites</li>
                  <li>• Contributed to content optimization strategies to improve search engine rankings</li>
                </ul>
              </div>

              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">Assistant Search Engine Optimization Manager</h3>
                  <p className="text-sm text-muted-foreground">08/2013 - 01/2015 · 1 yr 6 mos</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Ebuzznet, India</p>
                <ul className="space-y-1 text-sm">
                  <li>• Conducted keyword research to guide content teams</li>
                  <li>• Prepared content briefs and coached content teams on creating SEO-optimized content</li>
                  <li>• Kept pace with SEO, search engine, social media, and internet marketing industry trends</li>
                  <li>• Gained expertise in XML Sitemaps and technical SEO fundamentals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Specialized skills developed over a decade in the SEO industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="neo-blur p-6 rounded-xl space-y-4">
                <h3 className="text-xl font-semibold">Technical SEO</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Site Architecture</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Schema Markup</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Page Speed Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Mobile Optimization</span>
                  </li>
                </ul>
              </div>

              <div className="neo-blur p-6 rounded-xl space-y-4">
                <h3 className="text-xl font-semibold">Content Optimization</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Keyword Research</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Content Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>On-Page Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Content Gap Analysis</span>
                  </li>
                </ul>
              </div>

              <div className="neo-blur p-6 rounded-xl space-y-4">
                <h3 className="text-xl font-semibold">Link Building</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>PR Outreach</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Guest Posting</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Backlink Analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Competitor Link Research</span>
                  </li>
                </ul>
              </div>

              <div className="neo-blur p-6 rounded-xl space-y-4">
                <h3 className="text-xl font-semibold">Tools & Software</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Google Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>SEMrush</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Ahrefs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Moz</span>
                  </li>
                </ul>
              </div>

              <div className="neo-blur p-6 rounded-xl space-y-4">
                <h3 className="text-xl font-semibold">Strategy</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>SEO Auditing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Competitor Analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>ROI Tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>KPI Development</span>
                  </li>
                </ul>
              </div>

              <div className="neo-blur p-6 rounded-xl space-y-4">
                <h3 className="text-xl font-semibold">Leadership</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Team Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Project Planning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Client Communication</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Training & Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Academic background in Computer Science and Engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">Master of Engineering</h3>
                  <p className="text-sm text-muted-foreground">2013-2015</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Computer Science and Engineering - Mumbai University</p>
                <p className="text-sm">
                  Specialized in data analytics and digital marketing applications, laying the groundwork for my SEO career.
                </p>
              </div>
              
              <div className="neo-blur p-6 rounded-xl">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="font-medium">Bachelor of Engineering</h3>
                  <p className="text-sm text-muted-foreground">2008-2013</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Computer Science and Engineering - Mumbai University</p>
                <p className="text-sm">
                  Core computer science fundamentals with electives in web development and digital communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-6 py-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A showcase of my SEO work with companies across various industries.
              </p>
            </div>

            {/* Replaced grid with Carousel */}
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
                loop: true, // Enable looping
              }}
            >
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  // Added responsive basis classes and padding
                  <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full"> {/* Added h-full for consistent item height */}
                      <ProjectCard {...project} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Added Previous/Next buttons, hidden on small screens */}
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container max-w-5xl px-6 py-24">
          <div className="flex flex-col space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to discuss SEO strategies? Feel free to reach out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <p>sudipkumar211@gmail.com</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <p>+91 8180861312</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <p>Mumbai, India</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <a href="https://www.linkedin.com/in/sudiip-kumr/" className="hover:underline">linkedin.com/in/sudiip-kumr</a>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="col-span-2">
                <Card className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" placeholder="How can I help you?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" rows={5} placeholder="Your message..." />
                    </div>
                    <Button type="submit" className="w-full md:w-auto flex items-center gap-2">
                      Send Message <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CV;

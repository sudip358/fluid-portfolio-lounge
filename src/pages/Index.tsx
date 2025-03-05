
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 md:py-32">
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
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full group px-6">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
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
      </div>
    </PageTransition>
  );
};

export default Index;

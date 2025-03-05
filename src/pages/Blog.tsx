
import { PageTransition } from "@/components/PageTransition";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  slug, 
  imageSrc = "https://placehold.co/600x400/f5f5f5/cccccc" 
}) => {
  return (
    <div className="flex flex-col h-full neo-blur rounded-xl overflow-hidden transition-all duration-300 hover-scale">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime} min read</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{excerpt}</p>
        
        <Link 
          to={`/blog/${slug}`} 
          className="text-sm font-medium flex items-center group"
        >
          Read More 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of SEO in 2024 and Beyond",
      excerpt: "Exploring the evolving landscape of SEO and what changes we can expect in the coming years.",
      date: "April 10, 2024",
      readTime: 8,
      slug: "future-of-seo-2024",
      imageSrc: "https://placehold.co/600x400/f5f5f5/cccccc?text=Future+of+SEO",
    },
    {
      title: "Technical SEO: The Foundation of Successful Rankings",
      excerpt: "Why technical SEO remains crucial and how to implement a solid technical foundation for your website.",
      date: "March 22, 2024",
      readTime: 6,
      slug: "technical-seo-foundation",
      imageSrc: "https://placehold.co/600x400/f5f5f5/cccccc?text=Technical+SEO",
    },
    {
      title: "Content Strategy for E-commerce: Beyond Product Descriptions",
      excerpt: "How to develop a comprehensive content strategy that drives traffic and conversions for e-commerce sites.",
      date: "March 8, 2024",
      readTime: 10,
      slug: "ecommerce-content-strategy",
      imageSrc: "https://placehold.co/600x400/f5f5f5/cccccc?text=E-commerce+Content",
    },
    {
      title: "Link Building in 2024: What Works and What Doesn't",
      excerpt: "Examining effective link building strategies in the current SEO landscape and what to avoid.",
      date: "February 25, 2024",
      readTime: 7,
      slug: "link-building-2024",
      imageSrc: "https://placehold.co/600x400/f5f5f5/cccccc?text=Link+Building",
    },
    {
      title: "The Role of AI in Modern SEO Practices",
      excerpt: "How artificial intelligence is changing the way we approach SEO and content creation.",
      date: "February 12, 2024",
      readTime: 9,
      slug: "ai-in-seo",
      imageSrc: "https://placehold.co/600x400/f5f5f5/cccccc?text=AI+in+SEO",
    },
    {
      title: "SEO for Niche Industries: Challenges and Opportunities",
      excerpt: "Strategies for optimizing websites in specialized industries with unique audiences and requirements.",
      date: "January 30, 2024",
      readTime: 8,
      slug: "seo-niche-industries",
      imageSrc: "https://placehold.co/600x400/f5f5f5/cccccc?text=Niche+SEO",
    },
  ];

  return (
    <PageTransition>
      <div className="container max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Insights and thoughts on SEO, digital marketing, and industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;

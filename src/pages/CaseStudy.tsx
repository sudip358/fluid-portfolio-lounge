import { useParams, Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

// Define the case study data structure
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  approach: string;
  implementation: string[];
  prLinkBuilding: string[];
  HAROLinkBuilding: string[];
  supportingActivities: string[];
  keywords: Array<{
    keyword: string;
    initialPosition: number | string;
    currentPosition: number;
  }>;
  linkBuildingResults: {
    highAuthorityLinks: number;
    midTierLinks: number;
    featuredPublications: string[];
    domainAuthorityIncrease: string;
    referralTrafficSources: number;
  };
  businessImpact: {
    organicTrafficIncrease: string;
    organicLeadIncrease: string;
    costPerAcquisitionDecrease: string;
    viralContentPieces: number;
    socialShares: number;
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  imageUrl: string;
  screenshots: string[];
}

// Case study data
const caseStudies: Record<string, CaseStudy> = {
  "pr-link-building": {
    id: "pr-link-building",
    title: "PR Link Building Campaign",
    client: "FinTech Startup",
    industry: "Financial Technology",
    duration: "3 months",
    challenge: "A growing FinTech startup offering personal finance management tools was struggling with low domain authority (DA 25), minimal backlink profile, and inability to rank for competitive keywords. Their competitors were dominating the SERP for key industry terms, and previous attempts at traditional link building had failed.",
    approach: "We conducted an initial comprehensive backlink audit and gap analysis, analyzed competitor backlink profiles, developed a content asset strategy for PR outreach, identified target publications for relationship building, created a custom outreach campaign, and established a link monitoring and reporting framework.",
    implementation: [
      "Developed 3 data-driven studies on consumer finance trends",
      "Created custom infographics and interactive tools as linkable assets",
      "Conducted personalized outreach to 150+ financial journalists and industry publications",
      "Implemented guest posting strategy for industry thought leadership"
    ],
    prLinkBuilding: [
      "Researched and identified top-tier financial publications",
      "Developed newsworthy angles for financial content",
      "Created personalized pitch templates for different publication types",
      "Established relationships with key financial journalists",
      "Secured features in major financial publications"
    ],
    HAROLinkBuilding: [
      "Implemented broken link building campaign targeting finance resource pages",
      "Created strategic resource content to fill identified gaps",
      "Provided expert commentary for industry news pieces",
      "Built strategic relationships with financial bloggers and influencers"
    ],
    supportingActivities: [
      "Optimized on-page elements for target landing pages",
      "Enhanced content to support link-worthy assets",
      "Implemented technical SEO improvements to maximize link equity flow",
      "Optimized internal linking structure"
    ],
    keywords: [
      { keyword: "personal budget app", initialPosition: 12, currentPosition: 1 },
      { keyword: "fintech budgeting tools", initialPosition: 9, currentPosition: 1 },
      { keyword: "expense tracking software", initialPosition: 17, currentPosition: 2 },
      { keyword: "personal finance management", initialPosition: 21, currentPosition: 3 },
      { keyword: "budget planning tools", initialPosition: "Not ranking", currentPosition: 3 },
      { keyword: "financial goal setting app", initialPosition: 25, currentPosition: 4 },
      { keyword: "money management software", initialPosition: 32, currentPosition: 5 },
      { keyword: "best finance tracking app", initialPosition: "Not ranking", currentPosition: 6 },
      { keyword: "personal finance dashboard", initialPosition: "Not ranking", currentPosition: 8 },
      { keyword: "financial planning software", initialPosition: 48, currentPosition: 10 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 53,
      midTierLinks: 28,
      featuredPublications: ["Forbes", "Bloomberg", "Business Insider", "CNBC", "Financial Times"],
      domainAuthorityIncrease: "35% (from DA 25 to DA 34)",
      referralTrafficSources: 12
    },
    businessImpact: {
      organicTrafficIncrease: "142%",
      organicLeadIncrease: "89%",
      costPerAcquisitionDecrease: "37%",
      viralContentPieces: 3,
      socialShares: 50000
    },
    testimonial: {
      quote: "The PR link building campaign transformed our online presence. Not only did we see dramatic improvements in our search rankings, but the quality of publications featuring our brand elevated our industry authority significantly.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "FinTech Startup"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=PR+Link+Building+Campaign",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=SERP:+personal+budget+app+-+Position+1+(Domain+Blurred)",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=SERP:+fintech+budgeting+tools+-+Position+1+(Domain+Blurred)",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=SERP:+expense+tracking+software+-+Position+2+(Domain+Blurred)"
    ]
  },
  "e-commerce-seo": {
    id: "e-commerce-seo",
    title: "E-commerce SEO Optimization",
    client: "Health Essentials",
    industry: "Health & Wellness E-commerce",
    duration: "6 months",
    challenge: "Health Essentials, an e-commerce platform specializing in natural health products, was struggling with poor organic visibility and high PPC costs. Despite having quality products and a well-designed website, they were unable to compete with larger retailers in organic search results. Their technical SEO foundation was weak, content was thin, and they lacked a structured approach to keyword targeting.",
    approach: "We developed a comprehensive SEO strategy focusing on technical optimization, content enhancement, and strategic keyword targeting. Our approach included a complete technical audit, competitive analysis, content gap identification, and implementation of a structured content calendar targeting high-intent commercial keywords.",
    implementation: [
      "Conducted comprehensive technical SEO audit and implemented fixes",
      "Developed category-specific content strategy with enhanced product descriptions",
      "Created informational content hub targeting top-of-funnel health queries",
      "Implemented schema markup for products, reviews, and FAQs"
    ],
    prLinkBuilding: [
      "Developed relationships with health and wellness bloggers",
      "Created shareable health guides and infographics",
      "Secured features in health publications and wellness websites",
      "Implemented digital PR campaign around seasonal health topics"
    ],
    HAROLinkBuilding: [
      "Identified broken links on health resource websites",
      "Created comprehensive health guides to replace broken content",
      "Reached out to webmasters with replacement content",
      "Built relationships with health industry influencers"
    ],
    supportingActivities: [
      "Optimized site architecture for improved crawlability",
      "Enhanced internal linking structure between related products",
      "Improved page load speed through image optimization and caching",
      "Implemented mobile-first design improvements"
    ],
    keywords: [
      { keyword: "natural immune boosters", initialPosition: 28, currentPosition: 1 },
      { keyword: "organic health supplements", initialPosition: 15, currentPosition: 2 },
      { keyword: "best natural sleep aids", initialPosition: 22, currentPosition: 3 },
      { keyword: "herbal anxiety remedies", initialPosition: "Not ranking", currentPosition: 3 },
      { keyword: "natural digestive health products", initialPosition: 35, currentPosition: 4 },
      { keyword: "organic vitamin supplements", initialPosition: 18, currentPosition: 5 },
      { keyword: "natural stress relief products", initialPosition: 42, currentPosition: 6 },
      { keyword: "best probiotics for gut health", initialPosition: "Not ranking", currentPosition: 7 },
      { keyword: "natural anti-inflammatory supplements", initialPosition: 31, currentPosition: 8 },
      { keyword: "organic skincare products", initialPosition: 45, currentPosition: 9 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 38,
      midTierLinks: 45,
      featuredPublications: ["Healthline", "MindBodyGreen", "Prevention", "Women's Health", "Men's Journal"],
      domainAuthorityIncrease: "42% (from DA 22 to DA 31)",
      referralTrafficSources: 18
    },
    businessImpact: {
      organicTrafficIncrease: "215%",
      organicLeadIncrease: "178%",
      costPerAcquisitionDecrease: "52%",
      viralContentPieces: 4,
      socialShares: 75000
    },
    testimonial: {
      quote: "The SEO optimization strategy completely transformed our business. We've seen a dramatic increase in organic traffic and sales, while significantly reducing our dependence on paid advertising. The ROI has been exceptional.",
      author: "Michael Chen",
      position: "E-commerce Director",
      company: "Health Essentials"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=E-commerce+SEO+Optimization",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Keyword+Ranking+Screenshot+1",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Keyword+Ranking+Screenshot+2",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Keyword+Ranking+Screenshot+3"
    ]
  },
  "casino-ranking": {
    id: "casino-ranking",
    title: "Casino Site Ranking System",
    client: "Vegas Online Gaming",
    industry: "Online Gambling & Gaming",
    duration: "4 months",
    challenge: "Vegas Online Gaming was struggling to compete in the highly competitive online casino market. Despite offering high-quality games and attractive bonuses, they were ranking on page 3-4 for most of their target keywords. Their main challenges included a weak backlink profile compared to established competitors, thin content across key money pages, and technical issues that prevented proper crawling of important gaming sections.",
    approach: "We developed a multi-faceted SEO strategy focusing on three key pillars: technical SEO improvements, comprehensive content strategy targeting specific content gaps, and an aggressive link building campaign. Our approach included a thorough competitor analysis of the top 5 ranking casino sites, identification of ranking patterns, and development of a customized ranking system that prioritized high-intent gambling keywords.",
    implementation: [
      "Conducted thorough technical audit identifying 40+ critical SEO issues",
      "Developed proprietary ranking algorithm to identify high-ROI keywords",
      "Created 150+ pages of targeted casino game content including reviews",
      "Implemented advanced schema markup for games, bonuses, and reviews"
    ],
    prLinkBuilding: [
      "Created data-driven gambling trend reports for industry publications",
      "Leveraged gambling industry statistics for PR outreach",
      "Secured features in iGaming Business, Gambling Insider, and Casino News Daily",
      "Developed 'responsible gambling' campaign for mainstream media coverage"
    ],
    HAROLinkBuilding: [
      "Monitored HARO queries daily for gambling industry opportunities",
      "Provided expert commentary on responsible gambling practices",
      "Connected with financial journalists for casino economy stories",
      "Offered exclusive quotes on gambling trends and regulatory changes"
    ],
    supportingActivities: [
      "Rearchitected site taxonomy for improved crawlability of game pages",
      "Implemented hreflang for international casino players targeting",
      "Developed custom EAT signals for gambling content creators",
      "Created internal linking structure based on game category relevance"
    ],
    keywords: [
      { keyword: "online slots real money", initialPosition: 37, currentPosition: 2 },
      { keyword: "best online casino bonuses", initialPosition: 28, currentPosition: 3 },
      { keyword: "live dealer blackjack", initialPosition: 42, currentPosition: 4 },
      { keyword: "online roulette games", initialPosition: 31, currentPosition: 5 },
      { keyword: "mobile casino apps", initialPosition: "Not ranking", currentPosition: 5 },
      { keyword: "casino payment methods", initialPosition: 45, currentPosition: 6 },
      { keyword: "trusted online casinos", initialPosition: 52, currentPosition: 7 },
      { keyword: "poker tournaments online", initialPosition: "Not ranking", currentPosition: 8 },
      { keyword: "casino welcome bonus", initialPosition: 36, currentPosition: 9 },
      { keyword: "high roller casino games", initialPosition: 40, currentPosition: 10 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 42,
      midTierLinks: 65,
      featuredPublications: ["iGaming Business", "Gambling Insider", "Casino News Daily", "SBC News", "European Gaming"],
      domainAuthorityIncrease: "48% (from DA 23 to DA 34)",
      referralTrafficSources: 22
    },
    businessImpact: {
      organicTrafficIncrease: "192%",
      organicLeadIncrease: "156%",
      costPerAcquisitionDecrease: "42%",
      viralContentPieces: 2,
      socialShares: 32000
    },
    testimonial: {
      quote: "The ranking system developed by Sudip's team revolutionized our approach to SEO. The detailed analysis of our competitors and the strategic implementation of technical and content improvements led to significant ranking improvements for our most valuable keywords. Our player acquisition costs have dropped dramatically.",
      author: "James Mitchell",
      position: "Head of Digital Marketing",
      company: "Vegas Online Gaming"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=Casino+Site+Ranking+System",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Keyword+Ranking+Screenshot+1",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Keyword+Ranking+Screenshot+2",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Keyword+Ranking+Screenshot+3"
    ]
  },
  "cbd-platform": {
    id: "cbd-platform",
    title: "CBD Product Platform",
    client: "Nature's Remedy",
    industry: "CBD & Wellness Products",
    duration: "5 months",
    challenge: "Nature's Remedy, a premium CBD product company, faced significant challenges in the highly regulated CBD market. Despite having high-quality products with third-party lab testing, they struggled with visibility issues due to advertising restrictions on CBD products. Their organic search presence was minimal, with key product pages failing to rank in the top 50 results for important CBD-related terms. Additionally, they faced fierce competition from established brands and struggled with conveying product credibility while navigating complex compliance requirements.",
    approach: "We developed a holistic SEO strategy that focused on establishing Nature's Remedy as an authoritative voice in the CBD space. Our approach centered on creating educational content around CBD benefits, overcoming the advertising limitations through organic search, and implementing structured data that enhanced product visibility while maintaining compliance. We conducted extensive keyword research focusing on educational and informational queries rather than direct product terms to avoid regulatory issues.",
    implementation: [
      "Conducted comprehensive competitive analysis of top 10 CBD websites in the market",
      "Developed CBD-specific content strategy focusing on educational topics to build authority",
      "Created detailed product schema implementation that maintained FDA compliance",
      "Implemented technical improvements addressing crawlability issues of product catalog"
    ],
    prLinkBuilding: [
      "Created educational CBD guides for health and wellness publications",
      "Developed research-backed content on CBD benefits for specific conditions",
      "Secured features in health publications focusing on alternative remedies",
      "Leveraged third-party lab testing data for credibility in outreach"
    ],
    HAROLinkBuilding: [
      "Responded to health reporter queries about CBD research and benefits",
      "Provided expert commentary on CBD regulatory developments",
      "Connected with wellness journalists covering natural remedies",
      "Offered insights for articles about alternative pain management"
    ],
    supportingActivities: [
      "Developed comprehensive FAQ sections addressing CBD safety and efficacy",
      "Created educational content hub establishing topical authority",
      "Implemented structured data for products within FDA compliance guidelines",
      "Optimized site architecture to separate educational and product content"
    ],
    keywords: [
      { keyword: "cbd oil benefits", initialPosition: "Not ranking", currentPosition: 3 },
      { keyword: "cbd for anxiety research", initialPosition: 46, currentPosition: 4 },
      { keyword: "full spectrum cbd explained", initialPosition: 38, currentPosition: 2 },
      { keyword: "cbd dosage guide", initialPosition: 52, currentPosition: 5 },
      { keyword: "cbd vs thc differences", initialPosition: "Not ranking", currentPosition: 6 },
      { keyword: "cbd third party testing", initialPosition: 35, currentPosition: 1 },
      { keyword: "organic cbd products", initialPosition: 49, currentPosition: 8 },
      { keyword: "cbd for pain management", initialPosition: 44, currentPosition: 7 },
      { keyword: "cbd legality by state", initialPosition: 30, currentPosition: 4 },
      { keyword: "how cbd works endocannabinoid", initialPosition: 28, currentPosition: 3 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 36,
      midTierLinks: 58,
      featuredPublications: ["Healthline", "Medical News Today", "Remedy Review", "Project CBD", "Hemp Industry Daily"],
      domainAuthorityIncrease: "54% (from DA 18 to DA 28)",
      referralTrafficSources: 16
    },
    businessImpact: {
      organicTrafficIncrease: "278%",
      organicLeadIncrease: "183%",
      costPerAcquisitionDecrease: "61%",
      viralContentPieces: 3,
      socialShares: 45000
    },
    testimonial: {
      quote: "The strategic approach to content creation and SEO for our CBD platform transformed our business. By positioning us as an educational resource rather than just a product seller, we've seen incredible growth in organic traffic and customer trust. The technical implementation was flawless, navigating the complex compliance landscape while still achieving impressive rankings.",
      author: "Rachel Green",
      position: "Founder & CEO",
      company: "Nature's Remedy"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=CBD+Product+Platform",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=CBD+Keyword+Ranking+Screenshot+1",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=CBD+Keyword+Ranking+Screenshot+2",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=CBD+Keyword+Ranking+Screenshot+3"
    ]
  },
  "essential-oils": {
    id: "essential-oils",
    title: "Essential Oils Website",
    client: "Aromatherapy Essentials",
    industry: "Natural Health & Aromatherapy",
    duration: "6 months",
    challenge: "Aromatherapy Essentials, a family-owned essential oils business, was struggling to compete with larger brands in the aromatherapy space. Their website had poor visibility in search results, with most of their product pages not ranking in the top 100 results. They also faced a significant content gap compared to competitors, with minimal educational material about essential oil benefits and applications. Additionally, a recent Google core update had negatively impacted their rankings, resulting in a 40% drop in organic traffic over three months.",
    approach: "We developed a comprehensive SEO strategy focusing on three key areas: establishing topical authority through extensive educational content, addressing technical SEO issues limiting their visibility, and implementing a structured data strategy for enhanced product visibility. Our content gap analysis revealed opportunities to rank for informational queries around specific essential oil benefits that competitors had overlooked.",
    implementation: [
      "Conducted comprehensive SEO audit revealing 65+ technical issues affecting indexation",
      "Developed topical authority content strategy focused on essential oil applications",
      "Created detailed product schema that highlighted unique oil properties and sourcing",
      "Implemented taxonomic restructuring to better organize oils by benefit/application"
    ],
    prLinkBuilding: [
      "Developed relationships with natural health bloggers and publications",
      "Created educational infographics on essential oil benefits for content sharing",
      "Secured expert interview placements in wellness publications",
      "Leveraged sustainable sourcing practices for green lifestyle outreach"
    ],
    HAROLinkBuilding: [
      "Responded to queries about natural remedies and aromatherapy benefits",
      "Provided expert commentary on essential oil trends and applications",
      "Connected with wellness journalists for natural sleep aid articles",
      "Offered insights for stress management and natural wellness stories"
    ],
    supportingActivities: [
      "Implemented comprehensive internal linking strategy based on oil relationships",
      "Created detailed essential oil guides targeting specific wellness concerns",
      "Developed oil-specific FAQ sections addressing customer questions",
      "Improved site speed through image optimization and server configuration"
    ],
    keywords: [
      { keyword: "lavender essential oil benefits", initialPosition: 65, currentPosition: 2 },
      { keyword: "tea tree oil uses skin", initialPosition: 88, currentPosition: 3 },
      { keyword: "essential oils for sleep", initialPosition: "Not ranking", currentPosition: 4 },
      { keyword: "peppermint oil headache relief", initialPosition: 72, currentPosition: 1 },
      { keyword: "essential oil diffuser recipes", initialPosition: 53, currentPosition: 5 },
      { keyword: "organic essential oils guide", initialPosition: "Not ranking", currentPosition: 3 },
      { keyword: "eucalyptus oil congestion", initialPosition: 41, currentPosition: 2 },
      { keyword: "citrus essential oils benefits", initialPosition: 94, currentPosition: 6 },
      { keyword: "essential oil blending guide", initialPosition: 55, currentPosition: 3 },
      { keyword: "essential oils for anxiety", initialPosition: 62, currentPosition: 8 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 28,
      midTierLinks: 47,
      featuredPublications: ["MindBodyGreen", "Prevention", "Natural Health Magazine", "Wellness Mama", "Mother Earth Living"],
      domainAuthorityIncrease: "62% (from DA 16 to DA 26)",
      referralTrafficSources: 19
    },
    businessImpact: {
      organicTrafficIncrease: "312%",
      organicLeadIncrease: "204%",
      costPerAcquisitionDecrease: "58%",
      viralContentPieces: 4,
      socialShares: 38000
    },
    testimonial: {
      quote: "The transformation of our website has been nothing short of remarkable. The strategic approach to content development and technical SEO implementation has positioned us as a leading resource in the essential oils space. Our organic traffic has tripled, and we're now ranking for keywords we never thought possible for a business of our size.",
      author: "Amanda Johnson",
      position: "Co-Founder",
      company: "Aromatherapy Essentials"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=Essential+Oils+Website",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Essential+Oils+Ranking+Screenshot+1",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Essential+Oils+Ranking+Screenshot+2",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Essential+Oils+Ranking+Screenshot+3"
    ]
  },
  "mental-health": {
    id: "mental-health",
    title: "Mental Health Platform",
    client: "Mind Wellness Center",
    industry: "Mental Health & Wellness",
    duration: "7 months",
    challenge: "Mind Wellness Center, an emerging mental health resources platform, was struggling to gain visibility in the competitive mental health space. Despite offering high-quality resources and content written by certified therapists, they were unable to rank for valuable mental health keywords. They faced competition from established medical authorities like WebMD and Healthline, as well as large therapy platforms. Additionally, their user engagement metrics were poor, with high bounce rates and low time-on-site, which further hurt their rankings.",
    approach: "We developed a comprehensive E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) focused SEO strategy to position Mind Wellness Center as a trusted authority in the mental health space. Our approach included creating author expertise signals, comprehensive content gap analysis against top medical sites, and implementing schema markup to enhance visibility for mental health topics. We also conducted a technical audit focusing on Core Web Vitals and mobile experience to improve user engagement metrics.",
    implementation: [
      "Conducted extensive competitor analysis of top 15 mental health websites",
      "Performed comprehensive content gap analysis identifying 200+ topic opportunities",
      "Implemented advanced E-E-A-T signals including therapist credentials and citations",
      "Developed content clusters around specific mental health conditions and treatments"
    ],
    prLinkBuilding: [
      "Created mental health research summaries for media outreach",
      "Developed relationships with health journalists covering mental wellness",
      "Leveraged therapist expertise for expert commentary in publications",
      "Secured features in major health publications and psychology resources"
    ],
    HAROLinkBuilding: [
      "Monitored daily for mental health-related media queries",
      "Provided expert therapist commentary on mental health topics",
      "Connected with journalists covering anxiety, depression, and wellness",
      "Offered data-backed insights on mental health trends and treatments"
    ],
    supportingActivities: [
      "Optimized site architecture to improve content discovery and crawlability",
      "Implemented comprehensive schema markup for mental health content",
      "Created clear information architecture for different mental health topics",
      "Developed custom CTAs based on user intent to improve engagement metrics"
    ],
    keywords: [
      { keyword: "anxiety symptoms treatment", initialPosition: 56, currentPosition: 3 },
      { keyword: "depression self help techniques", initialPosition: "Not ranking", currentPosition: 4 },
      { keyword: "therapy types compared", initialPosition: 43, currentPosition: 2 },
      { keyword: "mental health resources online", initialPosition: 38, currentPosition: 5 },
      { keyword: "signs of burnout prevention", initialPosition: 61, currentPosition: 4 },
      { keyword: "how to find therapist guide", initialPosition: 52, currentPosition: 3 },
      { keyword: "cognitive behavioral therapy explanation", initialPosition: 47, currentPosition: 2 },
      { keyword: "mindfulness exercises for anxiety", initialPosition: "Not ranking", currentPosition: 5 },
      { keyword: "stress management techniques", initialPosition: 85, currentPosition: 7 },
      { keyword: "mental health self assessment", initialPosition: 74, currentPosition: 6 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 45,
      midTierLinks: 68,
      featuredPublications: ["Psychology Today", "Verywell Mind", "Medical News Today", "Psych Central", "NAMI Blog"],
      domainAuthorityIncrease: "75% (from DA 20 to DA 35)",
      referralTrafficSources: 27
    },
    businessImpact: {
      organicTrafficIncrease: "385%",
      organicLeadIncrease: "243%",
      costPerAcquisitionDecrease: "64%",
      viralContentPieces: 5,
      socialShares: 92000
    },
    testimonial: {
      quote: "The SEO strategy transformed our online visibility in the mental health space. By implementing a robust E-E-A-T approach and addressing our content gaps, we've established ourselves as a trusted resource for people seeking mental health information. The increase in organic traffic has allowed us to help more people access the resources they need during difficult times.",
      author: "Dr. Lisa Matthews",
      position: "Clinical Director",
      company: "Mind Wellness Center"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=Mental+Health+Platform",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Mental+Health+Ranking+Screenshot+1",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Mental+Health+Ranking+Screenshot+2",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Mental+Health+Ranking+Screenshot+3"
    ]
  },
  "programmatic-seo": {
    id: "programmatic-seo",
    title: "Programmatic SEO",
    client: "Global Travel Directory",
    industry: "Travel & Tourism",
    duration: "8 months",
    challenge: "Global Travel Directory, a comprehensive travel information website, was struggling to compete with established travel giants despite having a vast database of valuable information. Their key challenge was scale - they needed to rank for thousands of location-specific travel queries but lacked the resources to manually create content for each destination. Additionally, they faced technical limitations with their existing infrastructure, which couldn't efficiently handle the necessary volume of pages while maintaining quality and uniqueness.",
    approach: "We implemented a sophisticated programmatic SEO strategy that leveraged their existing destination database to automatically generate thousands of high-quality, unique landing pages at scale. Our approach combined structured data automation, template optimization, and data-driven content generation. We developed a system that could create location-specific content that was both search engine and user-friendly, while maintaining E-E-A-T signals necessary for travel content.",
    implementation: [
      "Developed modular content templates for different destination types (cities, regions, attractions)",
      "Created data-driven algorithms to generate unique descriptions for 10,000+ locations",
      "Implemented natural language processing to ensure content readability and uniqueness",
      "Built automated internal linking system based on geographical and thematic relevance"
    ],
    prLinkBuilding: [
      "Created data-driven travel trend reports for major travel publications",
      "Developed relationships with travel journalists and bloggers",
      "Secured features in major travel and lifestyle publications",
      "Leveraged unique destination data for exclusive media stories"
    ],
    HAROLinkBuilding: [
      "Monitored travel and tourism queries across HARO and similar platforms",
      "Provided destination-specific data for travel journalists",
      "Offered expert commentary on travel trends and destinations",
      "Connected with reporters writing destination guides and travel features"
    ],
    supportingActivities: [
      "Implemented dynamic XML sitemaps to manage indexation of large-scale content",
      "Developed monitoring system to track performance of programmatic pages",
      "Created automated quality control to identify and fix low-performing content",
      "Optimized server response times and page speed for large-scale content delivery"
    ],
    keywords: [
      { keyword: "things to do in [city]", initialPosition: "Not ranking", currentPosition: 4 },
      { keyword: "best restaurants in [city]", initialPosition: 65, currentPosition: 7 },
      { keyword: "hotels near [attraction]", initialPosition: "Not ranking", currentPosition: 3 },
      { keyword: "[city] travel guide", initialPosition: 48, currentPosition: 5 },
      { keyword: "how to get to [destination]", initialPosition: 72, currentPosition: 6 },
      { keyword: "[city] weather best time visit", initialPosition: "Not ranking", currentPosition: 4 },
      { keyword: "[landmark] visiting hours", initialPosition: 51, currentPosition: 2 },
      { keyword: "[city] public transportation", initialPosition: 43, currentPosition: 5 },
      { keyword: "best time to visit [region]", initialPosition: 37, currentPosition: 3 },
      { keyword: "[country] visa requirements", initialPosition: 29, currentPosition: 1 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 68,
      midTierLinks: 125,
      featuredPublications: ["Lonely Planet", "Travel + Leisure", "Condé Nast Traveler", "National Geographic", "Forbes Travel"],
      domainAuthorityIncrease: "108% (from DA 24 to DA 50)",
      referralTrafficSources: 43
    },
    businessImpact: {
      organicTrafficIncrease: "723%",
      organicLeadIncrease: "412%",
      costPerAcquisitionDecrease: "76%",
      viralContentPieces: 7,
      socialShares: 145000
    },
    testimonial: {
      quote: "The programmatic SEO strategy completely transformed our business. We went from struggling to compete with major travel sites to dominating thousands of location-specific searches. The ability to scale our content while maintaining quality has been a game-changer, and the ROI on this project has exceeded our expectations many times over.",
      author: "David Wilson",
      position: "CEO",
      company: "Global Travel Directory"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=Programmatic+SEO+Case+Study",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Programmatic+SEO+Screenshot+1",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Programmatic+SEO+Screenshot+2",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Programmatic+SEO+Screenshot+3"
    ]
  },
  "shopify-seo": {
    id: "shopify-seo",
    title: "Shopify SEO",
    client: "Urban Botanicals",
    industry: "Home & Garden E-commerce",
    duration: "5 months",
    challenge: "Urban Botanicals, a premium houseplant and gardening e-commerce store built on Shopify, was struggling with poor organic visibility and high dependence on paid advertising. Despite having high-quality products with excellent margins, they were unable to rank for competitive houseplant and gardening terms. Their Shopify site had numerous technical SEO issues including duplicate content, poor URL structure, and inadequate product schema. Additionally, they faced stiff competition from both established garden centers and large e-commerce platforms.",
    approach: "We implemented a comprehensive Shopify-specific SEO strategy that addressed the platform's inherent limitations while maximizing its strengths. Our approach combined technical Shopify optimization, content enhancement for category and product pages, and the development of a content marketing strategy targeting informational gardening queries. We also implemented advanced structured data tailored to their product catalog to enhance visibility in product-focused searches.",
    implementation: [
      "Conducted comprehensive Shopify technical audit identifying 30+ platform-specific issues",
      "Implemented custom Shopify solutions to resolve URL structure and pagination problems",
      "Developed enhanced product schema for gardening products with unique attributes",
      "Created plant care guides integrated with product pages to boost relevance and engagement"
    ],
    prLinkBuilding: [
      "Developed relationships with home and garden publications",
      "Created seasonal plant trend reports for media outreach",
      "Secured features in major home decor and lifestyle magazines",
      "Leveraged sustainable and eco-friendly practices for green living publications"
    ],
    HAROLinkBuilding: [
      "Monitored home, garden and sustainability queries via HARO",
      "Provided expert plant care commentary for lifestyle articles",
      "Connected with journalists writing about indoor gardening trends",
      "Offered insights for home improvement and decorating stories"
    ],
    supportingActivities: [
      "Optimized Shopify theme code for improved page speed and mobile experience",
      "Implemented custom collection structure to create topical relevance clusters",
      "Developed content strategy for plant care blog integrated with product pages",
      "Created advanced filtering system with optimized faceted navigation"
    ],
    keywords: [
      { keyword: "buy monstera deliciosa online", initialPosition: 42, currentPosition: 1 },
      { keyword: "low light indoor plants", initialPosition: "Not ranking", currentPosition: 3 },
      { keyword: "best soil for succulents", initialPosition: 35, currentPosition: 2 },
      { keyword: "how to care for fiddle leaf fig", initialPosition: 23, currentPosition: 1 },
      { keyword: "pet friendly houseplants", initialPosition: 47, currentPosition: 4 },
      { keyword: "indoor plant pots ceramic", initialPosition: 56, currentPosition: 5 },
      { keyword: "plant care beginner guide", initialPosition: "Not ranking", currentPosition: 3 },
      { keyword: "propagation supplies kit", initialPosition: 28, currentPosition: 2 },
      { keyword: "air purifying houseplants", initialPosition: 61, currentPosition: 6 },
      { keyword: "rare houseplants collection", initialPosition: "Not ranking", currentPosition: 1 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 32,
      midTierLinks: 54,
      featuredPublications: ["Better Homes & Gardens", "Apartment Therapy", "Real Simple", "Gardenista", "House Beautiful"],
      domainAuthorityIncrease: "67% (from DA 18 to DA 30)",
      referralTrafficSources: 22
    },
    businessImpact: {
      organicTrafficIncrease: "347%",
      organicLeadIncrease: "215%",
      costPerAcquisitionDecrease: "58%",
      viralContentPieces: 3,
      socialShares: 68000
    },
    testimonial: {
      quote: "The Shopify SEO strategy transformed our online business. Before working with Sudip, we were almost entirely dependent on paid ads. Now, organic traffic drives the majority of our sales, and we're ranking for competitive terms we never thought possible. The most impressive part was how they worked within Shopify's constraints to achieve these results.",
      author: "Elena Rodriguez",
      position: "Founder",
      company: "Urban Botanicals"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=Shopify+SEO+Case+Study",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Shopify+SEO+Screenshot+1",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Shopify+SEO+Screenshot+2",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=Shopify+SEO+Screenshot+3"
    ]
  },
  "b2b-seo": {
    id: "b2b-seo",
    title: "B2B SEO",
    client: "TechSolutions Enterprise",
    industry: "Enterprise Software Solutions",
    duration: "9 months",
    challenge: "TechSolutions Enterprise, a B2B software provider specializing in enterprise resource planning (ERP) systems, was struggling to generate qualified leads through organic search. Despite having an industry-leading product, they were being outranked by competitors for high-intent keywords. Their site suffered from poor technical implementation, overly technical content that didn't address buyer needs, and a weak backlink profile compared to established competitors. Additionally, they faced challenges with extremely long sales cycles typical in the B2B space.",
    approach: "We developed a comprehensive B2B SEO strategy focusing on the entire buyer journey from awareness to consideration to decision. Our approach centered on creating content for each stage of the sales funnel, implementing technical improvements to showcase expertise, and developing a thought leadership link building campaign. We conducted detailed competitor analysis and identified content gaps specifically at the decision stage where purchase intent was highest.",
    implementation: [
      "Conducted comprehensive B2B buyer journey mapping to align SEO with sales funnel",
      "Developed content clusters around specific pain points and solutions",
      "Implemented advanced schema markup for software products and business services",
      "Created conversion-focused landing pages for high-intent keywords"
    ],
    prLinkBuilding: [
      "Developed industry research reports and market analysis for media outreach",
      "Created thought leadership content featuring C-suite executives",
      "Secured features in major business and technology publications",
      "Leveraged case studies and success metrics for industry credibility"
    ],
    HAROLinkBuilding: [
      "Monitored business technology queries across HARO and similar platforms",
      "Provided expert commentary on enterprise software trends",
      "Connected with business journalists covering digital transformation",
      "Offered data-backed insights for technology and business publications"
    ],
    supportingActivities: [
      "Implemented lead scoring system to track SEO contribution to sales pipeline",
      "Created gated content assets strategically placed within the buyer journey",
      "Developed custom analytics to measure long B2B conversion cycles",
      "Optimized technical aspects specifically for B2B buying committee experience"
    ],
    keywords: [
      { keyword: "enterprise resource planning solutions", initialPosition: 38, currentPosition: 1 },
      { keyword: "ERP system implementation guide", initialPosition: 45, currentPosition: 2 },
      { keyword: "cloud ERP vs on-premise comparison", initialPosition: "Not ranking", currentPosition: 3 },
      { keyword: "best enterprise software for manufacturing", initialPosition: 52, currentPosition: 4 },
      { keyword: "ERP ROI calculator", initialPosition: 27, currentPosition: 1 },
      { keyword: "total cost of ownership ERP", initialPosition: 61, currentPosition: 5 },
      { keyword: "ERP implementation timeline", initialPosition: "Not ranking", currentPosition: 2 },
      { keyword: "enterprise software selection criteria", initialPosition: 43, currentPosition: 3 },
      { keyword: "business process automation software", initialPosition: 56, currentPosition: 6 },
      { keyword: "ERP system integration with CRM", initialPosition: 32, currentPosition: 2 }
    ],
    linkBuildingResults: {
      highAuthorityLinks: 42,
      midTierLinks: 68,
      featuredPublications: ["Forbes", "Harvard Business Review", "TechCrunch", "CIO Magazine", "ZDNet"],
      domainAuthorityIncrease: "83% (from DA 23 to DA 42)",
      referralTrafficSources: 31
    },
    businessImpact: {
      organicTrafficIncrease: "267%",
      organicLeadIncrease: "186%",
      costPerAcquisitionDecrease: "53%",
      viralContentPieces: 4,
      socialShares: 52000
    },
    testimonial: {
      quote: "The B2B SEO strategy delivered exceptional results for our enterprise software business. Not only did we see significant improvements in overall organic traffic, but more importantly, the quality of leads generated through organic search is outstanding. Our sales team now regularly receives highly qualified prospects who are much deeper in the buying cycle, leading to shorter sales processes and higher conversion rates.",
      author: "Jonathan Stevens",
      position: "Chief Marketing Officer",
      company: "TechSolutions Enterprise"
    },
    imageUrl: "https://placehold.co/1200x600/f5f5f5/cccccc?text=B2B+SEO+Case+Study",
    screenshots: [
      "https://placehold.co/800x600/f5f5f5/cccccc?text=B2B+SEO+Screenshot+1",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=B2B+SEO+Screenshot+2",
      "https://placehold.co/800x600/f5f5f5/cccccc?text=B2B+SEO+Screenshot+3"
    ]
  }
};

// Contact Form Component
const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      toast.error("Form reference not found. Please try again.");
      setIsSubmitting(false);
      return;
    }

    // Use your EmailJS credentials here
    const serviceID = 'service_yocc99m';
    const templateID = 'template_by403bc';
    const publicKey = 'e3b2niNHadD7KIOc-';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setShowSuccessDialog(true);
          // Clear form fields
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Card className="p-6">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" name="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" name="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <Input id="subject" name="subject" placeholder="How can I help you?" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" name="message" rows={5} placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto flex items-center gap-2">
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="h-4 w-4" />
          </Button>
        </form>
      </Card>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Message Sent!</AlertDialogTitle>
            <AlertDialogDescription>
              Congrats! Your message has been sent successfully. Our team is now on it like a ninja! They'll reach out to you soon. Until then, put your feet up, relax, and maybe grab a snack – you've earned it!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudies[id] : null;

  if (!caseStudy) {
    return (
      <PageTransition>
        <div className="container max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Case Study Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">The case study you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative w-full bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <div className="flex flex-col space-y-6">
            <Button variant="ghost" asChild className="w-fit -ml-4">
              <Link to="/#projects" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {caseStudy.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">CLIENT</p>
                <p className="font-medium">{caseStudy.client}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">INDUSTRY</p>
                <p className="font-medium">{caseStudy.industry}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">DURATION</p>
                <p className="font-medium">{caseStudy.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section>
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">The Challenge</h2>
                <p className="text-muted-foreground">{caseStudy.challenge}</p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Our Approach</h2>
                <p className="text-muted-foreground">{caseStudy.approach}</p>
              </div>
            </div>
            
            <div>
              <Card className="p-6 neo-blur">
                <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">{caseStudy.businessImpact.organicTrafficIncrease}</span>
                    <span className="text-sm text-muted-foreground">Organic Traffic Increase</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">{caseStudy.linkBuildingResults.highAuthorityLinks}</span>
                    <span className="text-sm text-muted-foreground">High-Authority Backlinks</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">{caseStudy.businessImpact.organicLeadIncrease}</span>
                    <span className="text-sm text-muted-foreground">Organic Lead Increase</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">{caseStudy.linkBuildingResults.domainAuthorityIncrease}</span>
                    <span className="text-sm text-muted-foreground">Domain Authority Growth</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Implementation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">PR Link Building Strategy</h3>
                <ul className="space-y-2">
                  {caseStudy.prLinkBuilding.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">HARO Link Building Technique</h3>
                <ul className="space-y-2">
                  {caseStudy.HAROLinkBuilding.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Supporting SEO Activities</h3>
                <ul className="space-y-2">
                  {caseStudy.supportingActivities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Implementation Timeline</h3>
                <div className="neo-blur p-6 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">1</div>
                      <div>
                        <h4 className="font-medium">Week 1-2: Strategy & Asset Development</h4>
                        <p className="text-sm text-muted-foreground">Audit, competitor analysis, and content planning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">2</div>
                      <div>
                        <h4 className="font-medium">Week 3-6: Initial Outreach & Content Creation</h4>
                        <p className="text-sm text-muted-foreground">First wave of outreach and content development</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">3</div>
                      <div>
                        <h4 className="font-medium">Week 7-10: Relationship Building & Follow-ups</h4>
                        <p className="text-sm text-muted-foreground">Nurturing relationships and securing initial placements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">4</div>
                      <div>
                        <h4 className="font-medium">Week 11-12: Final Push & Reporting</h4>
                        <p className="text-sm text-muted-foreground">Last wave of outreach and comprehensive reporting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section>
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Results</h2>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Top 10 Keywords & SERP Positions</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-2">Keyword</th>
                      <th className="text-center py-4 px-2">Initial Position</th>
                      <th className="text-center py-4 px-2">Current Position</th>
                      <th className="text-center py-4 px-2">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseStudy.keywords.map((keyword, index) => {
                      const initialPos = typeof keyword.initialPosition === 'number' ? keyword.initialPosition : 100;
                      const improvement = typeof initialPos === 'number' ? initialPos - keyword.currentPosition : '—';
                      
                      return (
                        <tr key={index} className="border-b">
                          <td className="py-4 px-2 font-medium">{keyword.keyword}</td>
                          <td className="text-center py-4 px-2">{keyword.initialPosition}</td>
                          <td className="text-center py-4 px-2 font-bold text-primary">{keyword.currentPosition}</td>
                          <td className="text-center py-4 px-2">{improvement}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Link Building Achievements</h3>
                <div className="neo-blur p-6 rounded-xl space-y-4">
                  <div className="flex justify-between items-center">
                    <span>High-Authority Backlinks (DA 50+)</span>
                    <span className="font-bold">{caseStudy.linkBuildingResults.highAuthorityLinks}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mid-Tier Publications (DA 30-49)</span>
                    <span className="font-bold">{caseStudy.linkBuildingResults.midTierLinks}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domain Authority Increase</span>
                    <span className="font-bold">{caseStudy.linkBuildingResults.domainAuthorityIncrease}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Referral Traffic Sources</span>
                    <span className="font-bold">{caseStudy.linkBuildingResults.referralTrafficSources}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">Featured Publications</h4>
                  <div className="flex flex-wrap gap-4">
                    {caseStudy.linkBuildingResults.featuredPublications.map((pub, index) => (
                      <div key={index} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium">
                        {pub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Business Impact</h3>
                <div className="neo-blur p-6 rounded-xl space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Organic Traffic Increase</span>
                    <span className="font-bold">{caseStudy.businessImpact.organicTrafficIncrease}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Organic Lead Generation Increase</span>
                    <span className="font-bold">{caseStudy.businessImpact.organicLeadIncrease}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cost Per Acquisition Decrease</span>
                    <span className="font-bold">{caseStudy.businessImpact.costPerAcquisitionDecrease}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Viral Content Pieces</span>
                    <span className="font-bold">{caseStudy.businessImpact.viralContentPieces}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Social Shares</span>
                    <span className="font-bold">{caseStudy.businessImpact.socialShares.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight mb-12">SERP Screenshots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.screenshots.map((screenshot, index) => {
              const keywordData = caseStudy.keywords[index] || caseStudy.keywords[0];
              
              return (
                <div key={index} className="neo-blur rounded-xl overflow-hidden">
                  <img
                    src={screenshot}
                    alt={`SERP Screenshot ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-primary">Position {keywordData.currentPosition}</p>
                      <p className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {keywordData.initialPosition !== "Not ranking"
                          ? `Improved from position ${keywordData.initialPosition}`
                          : "New Ranking"}
                      </p>
                    </div>
                    <p className="text-base font-medium">
                      Keyword: "{keywordData.keyword}"
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Note: Domain name has been blurred for client confidentiality
                    </p>
                  </div>
                </div>
              );
            })}
            {/* Additional images added based on feedback */}
            {caseStudy.screenshots.length < caseStudy.keywords.length && caseStudy.keywords.slice(caseStudy.screenshots.length).map((keyword, index) => (
              <div key={`additional-${index}`} className="neo-blur rounded-xl overflow-hidden mt-8">
                <img
                  src={`https://placehold.co/800x600/f5f5f5/cccccc?text=SERP:+${keyword.keyword.replace(/\s+/g, '+')}+-Position+${keyword.currentPosition}+(Domain+Blurred)`}
                  alt={`Additional SERP Screenshot ${index + caseStudy.screenshots.length + 1}`}
                  className="w-full h-auto"
                />
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-primary">Position {keyword.currentPosition}</p>
                    <p className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {keyword.initialPosition !== "Not ranking"
                        ? `Improved from position ${keyword.initialPosition}`
                        : "New Ranking"}
                    </p>
                  </div>
                  <p className="text-base font-medium">
                    Keyword: "{keyword.keyword}"
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Note: Domain name has been blurred for client confidentiality
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <section>
          <div className="container max-w-5xl mx-auto px-6 py-24">
            <div className="neo-blur p-8 md:p-12 rounded-xl">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="text-6xl text-primary">"</div>
                <p className="text-xl md:text-2xl italic max-w-3xl">
                  {caseStudy.testimonial.quote}
                </p>
                <div className="space-y-1">
                  <p className="font-semibold">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Methodology Section */}
      <section className="bg-secondary/30">
        <div className="container max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Our Methodology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">PR Link Building Approach</h3>
              <p className="text-muted-foreground">
                Our PR link building approach focuses on creating newsworthy content that naturally attracts high-authority publications. 
                We identify trending topics in the financial industry, develop data-driven studies, and craft compelling narratives that 
                journalists find valuable for their readers.
              </p>
              <p className="text-muted-foreground">
                By positioning our client as an industry thought leader and providing exclusive insights, we secure placements in 
                top-tier publications that significantly boost domain authority and brand credibility.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">HARO Link Building Technique</h3>
              <p className="text-muted-foreground">
                The HARO technique involves identifying broken links on high-authority resource pages and offering replacement
                content that fills the gap. We create comprehensive resources that address specific needs in the financial industry, 
                making them natural candidates for replacing broken links.
              </p>
              <p className="text-muted-foreground">
                This approach provides immediate value to webmasters while securing valuable backlinks from established domains, 
                creating a win-win scenario that results in sustainable link growth.
              </p>
            </div>
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
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CaseStudy;
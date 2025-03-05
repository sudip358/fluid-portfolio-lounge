
import { PageTransition } from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="container max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A seasoned SEO professional with over 10 years of experience in helping businesses achieve their digital marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">My Journey</h2>
                <p className="text-muted-foreground">
                  I started my SEO career in 2013 at Ebuzznet in India, where I learned the foundations of keyword research and optimization. Over the years, I've worked with companies across the globe, including PearlLike Technology, Latched INC, Aphex Media, Gyalabs, and DigiMar, progressively taking on more responsibility and leadership roles.
                </p>
                <p className="text-muted-foreground">
                  My experience spans multiple industries and niches, from e-commerce and health essentials to CBD products, casino, and mental health websites. This diverse background has equipped me with a versatile skill set and the ability to adapt SEO strategies to different business contexts.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Education</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium">Master of Engineering</h3>
                    <p className="text-sm text-muted-foreground">Computer Science and Engineering - Mumbai University (2013-2015)</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Bachelor of Engineering</h3>
                    <p className="text-sm text-muted-foreground">Computer Science and Engineering - Mumbai University (2008-2013)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="neo-blur p-6 rounded-xl space-y-4">
                <h2 className="text-xl font-semibold">Skills</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>SEO Strategy Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Technical SEO</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Content Marketing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Link Building</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>E-commerce SEO</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Google Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>SEMrush, Moz, Ahrefs</span>
                  </li>
                </ul>
              </div>
              
              <div className="neo-blur p-6 rounded-xl space-y-4">
                <h2 className="text-xl font-semibold">Industries</h2>
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

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
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
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;

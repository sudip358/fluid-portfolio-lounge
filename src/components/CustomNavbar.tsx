
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const sections = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <HashLink to="#top" className="flex items-center space-x-2 font-bold">
            <span>Sudip Kumar</span>
          </HashLink>
          
          <nav className="hidden md:flex gap-6">
            {sections.map((section) => (
              <HashLink
                key={section.href}
                to={section.href}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                smooth
              >
                {section.label}
              </HashLink>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container py-4 flex flex-col space-y-4">
            {sections.map((section) => (
              <HashLink
                key={section.href}
                to={section.href}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
                smooth
              >
                {section.label}
              </HashLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

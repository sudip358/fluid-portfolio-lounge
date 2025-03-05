
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-medium tracking-tight">
              Sudip Kumar
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-200 hover:text-primary link-underline ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-200 hover:text-primary link-underline ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-200 hover:text-primary link-underline ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-200 hover:text-primary link-underline ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-200 hover:text-primary link-underline ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              size="icon" 
              variant="ghost" 
              className="md:hidden" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-6 py-2">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-base font-medium px-2 py-1 rounded transition-colors ${
                    isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-base font-medium px-2 py-1 rounded transition-colors ${
                    isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `text-base font-medium px-2 py-1 rounded transition-colors ${
                    isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  `text-base font-medium px-2 py-1 rounded transition-colors ${
                    isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-base font-medium px-2 py-1 rounded transition-colors ${
                    isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"; // Corrected typo here
import { ThemeProvider } from "next-themes";
import { CustomNavbar } from "@/components/CustomNavbar";
import { SplashCursor } from "@/components/ui/splash-cursor";
import CV from "@/pages/CV";
import Projects from "@/pages/Projects";
import CaseStudy from "@/pages/CaseStudy";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <SplashCursor />
        <div className="min-h-screen flex flex-col">
          <CustomNavbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<CV />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/case-study/:id" element={<CaseStudy />} />
              {/* Add routes for direct navigation to homepage sections from other pages */}
              <Route path="/#about" element={<Navigate to="/#about" replace />} />
              <Route path="/#experience" element={<Navigate to="/#experience" replace />} />
              <Route path="/#skills" element={<Navigate to="/#skills" replace />} />
              <Route path="/#education" element={<Navigate to="/#education" replace />} />
              <Route path="/#projects" element={<Navigate to="/#projects" replace />} />
              <Route path="/#contact" element={<Navigate to="/#contact" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sudip Kumar. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/sudiip-kumr/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:sudipkumar211@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Email
                </a>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;

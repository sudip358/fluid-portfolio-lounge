import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"; // Corrected typo here
import { ThemeProvider } from "next-themes";
import { CustomNavbar } from "@/components/CustomNavbar";
import { SplashCursor } from "@/components/ui/splash-cursor";
import CV from "@/pages/CV";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <SplashCursor />
        <div className="min-h-screen flex flex-col">
          <CustomNavbar />
          <main className="flex-1">
            <CV />
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

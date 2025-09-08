import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-medical-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-medical-dark">E-Consultation</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-medical-dark hover:text-medical-blue transition-smooth font-medium">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-medical-blue transition-smooth">
              About us
            </a>
            <a href="#" className="text-muted-foreground hover:text-medical-blue transition-smooth">
              Log out
            </a>
            <a href="#" className="text-muted-foreground hover:text-medical-blue transition-smooth">
              Help
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="medical" size="default">
            Get start
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
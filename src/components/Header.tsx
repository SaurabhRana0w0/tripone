import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-travel-teal">Tripone</div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-travel-dark font-medium hover:text-travel-teal transition-colors">
              Home
            </a>
            <a href="#" className="text-travel-gray hover:text-travel-teal transition-colors">
              Flight
            </a>
            <a href="#" className="text-travel-gray hover:text-travel-teal transition-colors">
              Contact
            </a>
            <a href="#" className="text-travel-gray hover:text-travel-teal transition-colors">
              About us
            </a>
          </nav>

          {/* Book Now Button */}
          <Button variant="travel" size="default">
            Book now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
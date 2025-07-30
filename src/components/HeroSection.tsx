import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Explore the whole world
            <br />
            and enjoy its beauty
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Find and visit about your marvelous around the world.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              {/* Country */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-travel-dark flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Country
                </label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Any Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indonesia">Indonesia</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="france">France</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Check In */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-travel-dark flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Check In
                </label>
                <Input
                  type="date"
                  className="h-12"
                  placeholder="8 Nov 2022"
                />
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-travel-dark flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Check Out
                </label>
                <Input
                  type="date"
                  className="h-12"
                  placeholder="8 Nov 2022"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-travel-dark flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Guests
                </label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="2 Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-center">
              <Button variant="travel" size="xl" className="px-12">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
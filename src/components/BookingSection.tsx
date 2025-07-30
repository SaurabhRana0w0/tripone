import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import bookingBackground from "@/assets/booking-bg.jpg";

const BookingSection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bookingBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book tickets and go now!
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="travel" size="xl" className="px-12">
              Book now
            </Button>
            
            <button className="flex items-center space-x-3 text-white hover:text-travel-light-blue transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              </div>
              <span className="font-medium">Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
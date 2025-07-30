import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import ancientCoast from "@/assets/ancient-coast.jpg";
import tajMahal from "@/assets/taj-mahal.jpg";
import balloons from "@/assets/balloons.jpg";
import pagoda from "@/assets/pagoda.jpg";
import lighthouse from "@/assets/lighthouse.jpg";
import oldTown from "@/assets/old-town.jpg";

const exploreDestinations = [
  {
    id: 1,
    name: "Ancient Coast",
    location: "Greece",
    price: "$485/day",
    image: ancientCoast,
    rating: 4.8,
    badge: "SALE"
  },
  {
    id: 2,
    name: "Taj Mahal",
    location: "India",
    price: "$320/day",
    image: tajMahal,
    rating: 4.9,
    badge: "SALE"
  },
  {
    id: 3,
    name: "Balloon Desert",
    location: "Turkey",
    price: "$540/day",
    image: balloons,
    rating: 4.7,
    badge: "SALE"
  },
  {
    id: 4,
    name: "Osaka Castle",
    location: "Japan",
    price: "$694/day",
    image: pagoda,
    rating: 4.6
  },
  {
    id: 5,
    name: "Cape Reinga",
    location: "New Zealand",
    price: "$345/day",
    image: lighthouse,
    rating: 4.8
  },
  {
    id: 6,
    name: "Sorrento, Italy",
    location: "Italy",
    price: "$472/day",
    image: oldTown,
    rating: 4.9
  }
];

const ExploreMore = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-travel-dark mb-4">
            Explore more
          </h2>
          <p className="text-travel-gray text-lg max-w-2xl mx-auto">
            Discover breathtaking destinations around the world with guided tours and amazing adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreDestinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {destination.badge && (
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 bg-travel-teal text-white border-0"
                  >
                    {destination.badge}
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-travel-dark mb-2">
                  {destination.name}
                </h3>
                
                <div className="flex items-center text-travel-gray mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium text-travel-dark">{destination.rating}</span>
                  </div>
                  <div className="text-travel-teal font-bold text-lg">
                    {destination.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-travel-teal font-medium hover:text-travel-blue transition-colors">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
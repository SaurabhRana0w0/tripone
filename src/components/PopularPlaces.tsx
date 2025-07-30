import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";
import destination4 from "@/assets/destination-4.jpg";

const destinations = [
  {
    id: 1,
    name: "Mt. Kilimanjaro",
    location: "Tanzania",
    image: destination1,
    badge: "SAVE",
    rating: 4.8,
    reviews: 2847
  },
  {
    id: 2,
    name: "Disneyland Paris",
    location: "France",
    image: destination2,
    badge: "SAVE",
    rating: 4.7,
    reviews: 1523
  },
  {
    id: 3,
    name: "Tropical Island",
    location: "Maldives",
    image: destination3,
    badge: "SAVE",
    rating: 4.9,
    reviews: 3241
  },
  {
    id: 4,
    name: "Basilica Santa",
    location: "Barcelona",
    image: destination4,
    badge: "SAVE",
    rating: 4.6,
    reviews: 1876
  }
];

const PopularPlaces = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-travel-dark mb-4">
            Popular Place
          </h2>
          <p className="text-travel-gray text-lg max-w-2xl mx-auto">
            Let's go on vacation and visit amazing places around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 bg-travel-teal text-white border-0"
                >
                  {destination.badge}
                </Badge>
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
                    <span className="text-xs text-travel-gray ml-1">({destination.reviews})</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
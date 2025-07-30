import { Button } from "@/components/ui/button";
import { Check, Users, Heart, Compass } from "lucide-react";
import travelMemoryImage from "@/assets/travel-memory.jpg";

const features = [
  {
    icon: Compass,
    title: "Find trips that fit your freedom",
    description: "Adventures designed for maximum enjoyment"
  },
  {
    icon: Heart,
    title: "Get back to nature by travel",
    description: "Reconnect with the natural world"
  },
  {
    icon: Users,
    title: "Reignite those travel testbuds",
    description: "Rediscover your passion for exploration"
  }
];

const TravelMemories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-travel-dark mb-4">
            Travel to make sweet memories
          </h2>
          <p className="text-travel-gray text-lg max-w-2xl mx-auto">
            Find trips that fit a flexible lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-travel-light-blue rounded-full p-3 mt-1">
                    <Icon className="w-6 h-6 text-travel-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-travel-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-travel-gray">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-8">
              <Button variant="travel" size="lg">
                Explore Places
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={travelMemoryImage}
              alt="Travel memories"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-travel-teal rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-travel-dark">Sarah Allen</p>
                  <p className="text-xs text-travel-gray">Travel Guide</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-travel-blue rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-travel-dark">Amazing View</p>
                  <p className="text-xs text-travel-gray">4.9 ★ (2.1k reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelMemories;
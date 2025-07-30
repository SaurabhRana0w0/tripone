import { Card, CardContent } from "@/components/ui/card";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";
import destination4 from "@/assets/destination-4.jpg";

const adventures = [
  {
    id: 1,
    name: "PARIS",
    image: destination1,
    color: "bg-travel-teal"
  },
  {
    id: 2,
    name: "NEW YORK",
    image: destination2,
    color: "bg-travel-blue"
  },
  {
    id: 3,
    name: "SEOUL",
    image: destination3,
    color: "bg-travel-teal"
  },
  {
    id: 4,
    name: "BALI",
    image: destination4,
    color: "bg-purple-500"
  }
];

const Adventure = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-travel-dark mb-4">
            Let's go on an adventure
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {adventures.map((adventure) => (
            <Card key={adventure.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={adventure.image}
                  alt={adventure.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Circle badge */}
                <div className={`absolute top-4 left-4 w-12 h-12 ${adventure.color} rounded-full flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                
                {/* Name */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">
                    {adventure.name}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventure;
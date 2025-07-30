import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularPlaces from "@/components/PopularPlaces";
import TravelMemories from "@/components/TravelMemories";
import ExploreMore from "@/components/ExploreMore";
import Adventure from "@/components/Adventure";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PopularPlaces />
      <TravelMemories />
      <ExploreMore />
      <Adventure />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;

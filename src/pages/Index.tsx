import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import UpcomingConcerts from "@/components/site/UpcomingConcerts";
import Pricing from "@/components/site/Pricing";
import SeatMap from "@/components/site/SeatMap";
import Artists from "@/components/site/Artists";
import Footer from "@/components/site/Footer";
import Chatbot from "@/components/site/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <UpcomingConcerts />
        <Pricing />
        <SeatMap />
        <Artists />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

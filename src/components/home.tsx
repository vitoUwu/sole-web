import React from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import FeatureSection from "./landing/FeatureSection";
import StatsSection from "./landing/StatsSection";

interface HomeProps {
  onFeatureClick?: () => void;
  onSupportClick?: () => void;
  onAddToDiscord?: () => void;
}

const Home = ({
  onFeatureClick = () => {},
  onSupportClick = () => {},
  onAddToDiscord = () =>
    window.open("https://discord.com/oauth2/authorize", "_blank"),
}: HomeProps) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar onFeatureClick={onFeatureClick} onSupportClick={onSupportClick} />

      <main className="pt-20">
        <HeroSection onAddToDiscord={onAddToDiscord} />

        <FeatureSection />

        <StatsSection />
      </main>
    </div>
  );
};

export default Home;

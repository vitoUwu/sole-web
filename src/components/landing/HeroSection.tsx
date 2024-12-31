import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  botName?: string;
  tagline?: string;
  onAddToDiscord?: () => void;
}

const HeroSection = ({
  botName = "Sole",
  tagline = "Streamline your Discord server with intelligent role management",
  onAddToDiscord = () => console.log("Add to Discord clicked"),
}: HeroSectionProps) => {
  return (
    <section className="min-h-[600px] w-full bg-gradient-to-br from-[#5865F2] to-[#404EED] flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl w-full flex flex-col items-center text-center gap-8">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg">
          <img
            src="https://api.dicebear.com/7.x/bottts/svg?seed=sole"
            alt={`${botName} bot avatar`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {botName}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {tagline}
          </p>

          <Button
            size="lg"
            onClick={onAddToDiscord}
            className="bg-white text-[#5865F2] hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Add to Discord
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

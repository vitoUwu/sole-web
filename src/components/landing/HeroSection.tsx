import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f1f4dc]">
      <div className="container min-h-[100dvh] w-full items-center justify-center px-4 md:px-8 lg:px-16 grid lg:grid-cols-2">
        <img
          src="https://api.dicebear.com/7.x/thumbs/svg?seed=sole"
          alt="Sole bot avatar"
          className="self-end order-2 lg:order-1 animate-in fade-in-0 slide-in-from-bottom-96 duration-1000 ease-out"
        />
        <div className="max-w-6xl w-full flex flex-col items-center justify-center text-center gap-8 min-h-[40dvh] order-1 lg:order-2">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#f88c49]">
              Sole
            </h1>
            <p className="text-xl md:text-2xl text-[#f88c49]/70 max-w-2xl mx-auto">
              Sole is a Discord bot that assigns roles to guild members based on
              the content of their custom statuses.
            </p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1323463328458346550&permissions=268717056&integration_type=0&scope=bot+applications.commands"
              className={cn(
                "bg-[#f88c49] text-white group text-lg px-8 rounded-lg shadow-lg",
                "transition-all duration-300 hover:scale-105 flex items-center justify-center",
                "font-semibold w-fit mx-auto h-12",
                "hover:bg-[#f88c49]/80"
              )}
            >
              Add to Discord
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

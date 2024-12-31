import { createLazyFileRoute } from "@tanstack/react-router";
import HeroSection from "../components/landing/HeroSection";

function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <HeroSection />
    </main>
  );
}

export const Route = createLazyFileRoute("/")({
  component: Home,
});

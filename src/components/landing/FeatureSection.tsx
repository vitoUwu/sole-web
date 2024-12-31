import React from "react";
import FeatureCard from "./FeatureCard";
import { Bot, MonitorCheck, Settings, UserCheck } from "lucide-react";

interface FeatureSectionProps {
  features?: Array<{
    icon: typeof MonitorCheck;
    title: string;
    description: string;
  }>;
}

const FeatureSection = ({
  features = [
    {
      icon: MonitorCheck,
      title: "Status Monitoring",
      description:
        "Real-time monitoring of user status changes with instant role updates",
    },
    {
      icon: UserCheck,
      title: "Automatic Role Assignment",
      description: "Seamlessly assign roles based on custom status conditions",
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description:
        "Flexible settings to match your server's unique requirements",
    },
    {
      icon: Bot,
      title: "24/7 Automation",
      description:
        "Continuous monitoring and role management without interruption",
    },
  ],
}: FeatureSectionProps) => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how Sole can transform your Discord server's role
            management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

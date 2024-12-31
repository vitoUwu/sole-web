import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MonitorCheck } from "lucide-react";

interface FeatureCardProps {
  icon?: typeof MonitorCheck;
  title?: string;
  description?: string;
}

const FeatureCard = ({
  icon: Icon = MonitorCheck,
  title = "Status Monitoring",
  description = "Real-time monitoring of user status changes with instant role updates",
}: FeatureCardProps) => {
  return (
    <Card className="w-[350px] h-[300px] bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-[#5865F2] flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

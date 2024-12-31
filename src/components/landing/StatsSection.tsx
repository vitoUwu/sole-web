import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Server, Shield } from "lucide-react";

interface StatItemProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const StatItem = ({
  icon: Icon = Users,
  value = "0",
  label = "Users",
}: StatItemProps) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center mb-2">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <span className="text-3xl font-bold text-gray-900">{value}</span>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

interface StatsSectionProps {
  stats?: {
    servers?: string;
    users?: string;
    roles?: string;
  };
}

const StatsSection = ({
  stats = {
    servers: "1,000+",
    users: "100,000+",
    roles: "50,000+",
  },
}: StatsSectionProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <Card className="bg-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatItem
                icon={Server}
                value={stats.servers}
                label="Active Servers"
              />
              <StatItem icon={Users} value={stats.users} label="Active Users" />
              <StatItem
                icon={Shield}
                value={stats.roles}
                label="Roles Managed"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StatsSection;

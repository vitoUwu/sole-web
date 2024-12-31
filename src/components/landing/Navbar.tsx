import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
  onFeatureClick?: () => void;
  onSupportClick?: () => void;
  logoUrl?: string;
}

const Navbar = ({
  onFeatureClick = () => {},
  onSupportClick = () => {},
  logoUrl = "https://api.dicebear.com/7.x/bottts/svg?seed=sole",
}: NavbarProps) => {
  return (
    <div className="w-full h-20 bg-white border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={logoUrl}
            alt="Sole Bot Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-gray-900">Sole</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#features"
                onClick={onFeatureClick}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              >
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#support"
                onClick={onSupportClick}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
              >
                Support Server
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
          onClick={() =>
            window.open("https://discord.com/oauth2/authorize", "_blank")
          }
        >
          Add to Discord
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Tag, X } from "lucide-react";

interface PromoBarProps {
  className?: string;
}

export const PromoBar: React.FC<PromoBarProps> = ({ className }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className={cn("bg-gradient-ceramic text-white py-3 relative overflow-hidden", className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` 
             }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Content */}
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="hidden md:block w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Tag className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold text-lg">
                🎉 Explore Caldas da Rainha como nunca antes!
              </p>
              <p className="text-white/90 text-sm">
                Guia gratuito + descontos exclusivos em restaurantes e lojas locais
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              size="sm"
            >
              <Download className="mr-2 h-4 w-4" />
              DOWNLOAD FREE CITY GUIDE
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105"
              size="sm"
            >
              <Tag className="mr-2 h-4 w-4" />
              PROMOS & DISCOUNTS
            </Button>

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10 ml-2"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
    </div>
  );
};
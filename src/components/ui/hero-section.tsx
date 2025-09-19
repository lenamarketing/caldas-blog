import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";
import mainBanner from "@/assets/praca_main";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn("relative h-[80vh] min-h-[600px] overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={mainBanner}
          alt="Praça da Fruta das Caldas da Rainha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-accent font-medium">Caldas da Rainha, Portugal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Caldas
            <br />
            <span className="text-accent">e comigo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Descubra os segredos da cidade das artes, das termas e da cerâmica. 
            O seu guia completo para viver Caldas da Rainha como um local.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-ceramic px-8 py-6 text-lg font-semibold transition-smooth"
            >
              Explorar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg transition-smooth"
            >
              Ver Marketplace
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm text-white/80">Restaurantes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">30+</div>
              <div className="text-sm text-white/80">Lojas Locais</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm text-white/80">Experiências</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

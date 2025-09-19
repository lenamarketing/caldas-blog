import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search, User, Menu } from "lucide-react";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={cn("w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40", className)}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-ceramic flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Caldas e comigo</h1>
              <p className="text-xs text-muted-foreground">Guia de Caldas da Rainha</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-primary transition-smooth">
              Descobrir
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-smooth">
              Comer
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-smooth">
              Comprar
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-smooth">
              Notícias
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary transition-smooth">
              Top Ratings
            </Button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-primary">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
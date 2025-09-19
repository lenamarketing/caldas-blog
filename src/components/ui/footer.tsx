import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-foreground text-background py-16", className)}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-ceramic flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Caldas e comigo</h3>
                <p className="text-sm text-background/70">Guia de Caldas da Rainha</p>
              </div>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              O seu companheiro local para descobrir o melhor de Caldas da Rainha. 
              Tradição, cultura e modernidade numa só plataforma.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-accent hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-accent hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-accent hover:bg-background/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Explorar */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explorar</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Restaurantes</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Atrações</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Eventos</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">História</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Natureza</a></li>
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Marketplace</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Cerâmica Local</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Gastronomia</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Artesanato</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Vinhos Regionais</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Tornar-se Vendedor</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>Caldas da Rainha</p>
                  <p>Leiria, Portugal</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@caldascomigo.com" className="text-background/80 hover:text-accent transition-colors">
                  info@caldascomigo.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+351262000000" className="text-background/80 hover:text-accent transition-colors">
                  +351 262 000 000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 Caldas e comigo. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
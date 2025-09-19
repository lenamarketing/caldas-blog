import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Mail, ArrowRight } from "lucide-react";

interface NewsletterSectionProps {
  className?: string;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className }) => {
  return (
    <section className={cn("py-20 bg-muted", className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-ceramic rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fique por <span className="text-primary">dentro</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Receba semanalmente as melhores dicas, novos artigos e ofertas exclusivas 
            do marketplace local diretamente na sua caixa de correio.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input 
                type="email"
                placeholder="O seu melhor email"
                className="flex-1 h-12 bg-background border-border focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
              />
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 shadow-elegant transition-smooth"
              >
                Subscrever
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Sem spam. Cancele a subscrição a qualquer momento.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>+ 1.200 subscritores locais</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Todas as sextas-feiras</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Conteúdo exclusivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
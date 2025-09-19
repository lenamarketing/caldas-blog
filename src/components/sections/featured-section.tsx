import React from 'react';
import { FeaturedCard } from "@/components/ui/featured-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FeaturedSectionProps {
  className?: string;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ className }) => {
  const featuredContent = [
    {
      id: 1,
      title: "As melhores pastelarias tradicionais de Caldas",
      description: "Uma viagem gastronómica pelas pastelarias mais autênticas da cidade, onde os doces conventuais e as especialidades locais mantêm viva a tradição culinária.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
      category: "Gastronomia",
      readTime: "5 min",
      rating: 4.8,
      size: 'large' as const
    },
    {
      id: 2,
      title: "Roteiro das Artes: Museu José Malhoa",
      description: "Descubra as obras-primas do naturalismo português e mergulhe na história artística de Caldas da Rainha.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
      category: "Cultura",
      readTime: "3 min",
      rating: 4.6
    },
    {
      id: 3,
      title: "Cerâmica das Caldas: Tradição viva",
      description: "Conheça os atelieres locais onde artesãos perpetuam séculos de tradição cerâmica.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      category: "Artesanato",
      readTime: "4 min",
      rating: 4.9
    },
    {
      id: 4,
      title: "Mercado da Fruta: Sabores frescos",
      description: "O coração gastronómico da cidade onde produtores locais oferecem o melhor da região.",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      category: "Mercados",
      readTime: "2 min",
      rating: 4.7
    },
    {
      id: 5,
      title: "Parque D. Carlos I: Oásis urbano",
      description: "Um refúgio verde no centro da cidade, perfeito para caminhadas e momentos de contemplação.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
      category: "Natureza",
      readTime: "3 min",
      rating: 4.5
    }
  ];

  return (
    <section className={cn("py-20 bg-gradient-warm", className)}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiências <span className="text-primary">Autênticas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra Caldas da Rainha através dos olhos de quem conhece cada recanto, 
            cada sabor e cada história desta cidade única.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {featuredContent.map((item) => (
            <FeaturedCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              readTime={item.readTime}
              rating={item.rating}
              size={item.size}
              className={item.size === 'large' ? "md:col-span-2" : ""}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant px-8 py-6 text-lg font-semibold transition-smooth"
          >
            Ver todos os artigos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
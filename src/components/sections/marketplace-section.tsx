import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Star, ShoppingBag, ArrowRight, Heart } from "lucide-react";

interface MarketplaceSectionProps {
  className?: string;
}

export const MarketplaceSection: React.FC<MarketplaceSectionProps> = ({ className }) => {
  const products = [
    {
      id: 1,
      name: "Cerâmica Artesanal Bordalo Pinheiro",
      seller: "Oficina das Caldas",
      price: "€45",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300",
      rating: 4.9,
      reviews: 23,
      category: "Cerâmica",
      featured: true
    },
    {
      id: 2,
      name: "Doces Conventuais Tradicionais",
      seller: "Pastelaria D. Leonor",
      price: "€12",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300",
      rating: 4.8,
      reviews: 45,
      category: "Gastronomia"
    },
    {
      id: 3,
      name: "Vinho Regional Óbidos DOC",
      seller: "Quinta dos Sabores",
      price: "€18",
      image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=300",
      rating: 4.7,
      reviews: 31,
      category: "Vinhos"
    },
    {
      id: 4,
      name: "Sabonetes Artesanais com Águas Termais",
      seller: "Bem-Estar das Caldas",
      price: "€8",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300",
      rating: 4.6,
      reviews: 18,
      category: "Bem-estar"
    }
  ];

  return (
    <section className={cn("py-20 bg-background", className)}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Marketplace</span> Local
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Apoie os criadores e produtores locais. Cada compra fortalece a economia 
              e preserva as tradições de Caldas da Rainha.
            </p>
          </div>
          
          <Button 
            variant="outline"
            className="self-start md:self-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Explorar Loja
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-ceramic transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {product.featured && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    Destaque
                  </Badge>
                )}
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-muted-foreground hover:text-red-500 rounded-full"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                <Badge className="absolute bottom-3 left-3 bg-primary/90 text-primary-foreground">
                  {product.category}
                </Badge>
              </div>

              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{product.seller}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                  >
                    Adicionar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-ceramic rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Tem um negócio local?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se ao nosso marketplace e leve os seus produtos a mais pessoas. 
            Comissões baixas, alcance local máximo.
          </p>
          <Button 
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg px-8 py-6 text-lg font-semibold"
          >
            Tornar-se Vendedor
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
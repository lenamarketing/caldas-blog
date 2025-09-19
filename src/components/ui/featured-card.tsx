import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Star, ArrowRight } from "lucide-react";

interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime?: string;
  rating?: number;
  className?: string;
  size?: 'default' | 'large';
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  image,
  category,
  readTime,
  rating,
  className,
  size = 'default'
}) => {
  return (
    <Card className={cn(
      "group overflow-hidden bg-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 cursor-pointer",
      size === 'large' && "md:col-span-2 md:row-span-2",
      className
    )}>
      <div className={cn(
        "relative overflow-hidden",
        size === 'large' ? "h-80" : "h-48"
      )}>
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-sm">
          {category}
        </Badge>

        {/* Rating */}
        {rating && (
          <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-semibold text-foreground">{rating}</span>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          {readTime && (
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{readTime}</span>
            </div>
          )}
        </div>

        <h3 className={cn(
          "font-bold text-foreground mb-3 group-hover:text-primary transition-colors",
          size === 'large' ? "text-2xl" : "text-lg"
        )}>
          {title}
        </h3>

        <p className={cn(
          "text-muted-foreground leading-relaxed mb-4",
          size === 'large' ? "text-base" : "text-sm"
        )}>
          {description}
        </p>

        <Button 
          variant="ghost" 
          className="p-0 h-auto text-primary hover:text-primary-glow font-semibold group/button"
        >
          Ler mais
          <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
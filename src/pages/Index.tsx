import React from 'react';
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturedSection } from "@/components/sections/featured-section";
import { MarketplaceSection } from "@/components/sections/marketplace-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedSection />
      <MarketplaceSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;

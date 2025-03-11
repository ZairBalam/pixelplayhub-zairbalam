
import React from 'react';
import { Button } from './ui/button';

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  image,
  price,
  originalPrice,
  className = '',
}) => {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;
  const hasDiscount = discount > 0;

  return (
    <div className={`group relative overflow-hidden rounded-xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 flex flex-col justify-end p-6 md:p-8">
        <div className="max-w-xl">
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">{title}</h2>
          <p className="mb-4 text-sm text-gray-300 md:text-base">{description}</p>
          
          <div className="flex items-center space-x-4">
            <div className="price-details flex items-center">
              {hasDiscount && (
                <div className="mr-3 rounded bg-steam-discount px-2 py-1 text-sm font-bold text-white md:text-base">
                  -{discount}%
                </div>
              )}
              <div className="flex flex-col items-end">
                {hasDiscount && (
                  <span className="text-sm text-gray-400 line-through">${originalPrice?.toFixed(2)}</span>
                )}
                <span className="text-lg font-bold text-white md:text-xl">${price.toFixed(2)}</span>
              </div>
            </div>
            
            <Button className="bg-steam-green text-white hover:bg-steam-green/90">
              Add to Cart
            </Button>
            
            <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10 hover:text-white">
              See More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

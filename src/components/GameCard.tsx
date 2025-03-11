
import React from 'react';
import { Badge } from './ui/badge';

interface GameCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  releaseDate?: string;
  className?: string;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  image,
  price,
  originalPrice,
  tags = [],
  releaseDate,
  className = '',
}) => {
  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;
  const hasDiscount = discount > 0;

  return (
    <div className={`game-card group ${className}`}>
      {/* Game Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="gradient-overlay">
          <div className="absolute bottom-2 left-2 right-2">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            {tags.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-black/50 text-xs text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="bg-steam-light p-3">
        <div className="flex items-center justify-between">
          <div>
            {releaseDate && <p className="text-xs text-gray-400">{releaseDate}</p>}
          </div>
          <div className="flex items-center">
            {hasDiscount && (
              <div className="mr-2 discount-badge">-{discount}%</div>
            )}
            <div className="price-tag flex items-center bg-black/30">
              {hasDiscount && (
                <span className="mr-2 text-xs text-gray-400 line-through">${originalPrice?.toFixed(2)}</span>
              )}
              <span className="text-white">${price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

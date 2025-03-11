
import React from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ onPrev, onNext, currentIndex, total }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="mr-2 text-sm text-gray-400">
        {currentIndex + 1} / {total}
      </div>
      <Button 
        onClick={onPrev} 
        variant="outline" 
        size="icon" 
        className="h-8 w-8 rounded-full border-gray-700 bg-black/30 text-white hover:bg-steam-gray hover:text-white"
      >
        <ChevronLeft size={16} />
      </Button>
      <Button 
        onClick={onNext} 
        variant="outline" 
        size="icon" 
        className="h-8 w-8 rounded-full border-gray-700 bg-black/30 text-white hover:bg-steam-gray hover:text-white"
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  );
};

export default CarouselControls;


import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
  children?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, viewAllLink, children }) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-xl font-bold text-white md:text-2xl">{title}</h2>
      <div className="flex items-center space-x-2">
        {children}
        {viewAllLink && (
          <Button variant="ghost" size="sm" className="text-steam-accent hover:bg-steam-light hover:text-steam-accent">
            View all <ChevronRight size={16} className="ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;

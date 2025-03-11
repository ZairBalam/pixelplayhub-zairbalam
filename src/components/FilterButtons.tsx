
import React from 'react';
import { Button } from './ui/button';
import { Filter } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterButtonsProps {
  options: FilterOption[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ 
  options, 
  selectedFilter, 
  onFilterChange 
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Filter size={16} className="text-gray-400" />
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Button
            key={option.id}
            variant={selectedFilter === option.id ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(option.id)}
            className={
              selectedFilter === option.id
                ? "bg-steam-accent text-white hover:bg-steam-accent/90"
                : "border-gray-700 bg-black/20 text-gray-300 hover:bg-steam-gray hover:text-white"
            }
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;

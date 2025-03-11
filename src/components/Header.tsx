
import React, { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { name: 'Store', submenu: ['Home', 'Discovery Queue', 'Wishlist', 'Points Shop'] },
    { name: 'Library', submenu: [] },
    { name: 'Community', submenu: ['Home', 'Discussions', 'Workshop', 'Market'] },
    { name: 'News', submenu: [] },
  ];

  return (
    <header className="sticky top-0 z-50 bg-steam px-4 py-2 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="mr-6 text-2xl font-bold text-white">
            <span className="text-steam-accent">PIXEL</span>
            <span>PLAY</span>
            <span className="text-steam-accent">HUB</span>
          </a>
          
          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {categories.map((category) => (
                <li key={category.name} className="group relative">
                  <a 
                    href="#" 
                    className="flex items-center text-gray-300 hover:text-steam-accent"
                  >
                    {category.name}
                    {category.submenu.length > 0 && (
                      <ChevronDown size={14} className="ml-1" />
                    )}
                  </a>
                  
                  {/* Dropdown */}
                  {category.submenu.length > 0 && (
                    <div className="absolute left-0 top-6 hidden rounded bg-steam-light py-2 shadow-xl group-hover:block">
                      <ul className="w-48">
                        {category.submenu.map((item) => (
                          <li key={item}>
                            <a 
                              href="#" 
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-steam-gray hover:text-white"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Search Bar */}
        <div className="mx-4 hidden flex-1 max-w-xl md:flex">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-l-md border-r-0 bg-steam-light pr-10 text-white placeholder:text-gray-400 focus-visible:ring-steam-accent"
            />
            <Button 
              variant="ghost" 
              className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
            >
              <Search size={18} />
            </Button>
          </div>
        </div>
        
        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden text-gray-300 hover:text-white sm:flex">
            <ShoppingCart size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <User size={20} />
          </Button>
          <Button className="hidden bg-steam-accent text-white hover:bg-steam-accent/90 sm:block">
            Install App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

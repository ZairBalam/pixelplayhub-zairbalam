
import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import GameCard from '../components/GameCard';
import SectionHeader from '../components/SectionHeader';
import CarouselControls from '../components/CarouselControls';
import FilterButtons from '../components/FilterButtons';
import DiscountCountdown from '../components/DiscountCountdown';
import PaymentOptions from '../components/PaymentOptions';
import { 
  featuredGames, 
  popularGames, 
  newReleases, 
  specialOffers,
  topPicksWeek,
  genreFilters,
  platformFilters,
  personalizedRecommendations
} from '../data/mockData';

const Index = () => {
  // State for featured banner carousel
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerInterval = useRef<number | null>(null);
  
  // State for filters
  const [genreFilter, setGenreFilter] = useState('all');
  const [platformFilter, setPlatformFilter] = useState('all');
  
  // Auto-rotate featured banners
  useEffect(() => {
    bannerInterval.current = window.setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % featuredGames.length);
    }, 5000);
    
    return () => {
      if (bannerInterval.current) {
        clearInterval(bannerInterval.current);
      }
    };
  }, []);
  
  const handlePrevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
    resetBannerInterval();
  };
  
  const handleNextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % featuredGames.length);
    resetBannerInterval();
  };
  
  const resetBannerInterval = () => {
    if (bannerInterval.current) {
      clearInterval(bannerInterval.current);
    }
    bannerInterval.current = window.setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % featuredGames.length);
    }, 5000);
  };

  return (
    <Layout>
      <div className="container px-4 py-6">
        {/* Featured Banner */}
        <section className="mb-10">
          <div className="relative h-96 overflow-hidden rounded-xl sm:h-[450px] md:h-[500px]">
            {featuredGames.map((game, index) => (
              <div
                key={game.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <FeatureCard
                  id={game.id}
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  price={game.price}
                  originalPrice={game.originalPrice}
                  className="h-full w-full"
                />
              </div>
            ))}
            
            <div className="absolute bottom-4 right-4 z-20">
              <CarouselControls
                onPrev={handlePrevBanner}
                onNext={handleNextBanner}
                currentIndex={currentBanner}
                total={featuredGames.length}
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
              {featuredGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentBanner(index);
                    resetBannerInterval();
                  }}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    index === currentBanner ? 'bg-steam-accent' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Games */}
        <section className="mb-10">
          <SectionHeader title="Popular Games" viewAllLink="#">
            <FilterButtons
              options={genreFilters}
              selectedFilter={genreFilter}
              onFilterChange={setGenreFilter}
            />
          </SectionHeader>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {popularGames.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                price={game.price}
                originalPrice={game.originalPrice}
                tags={game.tags}
                releaseDate={game.releaseDate}
              />
            ))}
          </div>
        </section>
        
        {/* New Releases */}
        <section className="mb-10">
          <SectionHeader title="New Releases" viewAllLink="#">
            <FilterButtons
              options={platformFilters}
              selectedFilter={platformFilter}
              onFilterChange={setPlatformFilter}
            />
          </SectionHeader>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {newReleases.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                price={game.price}
                originalPrice={game.originalPrice}
                tags={game.tags}
                releaseDate={game.releaseDate}
              />
            ))}
          </div>
        </section>
        
        {/* Special Offers */}
        <section className="mb-10">
          <SectionHeader title="Special Offers" viewAllLink="#" />
          
          <div className="highlight-section mb-4 p-4">
            <DiscountCountdown 
              endDate={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)} 
              className="mb-2" 
            />
            <p className="text-sm text-gray-300">Don't miss out on these limited-time deals!</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {specialOffers.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                price={game.price}
                originalPrice={game.originalPrice}
                tags={game.tags}
                releaseDate={game.releaseDate}
              />
            ))}
          </div>
        </section>
        
        {/* Personalized Recommendations */}
        <section className="mb-10">
          <SectionHeader title="Recommended For You" viewAllLink="#" />
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {personalizedRecommendations.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                price={game.price}
                originalPrice={game.originalPrice}
                tags={game.tags}
                releaseDate={game.releaseDate}
              />
            ))}
          </div>
        </section>
        
        {/* Top Picks of the Week */}
        <section className="mb-10">
          <SectionHeader title="Top Picks of the Week" viewAllLink="#" />
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {topPicksWeek.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                price={game.price}
                originalPrice={game.originalPrice}
                tags={game.tags}
                releaseDate={game.releaseDate}
              />
            ))}
          </div>
        </section>
        
        {/* Community Access */}
        <section className="mb-10">
          <SectionHeader title="Community Access" />
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="highlight-section group p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="mb-2 text-xl font-bold text-white">Player Forums</h3>
              <p className="mb-4 text-gray-300">Join discussions about your favorite games, share tips, and connect with other players.</p>
              <a href="#" className="text-steam-accent hover:underline">Browse Forums →</a>
            </div>
            
            <div className="highlight-section group p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="mb-2 text-xl font-bold text-white">Game Reviews</h3>
              <p className="mb-4 text-gray-300">Read honest reviews from players or write your own to help others decide.</p>
              <a href="#" className="text-steam-accent hover:underline">View Reviews →</a>
            </div>
            
            <div className="highlight-section group p-6 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="mb-2 text-xl font-bold text-white">Event Calendar</h3>
              <p className="mb-4 text-gray-300">Stay up-to-date with upcoming game releases, tournaments, and special events.</p>
              <a href="#" className="text-steam-accent hover:underline">View Calendar →</a>
            </div>
          </div>
        </section>
        
        {/* Payment Options */}
        <section className="mb-10">
          <div className="highlight-section flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-2xl font-bold text-white">Secure Payment Options</h2>
              <p className="text-gray-300">
                Multiple secure ways to pay for your games, with regional pricing available in 90+ countries.
              </p>
            </div>
            <PaymentOptions />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

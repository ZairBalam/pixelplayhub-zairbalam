
// Mock data for our game store
export const featuredGames = [
  {
    id: 1,
    title: "Cybernetic Odyssey 2077",
    description: "An epic open-world adventure in a dystopian future where humans and machines merge in a battle for supremacy.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    price: 49.99,
    originalPrice: 59.99,
    tags: ["Open World", "RPG", "Sci-Fi"],
  },
  {
    id: 2,
    title: "Eternal Kingdoms: Rise of Legends",
    description: "Build your empire, form alliances, and conquer territories in this stunning fantasy strategy game.",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1770&auto=format&fit=crop",
    price: 39.99,
    originalPrice: 49.99,
    tags: ["Strategy", "Fantasy", "Multiplayer"],
  },
  {
    id: 3,
    title: "Galactic Frontier: First Contact",
    description: "Explore uncharted galaxies, encounter alien civilizations, and make choices that will shape the future of humanity.",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1974&auto=format&fit=crop",
    price: 44.99,
    tags: ["Space", "Adventure", "Simulation"],
  },
];

export const popularGames = [
  {
    id: 4,
    title: "Neon Shadow: Uprising",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop",
    price: 29.99,
    tags: ["Action", "Cyberpunk", "FPS"],
    releaseDate: "New Release",
  },
  {
    id: 5,
    title: "Mystic Realms: Forgotten Legacy",
    image: "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?q=80&w=1770&auto=format&fit=crop",
    price: 34.99,
    tags: ["RPG", "Fantasy", "Open World"],
    releaseDate: "Popular",
  },
  {
    id: 6,
    title: "Racing Evolution: Turbo",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1771&auto=format&fit=crop",
    price: 24.99,
    originalPrice: 39.99,
    tags: ["Racing", "Sports", "Multiplayer"],
    releaseDate: "25% Off",
  },
  {
    id: 7,
    title: "Zombie Apocalypse: Last Stand",
    image: "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=1770&auto=format&fit=crop",
    price: 19.99,
    tags: ["Survival", "Horror", "Co-op"],
    releaseDate: "Best Seller",
  },
  {
    id: 8,
    title: "Medieval Dynasty: Empire",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=1770&auto=format&fit=crop",
    price: 29.99,
    tags: ["Strategy", "Historical", "Simulation"],
    releaseDate: "Top Rated",
  },
  {
    id: 9,
    title: "Space Explorers: Beyond",
    image: "https://images.unsplash.com/photo-1544511916-0148ccdeb877?q=80&w=1770&auto=format&fit=crop",
    price: 34.99,
    originalPrice: 49.99,
    tags: ["Sci-Fi", "Adventure", "Open World"],
    releaseDate: "30% Off",
  },
];

export const newReleases = [
  {
    id: 10,
    title: "Stealth Operative: Blackout",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1770&auto=format&fit=crop",
    price: 39.99,
    tags: ["Stealth", "Action", "Story-Rich"],
    releaseDate: "Released Oct 15",
  },
  {
    id: 11,
    title: "Fantasy Heroes: Ultimate Battle",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1770&auto=format&fit=crop",
    price: 15.99,
    tags: ["Fantasy", "Multiplayer", "Action"],
    releaseDate: "Released Oct 12",
  },
  {
    id: 12,
    title: "Street Racing: Underground",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1770&auto=format&fit=crop",
    price: 29.99,
    tags: ["Racing", "Open World", "Multiplayer"],
    releaseDate: "Released Oct 10",
  },
  {
    id: 13,
    title: "Quantum Paradox",
    image: "https://images.unsplash.com/photo-1531525797753-909788106ccb?q=80&w=1770&auto=format&fit=crop",
    price: 24.99,
    tags: ["Puzzle", "Sci-Fi", "Story-Rich"],
    releaseDate: "Released Oct 8",
  },
  {
    id: 14,
    title: "Ocean Depths: Discovery",
    image: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&w=1770&auto=format&fit=crop",
    price: 19.99,
    tags: ["Adventure", "Exploration", "Relaxing"],
    releaseDate: "Released Oct 5",
  },
];

export const specialOffers = [
  {
    id: 15,
    title: "Dragon's Keep: Legends",
    image: "https://images.unsplash.com/photo-1496979551903-46e46589a88b?q=80&w=1770&auto=format&fit=crop",
    price: 12.49,
    originalPrice: 24.99,
    tags: ["RPG", "Fantasy", "Open World"],
    releaseDate: "50% Off",
    endDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  },
  {
    id: 16,
    title: "Pirate's Journey: Caribbean",
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=1974&auto=format&fit=crop",
    price: 14.99,
    originalPrice: 29.99,
    tags: ["Adventure", "Action", "Open World"],
    releaseDate: "50% Off",
    endDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  },
  {
    id: 17,
    title: "Spy Games: Double Agent",
    image: "https://images.unsplash.com/photo-1559662780-c3bab6f7d00f?q=80&w=1771&auto=format&fit=crop",
    price: 9.99,
    originalPrice: 19.99,
    tags: ["Stealth", "Action", "Story-Rich"],
    releaseDate: "50% Off",
    endDate: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
  },
  {
    id: 18,
    title: "City Architect: Megapolis",
    image: "https://images.unsplash.com/photo-1599933190257-ade62d308472?q=80&w=1771&auto=format&fit=crop",
    price: 14.99,
    originalPrice: 29.99,
    tags: ["Simulation", "Strategy", "Building"],
    releaseDate: "50% Off",
    endDate: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
  },
];

export const topPicksWeek = [
  {
    id: 19,
    title: "Jungle Expedition",
    image: "https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?q=80&w=1964&auto=format&fit=crop",
    price: 34.99,
    tags: ["Adventure", "Exploration", "Action"],
    releaseDate: "Editor's Choice",
  },
  {
    id: 20,
    title: "Mountain Climber 2",
    image: "https://images.unsplash.com/photo-1520767398987-cf9cddf5afdd?q=80&w=1770&auto=format&fit=crop",
    price: 19.99,
    tags: ["Sports", "Simulation", "Adventure"],
    releaseDate: "Top Rated",
  },
  {
    id: 21,
    title: "Space Commander",
    image: "https://images.unsplash.com/photo-1518053003996-0181e5c3bff4?q=80&w=1770&auto=format&fit=crop",
    price: 29.99,
    originalPrice: 39.99,
    tags: ["Strategy", "Sci-Fi", "Multiplayer"],
    releaseDate: "25% Off",
  },
  {
    id: 22,
    title: "Urban Legends",
    image: "https://images.unsplash.com/photo-1557424026-98db5fc38055?q=80&w=1770&auto=format&fit=crop",
    price: 24.99,
    tags: ["Horror", "Story-Rich", "Mystery"],
    releaseDate: "Fan Favorite",
  },
];

export const genreFilters = [
  { id: "all", label: "All" },
  { id: "action", label: "Action" },
  { id: "adventure", label: "Adventure" },
  { id: "rpg", label: "RPG" },
  { id: "strategy", label: "Strategy" },
  { id: "simulation", label: "Simulation" },
  { id: "sports", label: "Sports" },
];

export const platformFilters = [
  { id: "all", label: "All Platforms" },
  { id: "pc", label: "PC" },
  { id: "console", label: "Console" },
  { id: "mobile", label: "Mobile" },
];

export const personalizedRecommendations = [
  {
    id: 23,
    title: "Desert Survival",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1964&auto=format&fit=crop",
    price: 19.99,
    tags: ["Survival", "Open World", "Adventure"],
    releaseDate: "Based on your wishlist",
  },
  {
    id: 24,
    title: "Athletic Championship",
    image: "https://images.unsplash.com/photo-1551638806-e20707e6b315?q=80&w=1964&auto=format&fit=crop",
    price: 29.99,
    tags: ["Sports", "Multiplayer", "Simulation"],
    releaseDate: "Similar to games you've played",
  },
  {
    id: 25,
    title: "Tactical Warfare",
    image: "https://images.unsplash.com/photo-1569705286332-331b4dab67fc?q=80&w=1771&auto=format&fit=crop",
    price: 24.99,
    originalPrice: 39.99,
    tags: ["Strategy", "Military", "Multiplayer"],
    releaseDate: "On sale now",
  },
  {
    id: 26,
    title: "Pet Companions",
    image: "https://images.unsplash.com/photo-1516734212186-65266f60d5a8?q=80&w=1771&auto=format&fit=crop",
    price: 15.99,
    tags: ["Casual", "Simulation", "Family-Friendly"],
    releaseDate: "Popular in your region",
  },
];

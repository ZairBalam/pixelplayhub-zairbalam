import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Globe } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-steam-darkblue px-4 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">PixelPlayHub</h3>
            <p className="mb-4 text-sm">
              The ultimate destination for gamers to discover, purchase, and enjoy the latest and greatest video games.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 transition hover:text-steam-accent">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 transition hover:text-steam-accent">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Youtube" className="text-gray-400 transition hover:text-steam-accent">
                <Youtube size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 transition hover:text-steam-accent">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-steam-accent">About Us</a></li>
              <li><a href="#" className="hover:text-steam-accent">Careers</a></li>
              <li><a href="#" className="hover:text-steam-accent">Press Center</a></li>
              <li><a href="#" className="hover:text-steam-accent">Steam Works</a></li>
              <li><a href="#" className="hover:text-steam-accent">Steam Labs</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-steam-accent">Support</a></li>
              <li><a href="#" className="hover:text-steam-accent">Community</a></li>
              <li><a href="#" className="hover:text-steam-accent">Developers</a></li>
              <li><a href="#" className="hover:text-steam-accent">Hardware</a></li>
              <li><a href="#" className="hover:text-steam-accent">Gift Cards</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-steam-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-steam-accent">Terms of Service</a></li>
              <li><a href="#" className="hover:text-steam-accent">Refund Policy</a></li>
              <li><a href="#" className="hover:text-steam-accent">Legal Information</a></li>
              <li><a href="#" className="hover:text-steam-accent">Subscriber Agreement</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="mb-4 text-sm md:mb-0">© 2025 Zair Balam PixelPlayHub Corporation. All rights reserved. All trademarks are property of their respective owners.</p>
          <div className="flex items-center space-x-2">
            <Globe size={18} />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
import React from 'react';
import { CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Separator } from './ui/separator';

const PaymentOptions = () => {
  const paymentMethods = [
    { 
      name: 'Credit/Debit Cards',
      icon: '/credit-cards.png',
      description: 'Visa, MasterCard, American Express, Discover'
    },
    { 
      name: 'Digital Wallets',
      icon: '/digital-wallets.png',
      description: 'PayPal, Apple Pay, Google Pay'
    },
    { 
      name: 'Gift Cards',
      icon: '/gift-cards.png',
      description: 'Redeem or purchase PixelPlayHub gift cards'
    },
    { 
      name: 'Bank Transfer',
      icon: '/bank-transfer.png',
      description: 'Direct bank transfer options available in select regions'
    },
    { 
      name: 'Cryptocurrency',
      icon: '/crypto.png',
      description: 'Bitcoin, Ethereum, and other select cryptocurrencies'
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-steam-green text-white hover:bg-steam-green/90 sm:w-auto">
          <CreditCard size={16} className="mr-2" />
          Payment Options
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-steam-light text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Secure Payment Options</DialogTitle>
          <DialogDescription className="text-gray-400">
            Choose from multiple secure payment methods to purchase your games.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          {paymentMethods.map((method, index) => (
            <div key={method.name}>
              <div className="flex items-start gap-4 py-2">
                <div className="h-12 w-12 flex-shrink-0 rounded bg-steam-darkblue p-2">
                  <CreditCard className="h-full w-full text-steam-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{method.name}</h3>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </div>
              </div>
              {index < paymentMethods.length - 1 && <Separator className="my-2 bg-gray-800" />}
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-between">
          <p className="text-sm text-gray-400">All transactions are secure and encrypted</p>
          <Button variant="outline" className="border-gray-700 text-white hover:bg-steam-gray hover:text-white">
            Learn More
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentOptions;

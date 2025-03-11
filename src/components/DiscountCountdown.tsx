
import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface DiscountCountdownProps {
  endDate: Date;
  className?: string;
}

const DiscountCountdown: React.FC<DiscountCountdownProps> = ({ endDate, className = '' }) => {
  const calculateTimeLeft = () => {
    const difference = endDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div className={`flex items-center space-x-2 text-sm text-gray-300 ${className}`}>
      <Timer size={14} className="text-steam-accent" />
      <span>Sale ends in:</span>
      <div className="font-mono">
        {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
        <span>{formatTime(timeLeft.hours)}:</span>
        <span>{formatTime(timeLeft.minutes)}:</span>
        <span>{formatTime(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default DiscountCountdown;

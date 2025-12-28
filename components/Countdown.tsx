
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number }>({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        d: Math.floor(distance / (1000 * 60 * 60 * 24)),
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.d },
    { label: 'HOURS', value: timeLeft.h },
    { label: 'MINS', value: timeLeft.m },
    { label: 'SECS', value: timeLeft.s },
  ];

  return (
    <div className="flex space-x-4 md:space-x-10">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl md:text-5xl font-light text-gray-800 tabular-nums tracking-tight">
            {unit.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-300 mt-1 md:mt-2">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

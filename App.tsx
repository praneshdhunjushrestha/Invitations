
import React, { useState, useEffect } from 'react';
import FlashlightHero from './components/FlashlightHero';
import Countdown from './components/Countdown';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 overflow-hidden">
        <div className="w-12 h-12 border-2 border-gray-100 border-t-[#d4af37] rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 font-serif tracking-[0.3em] uppercase text-[10px] animate-pulse">Refining the Invitation...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-white text-[#0f172a] overflow-hidden fixed inset-0 select-none">
      {/* Left Column: Typography & Information */}
      <div className="w-full h-[45%] md:h-full md:w-[45%] lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-24 z-30 bg-white overflow-hidden">
        <div className="max-w-md mx-auto md:mx-0 animate-in fade-in slide-in-from-left-10 duration-1000">
          
          <header className="mb-6 md:mb-10">
            <h1 className="flex flex-col">
              <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#d4af37] leading-[0.8] tracking-tighter uppercase">
                Pranesh
              </span>
              <span className="text-2xl sm:text-3xl md:text-5xl font-cursive text-gray-400 lowercase italic my-2 md:my-4 ml-1">
                weds
              </span>
              <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#d4af37] leading-[0.8] tracking-tighter uppercase">
                Shreeja
              </span>
            </h1>
          </header>

          <section className="mb-10 md:mb-14">
            <div className="space-y-1">
              <p className="text-lg md:text-2xl font-serif text-gray-800 tracking-wider font-bold">
                FEBRUARY 14, 2026
              </p>
              <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.3em]">
                CHENNAI, TAMIL NADU
              </p>
            </div>
          </section>

          <footer className="pt-8 border-t border-gray-100">
            <Countdown targetDate="2026-02-14T10:00:00" />
          </footer>
        </div>
      </div>

      {/* Right Column: Interactive Visuals with Gradient Overlay */}
      <div className="w-full h-[55%] md:h-full md:w-[55%] lg:w-[60%] relative bg-gray-50 overflow-hidden">
        {/* 
            The Gradient Overlay:
            Positions on top of the image to blend with the white information section.
        */}
        <div className="absolute inset-y-0 left-0 z-20 pointer-events-none hidden md:block bg-gradient-to-r from-white via-white/80 to-transparent w-64 lg:w-80"></div>
        <div className="absolute inset-x-0 top-0 z-20 pointer-events-none md:hidden bg-gradient-to-b from-white via-white/80 to-transparent h-32"></div>
        
        <FlashlightHero 
          imageUrl="DSC01262.JPG" 
          instruction=""
        />
      </div>
    </div>
  );
};

export default App;

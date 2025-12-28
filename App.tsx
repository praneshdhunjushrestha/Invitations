
import React, { useState, useEffect } from 'react';
import FlashlightHero from './components/FlashlightHero';
import Countdown from './components/Countdown';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial asset loading for smooth entrance
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 overflow-hidden">
        <div className="w-12 h-12 border-2 border-gray-100 border-t-[#d4af37] rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 font-serif tracking-[0.3em] uppercase text-[10px] animate-pulse italic">Preparing the Invitation...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-white text-[#0f172a] overflow-hidden fixed inset-0 select-none">
      {/* Left Column: Typography & Essential Details */}
      <div className="w-full h-[45%] md:h-full md:w-[45%] lg:w-[40%] flex flex-col justify-center px-8 md:px-16 lg:px-24 z-30 bg-white overflow-hidden shadow-2xl md:shadow-none">
        <div className="max-w-md mx-auto md:mx-0 animate-in fade-in slide-in-from-left-10 duration-1000">
          
          <header className="mb-8 md:mb-12">
            <h1 className="flex flex-col">
              <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#d4af37] leading-[0.85] tracking-tighter uppercase transition-colors duration-500">
                Pranesh
              </span>
              <span className="text-2xl sm:text-3xl md:text-5xl font-cursive text-gray-400 lowercase italic my-2 md:my-5 ml-1 opacity-70">
                weds
              </span>
              <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#d4af37] leading-[0.85] tracking-tighter uppercase transition-colors duration-500">
                Shreeja
              </span>
            </h1>
          </header>

          <section className="mb-12 md:mb-16">
            <div className="space-y-2 border-l-2 border-gray-50 pl-6 py-2">
              <p className="text-xl md:text-3xl font-serif text-gray-800 tracking-wider font-bold">
                FEBRUARY 14, 2026
              </p>
              <p className="text-gray-400 text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-medium">
                CHENNAI, TAMIL NADU
              </p>
            </div>
          </section>

          <footer className="pt-10 border-t border-gray-100">
            <Countdown targetDate="2026-02-14T10:00:00" />
          </footer>
        </div>
      </div>

      {/* Right Column: Interactive Flashlight Hero Visuals */}
      <div className="w-full h-[55%] md:h-full md:w-[55%] lg:w-[60%] relative bg-gray-50 overflow-hidden">
        {/* Visual Blending Overlays */}
        <div className="absolute inset-y-0 left-0 z-20 pointer-events-none hidden md:block bg-gradient-to-r from-white via-white/80 to-transparent w-64 lg:w-96"></div>
        <div className="absolute inset-x-0 top-0 z-20 pointer-events-none md:hidden bg-gradient-to-b from-white via-white/80 to-transparent h-40"></div>
        
        <FlashlightHero 
          imageUrl="DSC01262.JPG" 
        />
      </div>
    </div>
  );
};

export default App;

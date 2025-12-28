
import React, { useState, useRef } from 'react';

interface FlashlightHeroProps {
  imageUrl: string;
  instruction?: string;
}

const FlashlightHero: React.FC<FlashlightHeroProps> = ({ imageUrl }) => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updatePosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY);
    setIsHovering(true);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-none group bg-gray-100"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={() => setIsHovering(false)}
    >
      {/* Base Layer: Black & White */}
      <img 
        src={imageUrl} 
        alt="Wedding Story" 
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-110 transition-opacity duration-1000"
        draggable={false}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069";
        }}
      />

      {/* Top Layer: Color (Masked by Radial Gradient) */}
      <img 
        src={imageUrl} 
        alt="Wedding Story Color" 
        className="absolute inset-0 w-full h-full object-cover z-10"
        draggable={false}
        style={{
          WebkitMaskImage: `radial-gradient(circle 220px at ${position.x}px ${position.y}px, black 30%, transparent 100%)`,
          maskImage: `radial-gradient(circle 220px at ${position.x}px ${position.y}px, black 30%, transparent 100%)`,
        }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069";
        }}
      />

      {/* Elegant Cursor Ring */}
      <div 
        className="absolute pointer-events-none z-40 border-2 border-white/40 rounded-full w-12 h-12 -ml-6 -mt-6 transition-transform duration-75"
        style={{ 
          left: position.x, 
          top: position.y,
          opacity: isHovering ? 1 : 0,
          mixBlendMode: 'difference',
          transform: `scale(${isHovering ? 1 : 0.2})`
        }}
      />
    </div>
  );
};

export default FlashlightHero;

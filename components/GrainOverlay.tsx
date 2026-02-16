import React from 'react';

export const GrainOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden opacity-50 mix-blend-multiply">
      <div
        className="absolute inset-[-200%] h-[400%] w-[400%] animate-scanline bg-[url('/images/noise.png')] opacity-10"
        style={{ animationDuration: '0.2s', animationTimingFunction: 'steps(10)' }}
      />
      <div
        className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"
      />
    </div>
  );
};
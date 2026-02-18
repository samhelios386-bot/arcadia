import React from 'react';

export const PilgrimageCardBackground: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <div className={`absolute inset-0 w-full h-full bg-white overflow-hidden pointer-events-none z-0 ${className}`}>
            {/* 
        Changes:
        - viewBox: 0 0 800 200 (Wide aspect ratio to support cover mode)
        - preserveAspectRatio: "xMidYMid slice" (Ensures coverage without distortion)
        - Removed: Sparkle decoration
        - Extended: Cloud and mountain paths to cover the wider 800px area
      */}
            <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                {/* Sky Background - Extended Width */}
                <rect x="0" y="0" width="800" height="200" fill="#6BAED6" />

                {/* White Geometric Clouds - Layered blocks extended */}
                {/* Left Cloud Group */}
                <path d="M-20 80 L60 80 L100 50 L140 80 L200 80 L160 110 L-20 110 Z" fill="#FFFFFF" />
                <path d="M20 80 L60 50 L100 50 L60 80 Z" fill="#E6F4F9" />

                {/* Center-Right Cloud Group (Original Position) */}
                <path d="M220 70 L280 70 L320 40 L360 70 L420 70 L380 100 L220 100 Z" fill="#FFFFFF" />
                <path d="M280 70 L320 40 L360 70 L320 100 Z" fill="#E6F4F9" />

                {/* Far Right Cloud Group (New Extension) */}
                <path d="M600 60 L650 60 L680 30 L720 60 L780 60 L740 90 L600 90 Z" fill="#FFFFFF" opacity="0.9" />
                <path d="M650 60 L680 30 L720 60 L680 90 Z" fill="#E6F4F9" />

                {/* --- MOUNTAINS LAYERED BACK TO FRONT (Extended to 800px) --- */}

                {/* 1. Furthest Back - Lightest Grey-Blue */}
                <polygon points="0,200 100,100 250,200" fill="#9EcAE1" />
                <polygon points="200,200 350,50 500,200" fill="#C6DBEF" opacity="0.8" />
                <polygon points="450,200 600,80 750,200" fill="#9EcAE1" opacity="0.9" /> {/* New Peak */}
                <polygon points="700,200 800,120 850,200" fill="#C6DBEF" /> {/* New Edge */}

                {/* 2. Mid Ground - Medium Blue */}
                <polygon points="-50,200 150,120 350,200" fill="#4292C6" />
                <polygon points="150,120 200,200 100,200" fill="#2171B5" opacity="0.3" />
                <polygon points="400,200 550,130 700,200" fill="#4292C6" /> {/* New Range */}

                {/* 3. Foreground Right - Darker Blue/Teen */}
                <polygon points="250,200 350,80 480,200" fill="#2171B5" />
                <polygon points="350,80 400,200 300,200" fill="#08519C" opacity="0.2" />
                <polygon points="550,200 650,110 750,200" fill="#2171B5" opacity="0.8" /> {/* New Range */}

                {/* 4. Foreground Left/Center - Darkest Accent */}
                <polygon points="120,200 220,90 320,200" fill="#084594" opacity="0.9" />
                <polygon points="220,90 270,200 170,200" fill="#08306B" opacity="0.2" />
                <polygon points="620,200 700,140 780,200" fill="#084594" opacity="0.9" /> {/* New Accent */}

                {/* Ground Line */}
                <rect x="0" y="190" width="800" height="10" fill="#08306B" opacity="0.3" />

                {/* Sparkle Decoration REMOVED */}
            </svg>
        </div>
    );
};

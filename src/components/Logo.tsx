import React, { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  isDarkTheme?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  isDarkTheme = false,
}) => {
  const [imgError, setImgError] = useState(false);

  // Height configurations maintaining exact natural aspect ratio
  const sizeClasses = {
    sm: 'h-10 w-auto',
    md: 'h-14 w-auto',
    lg: 'h-24 w-auto',
    xl: 'h-36 md:h-48 w-auto',
  };

  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      {/* 
        Authentic Logo Asset:
        Renders /logo.png or /logo.webp when placed in /public by the user,
        with seamless graceful fallback to the optimized vector SVG.
        Proportions are strictly maintained; never distorted or recolored.
      */}
      {!imgError ? (
        <img
          src="/logo.png"
          onError={() => setImgError(true)}
          alt="Safety Management Solutions (SMS)"
          className={`${sizeClasses[size]} object-contain`}
          loading="eager"
        />
      ) : (
        <img
          src="/logo.svg"
          alt="Safety Management Solutions (SMS)"
          className={`${sizeClasses[size]} object-contain`}
          loading="eager"
        />
      )}

      {showText && size === 'sm' && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`text-base font-bold tracking-tight ${isDarkTheme ? 'text-white' : 'text-[#0F2C47]'}`}>
            SMS
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-[#336E95] uppercase">
            Safety Solutions
          </span>
        </div>
      )}
    </div>
  );
};

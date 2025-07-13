import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Banner({ gameBannerList }) {
  if (!gameBannerList || gameBannerList.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, gameBannerList.length]);

  // Handle next
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gameBannerList.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gameBannerList.length - 1 : prevIndex - 1
    );
  };

  const currentGame = gameBannerList[currentIndex];

  return (
    <div className='relative transition-all duration-500 ease-in-out'>
      {/* Left/Right Buttons */}
      <button
        onClick={handlePrev}
        className='absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70'
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className='absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70'
      >
        <ChevronRight />
      </button>

      {/* Banner Info */}
      <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
        <h2 className='text-[24px] text-white font-bold'>
          {currentGame.name}
        </h2>
      </div>

      <img
        src={currentGame.background_image}
        className='md:h-[320px] w-full object-cover object-top rounded-xl'
        alt={currentGame.name}
      />
    </div>
  );
}

export default Banner;

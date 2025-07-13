import React from 'react';
import { useNavigate } from 'react-router-dom';

function TrendingGames({ gameList }) {
  const navigate = useNavigate();

  return (
    <div className='mt-5 hidden md:block'>
      <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
      <div className='hidden md:grid md:grid-cols-3 gap-4 mt-5 lg:grid-cols-4'>
        {gameList.map((item, index) => index < 4 && (
          <div
            key={item.id}
            onClick={() => navigate(`/game/${item.id}`)}
            className='bg-[#76a8f75e] rounded-lg group
              hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'
          >
            <img src={item.background_image} className='h-[270px] rounded-t-lg object-cover' />
            <h2 className='dark:text-white p-2 text-[20px] font-bold'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingGames;

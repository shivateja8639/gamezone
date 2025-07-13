// src/Pages/GameDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../Services/GlobalApi';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    GlobalApi.getGameDetailsById(id).then((resp) => {
      setGame(resp.data);
    });
  }, [id]);

  if (!game) return <div className='text-center mt-20 text-xl text-gray-400'>Loading...</div>;

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 dark:text-white'>{game.name}</h1>
      <img src={game.background_image} className='w-full rounded-lg mb-4' />
      <p className='text-gray-700 dark:text-gray-300 mb-4'>{game.description_raw}</p>

      <div className='text-gray-600 dark:text-gray-300 space-y-1'>
        <p><strong>Released:</strong> {game.released}</p>
        <p><strong>Rating:</strong> {game.rating} ⭐</p>
        <p><strong>Metacritic:</strong> {game.metacritic}</p>
        <p><strong>Genres:</strong> {game.genres.map(g => g.name).join(', ')}</p>
        <p><strong>Platforms:</strong> {game.platforms?.map(p => p.platform.name).join(', ')}</p>
      </div>
    </div>
  );
}

export default GameDetails;

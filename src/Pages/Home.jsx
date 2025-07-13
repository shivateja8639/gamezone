import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesbyGenresId from '../Components/GamesbyGenresId';

function Home({ searchText }) {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");
  const [showGenres, setShowGenres] = useState(false); // new toggle state

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4, 'Action');
  }, []);

  useEffect(() => {
    if (searchText.trim() === '') {
      getGameListByGenreId(4, 'Action'); // Reset to default
    } else {
      GlobalApi.searchGameByQuery(searchText).then((resp) => {
        setGameListByGenres(resp.data.results);
        setSelectedGenreName(`Search: "${searchText}"`);
      });
    }
  }, [searchText]);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenreId = (id, name) => {
    setSelectedGenreName(name);
    setShowGenres(false); // auto-close on mobile after selecting
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };

  return (
    <div className='px-4 md:px-8'>
      {/* Mobile genre toggle button */}
      <div className='md:hidden flex justify-end my-2'>
        <button
          onClick={() => setShowGenres(!showGenres)}
          className='bg-blue-600 text-white px-4 py-2 rounded'
        >
          {showGenres ? 'Hide Genres' : 'Show Genres'}
        </button>
      </div>

      <div className='grid grid-cols-4 gap-4'>
        {/* Genre List: hidden on mobile unless toggled */}
        <div className={`${showGenres ? 'block' : 'hidden'} md:block col-span-4 md:col-span-1`}>
          <GenreList genreId={(genreId, name) => getGameListByGenreId(genreId, name)} />
        </div>

        {/* Game Content */}
        <div className='col-span-4 md:col-span-3'>
          {allGameList.length > 0 && (
            <>
              <Banner gameBannerList={allGameList.slice(0, 5)} />
              <TrendingGames gameList={allGameList} />

              {gameListByGenres.length > 0 ? (
                <GamesbyGenresId
                  gameList={gameListByGenres}
                  genreName={selectedGenreName}
                />
              ) : (
                <div className='text-center mt-10 text-gray-500 dark:text-gray-300 text-xl'>
                  No results found for "<span className='font-bold'>{searchText}</span>"
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

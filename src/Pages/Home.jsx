import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesbyGenresId from '../Components/GamesbyGenresId';

function Home() {
  const [allGameList,setAllGameList]=useState();
  const [gameListByGenres,setGameListByGenres]=useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");

  useEffect(()=>{
    getAllGamesList();
    getGameListByGenreId(4);
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results)
    })
  }

  const getGameListByGenreId=(id,name)=>{
    setSelectedGenreName(name);
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      console.log(resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='hidden md:block'>
        <GenreList genreId={(genreId,name)=>getGameListByGenreId(genreId,name) } />
      </div>
      <div className='col-span-4 md:col-span-3'>
       {allGameList?.length>0&&gameListByGenres.length>0?
       <div>
          <Banner gameBannerList={allGameList.slice(0, 5)} />
          <TrendingGames gameList={allGameList}/>
          <GamesbyGenresId gameList={gameListByGenres} genreName={selectedGenreName} />
        </div>
        :null}
      </div>
    </div>
  )
}

export default Home
import axios from "axios";

const key="c297c68bf34346ad90d6d4805d9e8170";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key=' + key + '&genres=' + id);
const searchGameByQuery = (query) => 
  axiosCreate.get(`/games?key=${key}&search=${query}`);
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId,
    searchGameByQuery,
}
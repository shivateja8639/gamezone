import axios from "axios";

const key="c297c68bf34346ad90d6d4805d9e8170";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=()=>axiosCreate.get('/genres?key='+key);
export default{
    getGenreList
}
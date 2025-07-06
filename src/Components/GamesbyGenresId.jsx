import React, { useEffect } from 'react'

function GamesbyGenresId({gameList,genreName}) {
    useEffect(()=>{
        console.log(gameList)
    },[])
  return (
    <div>
        <h2 className='font0bold text-[30px] dark:text-white mt-5 ' >{genreName} Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-6 mt-5'>
        {gameList.map((item)=>(
            <div className='bg-[#76a8f75e]
            p-3 rounded-lg pb-10 h-full
            hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer' >
                <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover ' />
                <h2 className='text-[20px] dark:text-white font-bold'>
                    {item.name} <span className='bg-green-600 text-white text-[12px] font-semibold px-2 py-[2px] rounded ml-2'>{item.metacritic} </span> 
                </h2>
                <h2 className='text-gray-500 dark:text-gray-300'>
                    ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count} 
                </h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default GamesbyGenresId
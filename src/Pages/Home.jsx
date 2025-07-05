import React from 'react'

function Home() {
  return (
    <div className='grid grid-cols-4'>
      <div className='bg-red-600 h-full hidden md:block'>Genere</div>
      <div className='col-span-4 md:col-span-3 bg-blue-400'> game list</div>
    </div>
  )
}

export default Home
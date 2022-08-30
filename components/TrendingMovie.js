import React from 'react'

const TrendingMovie = (props) => {
    const {TrendingMovies} = props;

  return (
    <div className='container w-full rounded-md flex justify-center lg:max-w-full sm:max-w-2xl'>
    <div className='container bg-slate-800 mt-10 h-auto flex justify-start pb-10 text-center rounded-md'>
        <h1 className='text-white font-bold text-2xl px-10 py-10'> Trending Movies <span className='rounded b'></span></h1>


    </div>
    </div>
  )
}

export default TrendingMovie
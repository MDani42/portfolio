import React from 'react'
import MoviesPic from '../assets/Movies.png'
import MyblogPic from '../assets/Myblog.png'
import TravellerPic from '../assets/Traveller.png'
import './projekteim.css'


export const Projekteim = () => {
  return (
    <div className='projetek' >
      <div className='proj'>
        <img src={MoviesPic} alt="Movies" className='propic'/>
        <a className='prolink' href="https://github.com/MDani42/movies" target="_blank">Movies</a>
      </div>
      <div className='proj'>
        <img src={MyblogPic} alt="Myblog" className='propic'/>
        <a className='prolink' href="https://github.com/MDani42/myblog" target="_blank">Myblog</a>
      </div>
      <div className='proj'>
        <img src={TravellerPic} alt="Traveller" className='propic'/>
        <a className='prolink' href="https://github.com/MDani42/traveller" target="_blank">Traveller</a>
      </div>
    </div>
  )
}

export default Projekteim;
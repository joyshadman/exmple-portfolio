import React from 'react'
import rectangleImg from '../assets/Rectangle.png';

const HeroSection = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{ backgroundImage: `url(${rectangleImg})` }}
      ></div>
    </div>
  )
}

export default HeroSection
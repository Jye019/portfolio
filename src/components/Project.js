import React from 'react'
import Slider from 'react-slick'
import Main from './ProjectMain'
import Auth from './ProjectAuth'
import Filter from './ProjectFilter'

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="project">
      <div className="contents">
        <Slider {...settings}>
          <Main />
          <Auth />
          <Filter />
        </Slider>
      </div>
    </div>
  )
}

export default Project

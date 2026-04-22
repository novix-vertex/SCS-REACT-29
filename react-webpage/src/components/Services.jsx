import React from 'react'

const Services = () => {
  return (
    <div className='services-section'>
      <div className="card1 card">
        <h4 class="services">Services</h4>
        <h3>At Horizon, we don't just play tennis - we live it. Since 2021, <br />our club has been a home for players of all levels, from eager <br />beginners to seasoned pros.</h3>

        <h4 className='explore'>Explore More <i class="ri-arrow-right-up-long-line"></i></h4>

      </div>
      <div className="card2 card">
        <button>Training Programs</button>
        <div className="bottom">
          <h4>Programs designed for all ages and abilities.</h4>
          <i class="ri-arrow-right-up-long-line"></i>
        </div>

      </div>
      <div className="card3 card"></div>

    </div>
  )
}

export default Services
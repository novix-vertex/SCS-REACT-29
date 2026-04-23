import React from 'react'

const FactsCards = () => {
  return (
    <div className='factscards-section'>

      <div className="card1 card">
        <h4 className='top'><i class="ri-home-8-line"></i></h4>
        <h3>Professional hard courts <span>with tournament-grade lighting & climate control - play in</span> perfect conditions, in any season.</h3>
        <h4 className='bottom'><span><span class="circle"></span></span>Game Mode</h4>
      </div>

      <div className="card2 card">
        <button>Private & Group Lessons</button>
      </div>

      <div className="card3 card">
        <div className="top">
          <h3>100+</h3>
          <h4>Pro Coaches</h4>
          <h5>Certified professional ready to boost your game from first serve to tournament level</h5>
        </div>
        <div className="bottom">
          <div className="expert-level level">
            <h4 className="level-text">Beginner</h4>
            <h4 className="dots"><span><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i></span></h4>
            <h4 className='count'>55</h4>
          </div>
          <div className="expert-level level">
            <h4 className="level-text">Intermediate</h4>
            <h4 className="dots"><span><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i></span></h4>
            <h4 className='count'>40</h4>
          </div>
          <div className="expert-level level">
            <h4 className="level-text">Advanced</h4>
            <h4 className="dots"><span><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i><i class="ri-circle-fill"></i></span></h4>
            <h4 className='count'>35</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FactsCards
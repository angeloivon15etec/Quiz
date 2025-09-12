import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return(
    <div className='container'> 
    <h1>Quiz App</h1>
    <hr />
    <h2>which device is required for the internet?</h2>
    <ul>
        <li>moden</li>
        <li>router</li>
        <li>lan cable</li>
        <li>pen drive</li>
    </ul>
    <button>next</button>
    <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz
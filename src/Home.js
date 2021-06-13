import { useState, useEffect } from 'react'

import './home.css'

const Home = () => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (clicked) {
      window.location.assign('https://buy.stripe.com/eVa15M90P8jke2cbII')
    }
  })

  return (
    <div className="container">
      <div className="main">
        <h1>Help Me Buy Pizza</h1>
        <p>Ever since I was a young lad, I dreamed of having a pizza to eat whenever I wanted. Please help me make that dream come true and donate today.</p>
        <div className="btn" onClick={() => setClicked(true)}>Donate Now</div>
        <div className="countContainer">
          <h3>Pizzas Purchased:</h3>
          <p className="count">#134</p>
        </div>
      </div>
      <div>
        <img src="pizza.jpg" alt="a woodfire pizza with olives" height="500px" width="500px" />
      </div>
    </div>
  )
}

export default Home

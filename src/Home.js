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
    <div className="pizza flex flex-col justify-center items-center h-screen text-white gap-6">
        <p className="text-5xl md:text-7xl font-bold">Help Me Buy Pizza</p>
        <p className="text-xl w-9/12 lg:w-8/12 xl:w-1/2 text-center">Ever since I was a young lad, I dreamed of having a pizza to eat whenever I wanted. Please help me make that dream come true and donate today.</p>
        <button type="button" className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-bold rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setClicked(true)}>Donate Now</button>
        <p className="fixed bottom-4 left-6">Made by Michael and Sam</p>
    </div>
  )
}

export default Home

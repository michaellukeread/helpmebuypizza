import { useState, useEffect } from 'react'
import { CreditCardIcon } from '@heroicons/react/solid'

import './home.css'

const Home = () => {
  const [clicked, setClicked] = useState(false)
  const [instagram, setInstagram] = useState(false)

  useEffect(() => {
    if (clicked) {
      window.location.assign('https://buy.stripe.com/eVa15M90P8jke2cbII')
    }
    if (instagram) {
      window.location.assign('https://www.instagram.com/helpmebuypizza?r=nametag')
    }
  })

  return (
    <div className="pizza flex flex-col justify-center items-center h-screen text-white gap-6">
        <p className="text-center text-5xl md:text-7xl font-bold">Help Me Buy Pizza</p>
        <p className="text-xl w-9/12 lg:w-8/12 xl:w-1/2 text-center">Ever since I was a young lad, I dreamed of having a pizza to eat whenever I wanted. Please help me make that dream come true and donate today.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-600" onClick={() => setClicked(true)}>
          Donate Now
          <CreditCardIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
          <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-600" onClick={() => setInstagram(true)}>
          Instagram
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="ml-3 -mr-1 h-5 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          </button>
        </div>

    </div>
  )
}

export default Home

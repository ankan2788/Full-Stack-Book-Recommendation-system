import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Bookcards from "./components/Bookcards";

import { FaSearch } from "react-icons/fa";

import './index.css'

function App() {
  const [Form, setForm] = useState({
    book_name: ""
  })

  return (
    <>
      <nav className='flex items-center justify-center w-screen h-16 bg-black'>
        <img src="https://cdn.pixabay.com/photo/2016/09/16/09/20/books-1673578_1280.png" alt="" className='flex justify-center w-12 h-12 mx-2 my-3 rounded-full ' />
        <div><h1 className='flex justify-center text-2xl font-bold text-white text-pretty mr-[700px]'>Book-e-Pedia</h1></div>
        < div className='justify-center'><h1 className='flex justify-center m-2 mr-10 text-2xl font-bold text-white text-pretty'>Smart recomendation system by using content based filering</h1></div>

      </nav>
      <main className="items-center w-screen h-screen justify-items-center bg-[url('https://images2.alphacoders.com/261/26102.jpg')] bg-cover bg-center">

        <form action="" method="post"> <div id="search-section" className='flex items-center justify-center w-screen p-5 bg-transparent bg-gray-400'>

          <input type="search" value="" placeholder='search for books' className='flex justify-center w-1/2 h-12 p-2 text-2xl bg-white rounded-sm text-pretty' />

          <button
            type="submit"
            className="flex items-center justify-center w-12 h-12 m-2 bg-white rounded-sm"
          >
            <FaSearch className="text-2xl text-black" />
          </button>
        
      </div> </form>


      <div id="bookcards">
        <Bookcards />
      </div>

    </main >
      
        </>
  )
}

export default App

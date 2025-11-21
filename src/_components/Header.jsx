'use client'
import React from 'react'
import {Hamburger , MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { hamburguers } from '@/data/array-hamburguers'

export function Header({onBuscar, search, setSearch}) {


  return (
    <section>
       <div className='container md:justify-between flex px-10 py-15 gap-10 md:flex-row items-center flex-col'>

          <div className=" flex flex-col  gap-4 md:px-4 " >
              <h1 className="text-[1.5rem] flex items-center gap-2 font-bold text-gray-800 "> <Hamburger className="text-red-500 w-7 h-7"/> Food Next</h1>
              <p className="text-gray-700">Onde você encontra seu hambúrguer preferido</p>
          </div>

          <div className=' mt-3 mb--10 w-[100%] h-12 md:w-[500px] md:h-[40px] border-2 border-red-400 flex items-center gap-3 px-4 justify-between  rounded-full shadow-md'>
             <input 
              onChange={(e) => setSearch(e.target.value)   } 
              onKeyDown={(e) => e.key === 'Enter' && onBuscar()}
              value={search}  
              type='text' 
              className='search text-black  w-[90%] h-[25px]  px-4 outline-none focus:outline-none focus:ring-0 border-none ' 
              placeholder='Search'
             />
         
             <button className='outline-none focus:outline-none focus:ring-0 border-none ' onClick={onBuscar}>
                <MagnifyingGlass className='w-5 h-7 hover:text-red-700 ' />
             </button>
         </div>
       </div>

    </section>
  )
}


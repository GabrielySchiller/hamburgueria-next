'use client';


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {StarIcon} from '@phosphor-icons/react/dist/ssr'
import {hamburguers} from '@/data/array-hamburguers'

export function CardHamburguer({hamburguers}) {
  if(!hamburguers) return null;


  return (
    <div  className='flex flex-wrap gap-4 justify-center p-0  '>
       
           <Link href={`/hamburguer/${hamburguers.id}`} 
           className='p-2 flex  flex-col max-[330px]:w-30 w-35 md:w-50 md:h-57 max-[330px]:h-60 h-63 border-1 border-gray-200 shadow-md rounded-2xl hover:border-red-600 transition-all '>
            
             
             <div className=' flex justify-center items-center'>
                <Image 
                src={hamburguers.image} 
                alt='image do hambúrguer'
                width={110}
                height={110}
                className= 'rounded-2xl mb-5'
                
                />
            </div> 
            
             <div className='flex flex-col  justify-center '>
              
              <h3 className=' flex justify-center w-[95%] max-[330px]:mb-3 mb-6 mt-[-15px] h-5 font-semibold break-words lg:break-all'>{hamburguers.name}</h3>
             
              <p className='text-[1rem] mx-1 mt-6  mb-[-16px] md:mb-0 md:mt-0 '> 
                {hamburguers.price.toLocaleString('pt-BR' , {
                   style: 'currency',
                   currency: 'BRL',
                 })}
              </p>

              <div className='flex max-[330px]:mt-5 mt-6 md:mt-0   max-[330px]:flex-col-reverse  flex-row justify-between items-center px-1 '>
                 <Link href={`/hamburguer/${hamburguers.id}`} className="text-red-500 hover:underline">
                     Ver mais...
                 </Link>
                <p className='flex items-center gap-1 max-[330px]:hidden'>
                    {hamburguers.star}
                    <StarIcon className='text-yellow-500'/>
                </p>
              </div>
             </div> 
         </Link>
    </div>
  )
}




import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {StarIcon} from '@phosphor-icons/react/dist/ssr'
import {hamburguers} from '@/data/array-hamburguers'

export function CardHamburguer({hamburguers}) {
  if(!hamburguers) return null;


  return (
    <div  className='flex flex-wrap gap-4 justify-center  '>
       
           <Link href={`/hamburguer/${hamburguers.id}`} className='p-2 flex flex-col w-36 h-60 md:w-50 md:h-55 border-1 border-gray-200 shadow-md rounded-2xl hover:border-red-600 transition-all '>
             
             <div className='flex justify-center items-center'>
                <Image 
                src={hamburguers.image} 
                alt='image do hambúrguer'
                width={110}
                height={110}
                className= 'rounded-2xl mb-5'
                />
            </div> 
            
             <div className='flex flex-col gap-1 justify-center '>
              
              <h3 className=' mb-1 mt-[-15px] h-5'>{hamburguers.name}</h3>
             
              <p className='text-[1rem] mx-1 mt-6 mb-[-16px] md:mb-0 md:mt-0 '> 
                {hamburguers.price.toLocaleString('pt-BR' , {
                   style: 'currency',
                   currency: 'BRL',
                 })}
              </p>

              <div className='flex mt-5 md:mt-0  flex-row justify-between items-center px-1 '>
                 <Link href={`/hamburguer/${hamburguers.id}`} className="text-red-500 hover:underline">
                     Ver mais...
                 </Link>
                <p className='flex items-center gap-1'>
                    {hamburguers.star}
                    <StarIcon className='text-yellow-500'/>
                </p>
              </div>
             </div> 
         </Link>
    </div>
  )
}


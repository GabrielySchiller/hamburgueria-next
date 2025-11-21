'use client';

import React from 'react'

import { CardHamburguer } from './CardHamburguer'
import { hamburguers } from '@/data/array-hamburguers'
import {X} from '@phosphor-icons/react/dist/ssr'



export function ContainerHamburguers({resultados = [], buscando = false, onLimparBusca}) {
  const lista = resultados.length > 0 ? resultados : hamburguers;

  return (
    <section className='px-4 md:px-10 py-5 flex justify-center items-center '>
        <div className='container flex flex-col justify-centeritems-center'>
            
            {buscando ? (
              <div className=' px-4 pb-10 flex items-center gap-3'>
                 <button onClick={onLimparBusca}>
                  <X className='w-6 h-6 text-white bg-red-700 rounded'/>
                  </button>
                 <h2 className='text-2xl text-red-700 '>Resultados Encontrados:</h2>
              </div>
            ) : (
               <div className='pb-10 px-4'>
                <h2 className='text-2xl text-red-700 '>Nosso Cardápio</h2>
              </div>
            )}



          {buscando ? (
            <div className='flex justify-center md:justify-start  flex-wrap gap-3'>
            {lista.length > 0 ? (
              lista.map((item) => (
                <CardHamburguer key={item.id} hamburguers={item}/>
              ))
            ) : (
              <p className='text-black'>Nenhum Hambúrguer encontrado!</p>
            )}
           </div>
           )
            : (
            <div className='flex justify-center flex-wrap gap-4'>
            { lista.map((item) => (
                <CardHamburguer key={item.id} hamburguers={item}/>
              ))
            }
           </div>
          ) }

           
            
        </div>

       
    </section>
  )
}
                

 
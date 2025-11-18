import React from 'react'
import { CardHamburguer } from './CardHamburguer'
import { hamburguers } from '@/data/array-hamburguers'


export function ContainerHamburguers({resultados = []}) {
  const buscando = resultados.length > 0 || resultados.searched;
  const lista = resultados.length > 0 ? resultados : hamburguers;

  return (
    <section className='px-5 md:px-10 py-5 flex justify-center '>
        <div className='container'>
            
            {buscando ? (
              <div className='pb-10'>
                <h2 className='text-2xl text-red-700 '>Resultados Encontrados:</h2>
              </div>
            ) : (
               <div className='pb-10'>
                <h2 className='text-2xl text-red-700 '>Nosso Cardápio</h2>
              </div>
            )}




           <div className='flex justify-center flex-wrap gap-3'>
            {lista.length > 0 ? (
              lista.map((item) => (
                <CardHamburguer key={item.id} hamburguers={item}/>
              ))
            ) : (
              <p>Nenhum Hambúrguer encontrado!</p>
            )}
           </div>
            
        </div>

       
    </section>
  )
}
                

 
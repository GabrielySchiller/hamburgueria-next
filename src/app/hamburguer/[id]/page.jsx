'use client'

import React from 'react'
import { hamburguers } from '@/data/array-hamburguers'
import {PlusIcon , MinusIcon , ArrowBendDoubleUpLeftIcon} from '@phosphor-icons/react/dist/ssr'
import {Hamburger, ArrowRightIcon , Clock , WhatsappLogo, InstagramLogo, FacebookLogo} from '@phosphor-icons/react/dist/ssr'
import {StarIcon} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default  function Page({params}) {
  const {id} = params;
  
  const hamburguer = hamburguers.find(h => h.id === Number(id));

   if (!hamburguer) {
    return <p className="text-center text-gray-500 mt-10">Hambúrguer não encontrado 😢</p>;
  }

  const [quantidade, setQuantidade] = useState(1)
  
  function aumentar() {
     setQuantidade(prev => prev + 1)
     
   }
   function diminuir() {
      setQuantidade(prev => prev - 1)
      
   }
   
   if(quantidade < 1){
      setQuantidade(1)
   }
   
   const valor = Number(hamburguer.price) * quantidade
   valor.toString()

   if(valor.length < 4){
      valor + "0"
   }
  
 return (

<section className=' relative  w-full h-full flex  gap-10 flex-col justify-center items-center   '>
    
   <div className=" container lg:col lg:col-2 p-6 flex flex-col lg:flex-row  lg:justify-between items-center justify-center ">
     
      <div className='absolute  top-0 mt-6 left-0 mx-6'>
        <Link className=' flex items-center gap-6' href={'/'}>
           <ArrowBendDoubleUpLeftIcon className='w-8 h-8 text-red-500'/>
           <h1 className="text-[1rem] hidden md:flex items-center gap-2 font-bold text-gray-800 "> <Hamburger className="text-red-500 w-7 h-7"/> Food Next</h1>
        </Link>
      </div>
      
      <div className=' flex items-center flex-col  justify-center p-5' data-aos="fade-down-right">
         <Image
            src={hamburguer.image}
             alt={hamburguer.name}
            width={300}
            height={300}
            className="rounded-lg mx-auto lg:w-[390px]  "
            sizes="(max-width: 768px) 100vw"
         />
      </div>
      
      <div className='flex gap-20 items-center justify-center mt-10 lg:w-[50%] lg:h-[100%] lg:border-l-2   border-l-gray-400 lg:pl-20 '>
      
       <div className=' flex justify-center flex-col'>
            <h1 className=" flex justify-around items-center text-3xl text-gray-800 font-bold mt-4">
               {hamburguer.name} 
                <p className='flex text-[1.4rem] items-center gap-1'>
                    {hamburguer.star}
                <StarIcon className='text-yellow-500'/>
                </p>   
            </h1>
            <div className='flex flex-col gap-5'>
              <p className="text-gray-800 mt-2 lg:text-[1.1rem] ">{hamburguer.description}</p>
              <p className='flex items-center gap-2 text-gray-900'> <Clock className='w-5 h-5'/> {hamburguer.time}</p>
            </div>

        <div>
             
      </div>


       <div className='  flex  md:justify-around flex-col md:flex-row md:items-center mt-18 lg:mb-10 gap-10'>

         <div className=' relative flex gap-5 justify-center items-center '>
           <div className='absolute top-[-35px] left-[-5px]'>
             <p>Quantidade :</p>
           </div>
            
            <button onClick={aumentar} className='bg-gray-800 p-2 rounded-md'>
               <PlusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white'/>
            </button>
         
            <div className='flex justify-center w-12 bg-gray-300 p-2 rounded-md'>
               <p className='unidade  text-[1.2rem] lg:text-[1rem] '>{quantidade}</p>
            </div>

            <button className='bg-gray-800 p-2 rounded-md'>
               <MinusIcon onClick={diminuir} className='w-5 h-5 lg:w-4 lg:h-4  text-white'  />
            </button>
         </div> 
         
         <div className='hidden md:flex'>
            <ArrowRightIcon className='w-5 h-5'/>
         </div>

        <div className='md:w-[220px]  flex justify-center gap-4 border-2 bg-gray-200 border-gray-800 p-2 rounded-md text-gray-800'>
          <p>Total =</p>
         
           <p className='text-[1.1rem] lg:text-[1rem] '> {valor.toLocaleString('pt-BR' , {
             style: 'currency',
             currency: 'BRL',
            })}
          </p>
       </div>
     </div>

       <div className='flex mt-6 md:mx-auto md:w-[350px] items-center justify-center  border-3 hover:text-gray-800 hover:bg-transparent   hover:border-red-600 bg-red-600 text-white rounded-lg py-2 px-5'>
          <a className='text-[1.1rem]  ' href="#">Fazer pedido</a>
       </div>
    </div>  
   </div>
</div>

 <footer className= "md:fixed md:bottom-0  w-[100%] m-0 bg-red-500  py-5 px-10 flex justify-center gap-10 items-center">
         
         <div className="text-white flex flex-col justify-center items-center text-[0.9rem]">
           <p className="text-[1.3rem] flex items-center gap-2 font-bold text-gray-800 "> <Hamburger className=" w-6 h-6"/> Food Next</p>
           <p>+55 53 9000000</p>
           <p>Centro , Pelotas | RS</p>
         </div>

         <div className="flex gap-3">
          <a href="#">
            <WhatsappLogo className="text-white w-5 h-5"/>
          </a>
          <a href="#"> 
            <InstagramLogo className="text-white w-5 h-5"/>
          </a>
          
          <a href="#">
            <FacebookLogo className="text-white w-5 h-5 "/>
          </a>
         </div>
      </footer>
</section>
)
}


          


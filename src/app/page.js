'use client'

import {Hamburger , WhatsappLogo, InstagramLogo, FacebookLogo} from '@phosphor-icons/react/dist/ssr'
import { Header } from "@/_components/Header";
import { ContainerHamburguers } from "@/_components/ContainerHamburguers";
import {Local} from '../_components/Local'
import { useState } from "react";

export default function Home() {

  const [resultados, setResultados] = useState([])
  const buscando = resultados.length > 0 || resultados.searched;

  return (
    <main>
      <Header onBuscar={setResultados}/>
      <ContainerHamburguers resultados={resultados}/>


      {buscando ? (
        <div className='mb-20'></div>
      ) : (
      <div className="flex justify-center mt-10">
        <a href="#" className="text-[1.2rem] text-gray-800 hover:text-red-600">Ver mais </a>
      </div>)
      }

      <Local/>

         
      <footer className= "  w-full bg-red-500 mt-15 py-4 px-10 flex justify-center gap-10 items-center">
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

    </main>
  );
}
      
      

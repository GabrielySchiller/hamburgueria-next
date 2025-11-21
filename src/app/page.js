'use client'

import {Hamburger , WhatsappLogo, InstagramLogo, FacebookLogo} from '@phosphor-icons/react/dist/ssr'
import { Header } from "@/_components/Header";
import { ContainerHamburguers } from "@/_components/ContainerHamburguers";
import {Local} from '../_components/Local'
import { useState } from "react";
import { hamburguers } from '@/data/array-hamburguers'

export default function Home() {
  
  const [search , setSearch] = useState('')
  const [resultados, setResultados] = useState([])
  const [buscou , setBuscou] = useState(false)
  const buscando = resultados.length > 0 || resultados.searched;

  function onBuscar(termo){
    const t = termo.trim().toLowerCase()
    setSearch (termo)

    if(t === ""){
      setResultados([])
      setBuscou(false)
      return
    }

    const filtrados = hamburguers.filter(item => 
      item.name.toLowerCase().includes(t)
    )

    setResultados(filtrados)
    setBuscou(true)
  }

  function onLimparBusca(){
    setResultados([])
    setBuscou(false)
    setSearch('')
  }



  return (
    <main>
      <Header search={search} setSearch={setSearch} onBuscar={() => onBuscar(search)}/>
      <ContainerHamburguers resultados={resultados} buscando={buscou} onLimparBusca={onLimparBusca} />


      {buscando ? (
        <div className='mb-20'></div>
      ) : (
      <div className="flex justify-center mt-10">
        <a href="#" className="text-[1.2rem] text-gray-800 hover:text-red-600">Ver mais </a>
      </div>)
      }

      <Local/>

         
      <footer className= "  w-full bg-red-700 mt-15 py-4 px-10 flex justify-center gap-10 items-center">
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
      
      

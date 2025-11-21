import React from 'react'
import {StarIcon ,  WhatsappLogo , Clock} from '@phosphor-icons/react/dist/ssr'

export function Local() {
  return (
    <div className=' p-4 flex justify-center items-center gap-10  flex-col md:flex-row mt-20'>
        
        <div className='relative w-full max-w-[450px] h-[350px] mx-auto md:mx-0'>
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23990.463710571326!2d-52.36402414573895!3d-31.773839201151226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b5945aa7eb05%3A0x2eaea54de04152e7!2sCentro%2C%20Pelotas%20-%20RS!5e1!3m2!1spt-BR!2sbr!4v1762262003620!5m2!1spt-BR!2sbr" 
             style={{border:0}} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"
             className='w-full h-full block shadow-lg'>
        </iframe>
        </div>
           
          


        <div className='flex justify-center items-center flex-col gap-10 px-4 '>
            <div className='flex flex-col justify-center'> 
              <h2 className='text-[1.6rem] text-red-800 font-bold'>Nosso local</h2>
              <p className='text-gray-800'>Centro , Pelotas | Rio grande do Sul</p>
            </div>

            <div>
                <a className=' shadow-lg w-[200px] flex items-center justify-center rounded-md py-2 gap-3 text-white bg-gray-700' href='#' > WhatsApp <WhatsappLogo className="text-white w-5 h-5"/> </a>
            </div>
           
            <div className='flex   gap-5 flex-col bg-red-700 text-white p-4 rounded-md  shadow-lg'>
                <p className='flex items-center flex-col gap-2'> 
                  <strong className='flex items-center gap-2'> 
                    <Clock className='w-5 h-5'/> 
                     Funcionamento:
                  </strong>
                   De Segunda á Domingo das 18h ás 23h. 
                </p>
                <p className='flex gap-1 items-center text-[1.1rem] font-bold'>Avaliação 4.9 <StarIcon  className='text-yellow-500'/> </p>
            </div>

        </div>
            
    </div>
  )
}


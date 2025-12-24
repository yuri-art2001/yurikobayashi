'use client'
import { useRef } from 'react';
import Link from 'next/link'
import Image from "next/image";



export default function About() {
  const aboutRef = useRef(null);

  return (
    <div className="bg-white w-[100%] sm:p-5 p-10">
      <div className="flex justify-between">

        <div className="relative sm:visible invisible">
          <div className='absolute top-10 sm:top-20 left-15 sm:w-70 sm:h-70 w-55 h-55 rounded-full bg-red-500 flex justify-center items-center'>
          </div>
        </div>

        <div className="sm:mt-40 sm:mr-20 rounded-xl" ref={aboutRef}>
          <div className="flex  flex-col justify-between items-end sm:w-180 sm:h-240 w-[100%] h-300 sm:p-10 p-5  bg-red-500 rounded-xl">
              <p className='text-1xl pt-5 sm:pt-20 sm:text-[18px]  text-[16px] font-sans  text-white'>sou yuri kobayashi, <strong>figurinista</strong>, formada em design de moda, pelo centro universitário belas artes de são paulo. nas minhas criações, mesclo o meu conhecimento da moda com a linguagem do cinema.<br/><br/> 

minha trajetória no audiovisual começou em 2008, entre projetos para cinema, tv e publicidade.<br/><br/>
 
é no figurino que encontro espaço para minha expressão artística, um território onde as histórias, as narrativas e as culturas se entrelaçam para dar vida e camadas aos personagens, criando guarda-roupas que dão corpo ao imaginário.<br/><br/>

em 2018 assinei o meu primeiro longa-metragem, meu álbum de amores, do talentosíssimo rafael gomes. desde então sigo construindo universos visuais autorais em produções de cinema, tv e publicidade.<br/><br/>

em paralelo desenvolvo a umi, acervo independente de roupas vintages e peças singulares voltado para locações de figurino.
</p>
              <Image
                  className="relative sm:left-25 left-0 w-100 h-250 sm:w-100 sm:h-150 pt-5 sm:pt-10 rounded-xl"
                  src="/yuri-about-new.jpeg"
                  alt="yuri kobayashi - figurinista"
                  width={400}
                  height={400}
                  priority
                />
          </div> 
        </div>
      </div>

    </div>
  )
}
'use client'
import Link from 'next/link'
import Image from "next/image";


export default function Footer() {


  return (
    <footer className="bg-white h-60 sm:h-100 overflow-hidden">
      <div className="relative">
        <div className='absolute top-23 sm:top-40 left-7 sm:w-150 sm:h-150 w-80 h-80 flex-col rounded-full bg-red-500 flex justify-center items-center'>
        <ul className="relative sm:-top-45 -top-20  flex justify-center items-center flex-col ">
          <li className="font-bold py-1 text-white">
            <Link target="_blank" href="https://www.linkedin.com/in/yuri-kobayashi-42ab9123/">
              li
            </Link>
          </li>
          <span className='w-[1px] h-4 sm:h-7 bg-white'></span>
          <li className="font-bold py-1 text-white">
            <Link target="_blank" href="https://www.imdb.com/pt/name/nm10666244/">
              imdb
            </Link>
          </li>
          <span className='w-[1px] h-4 sm:h-7  bg-white'></span>
          <li className="font-bold py-1 text-white">
            <Link target="_blank" href="/">
            is
            </Link>
          </li>
        </ul>
        <span className='relative sm:-top-40 -top-22 text-[11px]'>© Copyright 2025 warlei rocha</span>
        </div>
      </div>

      {/* <div className="relative  sm:mr-5">
        <div className="absolute -top-18 sm:-top-56 -right-0 w-60 h-60 sm:w-140 sm:h-140 p-5 rounded-full bg-red-500 flex justify-center items-center ">
            <p className='text-2xl sm:text-4xl font-sans font-bold text-white'>Yuri Kobayashi</p>
            <Image
                className="relative top-21 sm:top-45 right-20 animate-bounce w-16 h-16 sm:w-40 sm:h-40"
                src="/umi-logo.png"
                alt="Next.js logo"
                width={170}
                height={170}
                priority
              />
        </div> 
      </div> */}
  </footer>
  )
}
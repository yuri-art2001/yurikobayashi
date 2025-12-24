'use client'
import Link from 'next/link'
import Image from "next/image";


export default function Header() {


  return (
    <header className="bg-white">
      <nav className="flex justify-between h-50 sm:h-80">
        <div className="relative">
          <div className='absolute -top-10 sm:-top-20 sm:-left-26 -left-20  sm:w-70 sm:h-70 w-50 h-50 rounded-full bg-red-500 flex justify-center items-center'>
          <ul className="relative sm:top-10 top-5  flex justify-center items-center flex-col ">
            <li className="font-bold py-1 text-white">
              <Link target="_blank" className='text-[12px] sm:text-[14px]'  href="https://www.linkedin.com/in/yuri-kobayashi-42ab9123/">
                in
              </Link>
            </li>
            <span className='w-[1px] h-5 sm:h-7 bg-white'></span>
            <li className="font-bold py-1 text-white">
              <Link target="_blank" className='text-[12px] sm:text-[14px]' href="https://www.imdb.com/pt/name/nm10666244/">
                imdb
              </Link>
            </li>
            <span className='w-[1px] h-5 sm:h-7  bg-white'></span>
            <li className="font-bold py-1 text-white ">
              <Link target="_blank" className='text-[12px] sm:text-[14px]' href="/">
                is
              </Link>
            </li>
          </ul>
          </div>
        </div>

        <div className="relative  sm:mr-5">
          <div className="absolute -top-18 sm:-top-72 -right-0 w-60 h-60 sm:w-140 sm:h-140 p-5 rounded-full bg-red-500 flex justify-center items-center ">
            <div className='ml-10 sm:ml-0'>
            <h2 className='text-2xl sm:text-4xl font-sans font-bold text-white sm:mt-28  whitespace-nowrap'>yuri kobayashi</h2>
            <h1>costume designer | figurinista</h1>
            </div> 
              <Image
                  className="relative top-21 sm:top-40 right-20 w-16 h-16 sm:w-30 sm:h-30"
                  src="/umi-logo.png"
                  alt="yuri kobayashi, costume designer"
                  width={100}
                  height={100}
                  priority
                />
          </div> 
        </div>
      </nav>

    </header>
  )
}
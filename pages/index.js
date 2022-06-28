import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)

    handleResize();

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  return (
    <>
      <Layout>
        <div className='px-9 pt-16 font-medium'>
          <div className='flex items-center mb-10'>
            <div className={`flex-1 ${isMobile === true && 'text-center'}`}>
              <h1 className='font-bold text-[80px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-100'>Where Minecraft servers<br /><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-500'>come to life</span>.</h1>
              <p className='text-2xl pt-5'>We&apos;re <span className='font-bold'>Splinter.Host</span>, the same team behind <Link href='https://splinterbot.ml'><a className='underline hover:text-slate-300'>Splinter bot</a></Link>.<br />So we know a thing or two about hosting.</p>
            </div>
            { isMobile === false && <div className='flex-1'>
              <div className="group hover:scale-[1.03] transition bg-[url('../public/callummc.png')] w-[85%] mx-auto h-full bg-cover m-7 rounded-xl shadow-zinc-700/40 shadow-xl hover:shadow-zinc-700/30 flex flex-col">
                <div className='bg-white w-6/12 text-zinc-900 py-2 px-3 rounded -translate-y-5 -translate-x-6 group-hover:-translate-y-7 group-hover:-translate-x-8 transition'>
                  <p className='text-slate-500 flex items-center'>Status <span className='text-sm ml-auto'>4:20 PM</span></p>
                  <h1 className='text-2xl'><FontAwesomeIcon icon={faCheck} className='text-green-500' /> Server online</h1>
                  <hr className='bg-black/25 my-2' />
                  <p className='flex items-center'>
                    <span className='bg-blue-500 text-white py-1 px-2 rounded mx-1 ml-0'>13% CPU</span>
                    <span className='bg-blue-500 text-white py-1 px-2 rounded mx-1 ml-0'>69% RAM</span>
                  </p>
                </div>

                <div className='bg-white w-8/12 text-zinc-900 py-2 px-3 rounded mt-auto ml-auto translate-x-5 translate-y-7 group-hover:translate-y-9 group-hover:translate-x-7 transition'>
                  <p className='text-slate-800 flex items-center text-xl mb-1'>Settings</p>
                  <p className='flex flex-wrap'>
                    <span className='bg-slate-300 text-slate-800 py-1 px-2 rounded mx-1 ml-0'>Overview</span>
                    <span className='bg-slate-300 text-slate-800 py-1 px-2 rounded mx-1 ml-0'>Server</span>
                    <span className='bg-blue-500 text-white py-1 px-2 rounded mx-1 ml-0'>Automation</span>
                  </p>
                  <hr className='bg-black/25 my-2' />
                  <p className='text-slate-500'>CPU & RAM usage</p>
                  <p className='text-lg'>Notify me when CPU usage tips <span className='p-1 bg-slate-200 border-2 border-slate-400 rounded'>70%</span></p>
                </div>
              </div>
            </div> }
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

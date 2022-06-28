import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, {useState, useEffect} from "react"
import { useSession, signIn } from "next-auth/react"

export default function Layout({ children, home }) {
    const { data: session } = useSession()

    const [isMobile, setIsMobile] = useState(false)
    
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    
        handleResize();
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
      }, [isMobile])

    const navlinks = {
        'Why us': '',
        'Team': '',
        'Discord': 'https://discord.gg/PkAP35a6v7'
    }

    return (
        <div>
            <div className="flex py-1 px-10 bg-sky-900 items-center sticky top-0 z-50">
                <Link href='/'>
                    <a className='flex items-center hover:skew-y-2 hover:shadow-2xl hover:shadow-slate-800 transition'>
                        <img
                            src="https://cdn.discordapp.com/icons/983486813102547024/ed5b45bd27ddaef0f298ea695c66672f.png?size=1024"
                            alt="logo"
                            width={50}
                            height={50}
                            className='inline-flex'
                        />
                        <p className='ml-2 text-xl font-bold text-sky-400 p-2 py-1 bg-sky-400/25 rounded'>Splinter.Host</p>
                    </a>
                </Link>
                {isMobile === false && <div className="ml-auto bg-sky-700/60 px-4 py-2 rounded">
                    {Object.keys(navlinks).map(function(key, index) {
                        return <Link href={navlinks[key]}><a className="font-semibold transition rounded hover:bg-sky-500/30 p-2 text-xl">{key}</a></Link>
                    })}
                </div>}
                { session ? <Link href='/dashboard'><a><img src={session.user.image} width={42} height={42} className='inline-flex ml-2 rounded transition hover:scale-[1.1] shadow-md shadow-black/40 hover:shadow-black/20' /></a></Link> : <Link href="/login"><a className='font-sans px-3 py-2 h-full bg-sky-700/70 hover:bg-sky-700/90 rounded text-xl m-1 font-semibold'>Log in</a></Link> }
            </div>
            {children}
        </div>
    )
}
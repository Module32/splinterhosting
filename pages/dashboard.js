import Layout from '../components/Layout'
import Footer from '../components/Footer'
import DashboardMenu from '../components/DashboardMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle, faCircleDot, faClipboard, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect, NavLink} from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false)
  const { data: session, status } = useSession()
 
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

  if (!session) return 'u are unauthenticated'

  const mockServers = [
    {
        name: 'Callum\'s Server',
        id: 'IND-581610266400391218',
        cpu: {
            percentage: 25,
            threshold: 50
        },
        ram: {
            percentage: 30,
            threshold: 25
        },
        status: 'online'
    },
    {
        name: 'Callum & Hurb\'s Server',
        id: 'TEM-529556600072175627',
        cpu: {
            percentage: 55,
            threshold: 50
        },
        ram: {
            percentage: 20,
            threshold: 50
        },
        status: 'online'
    },
    {
        name: 'Callum & Module\'s Server',
        id: 'TEM-804777320123990108',
        cpu: {
            percentage: 0,
            threshold: 50
        },
        ram: {
            percentage: 5,
            threshold: 50
        },
        status: 'offline'
    }
  ]

  return (
    <>
        <Layout>
            <div className='font-medium'>
                <DashboardMenu />
                <div className='px-7 py-4 flex flex-wrap'>
                    {mockServers.length === 0 ? <>
                        <div className='flex flex-col'>
                            <p className='text-xl'>You don&apos;t have any servers yet.</p>
                            <Link href=''><a className='mt-2 ml-auto p-2 bg-sky-600 hover:bg-sky-600/80 rounded w-full flex items-center'>Create a new server <FontAwesomeIcon icon={faArrowRight} className='ml-auto' /></a></Link>
                        </div>
                    </> : mockServers.map(server => {
                        return <Link href={`/servers/${server.id}`}><a className='p-2 border border-slate-300/10 bg-slate-300/5 rounded mx-2 ml-0 my-1 w-[300px] shadow-md shadow-black/50 transition hover:bg-slate-300/10 break-all group'>
                            <button className='text-xs text-gray m-0 p-0 bg-transparent rounded-none hover:text-gray-light' onClick={() => navigator.clipboard.writeText(server.id)}>{server.id} <span className='text-transparent group-hover:text-gray transition'><FontAwesomeIcon icon={faClipboard} /></span></button>
                            <h1 className='text-xl font-semibold mb-2 mt-1 flex'>{server.name}</h1>
                            <div className='text-sm'>
                                <div className='flex'>
                                    <span className={`${server.cpu.percentage > server.cpu.threshold ? 'bg-amber-500' : 'bg-blue-500'} py-1 px-2 rounded mx-1 ml-0`}>{server.cpu.percentage}% CPU</span>
                                    <span className={`${server.ram.percentage > server.ram.threshold ? 'bg-amber-500' : 'bg-blue-500'} py-1 px-2 rounded mx-1 ml-0`}>{server.ram.percentage}% RAM</span>
                                    <span className='bg-slate-500/30 py-1 px-2 rounded mx-1 ml-0'>{server.status === 'online' ? <span><FontAwesomeIcon icon={faCircleDot} className='text-green-500' /> Online</span> : <span><FontAwesomeIcon icon={faCircleDot} className='text-red-500' /> Offline</span> }</span>
                                </div>
                            </div>
                            </a>
                        </Link>
                    })}
                </div>
            </div>
        </Layout>
      <Footer />
    </>
  )
}
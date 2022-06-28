import Layout from '../../../components/Layout'
import Footer from '../../../components/Footer'
import ServerMenu from '../../../components/ServerMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleDot, faMicrochip, faHardDrive} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect, NavLink} from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false)
  const { data: session, status } = useSession()
  const router = useRouter();
  const { id } = router.query;
 
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

  const activeClass = 'py-1 px-2 mx-1 ml-0 border-b-2 border-sky-500';
  const inactiveClass = 'py-1 px-2 mx-1 ml-0 border-b-2 border-slate-300/10 hover:border-slate-300/25 transition'

  const mockServer = {
        name: 'Callum\'s Server',
        id: 'IND-581610266400391218',
        cpu: {
            percentage: 25,
            threshold: 50
        },
        ram: {
            percentage: 30,
            threshold: 25,
            amount: '1GB'
        },
        status: 'online',
        uptime: 100,
        downtime: 5,
    }

  return (
    <>
        <Layout>
            <div className='font-medium'>
                <div className='px-7 pt-4'>
                    <p className='text-gray'>{mockServer.id}</p>
                    <h1 className='text-2xl'>{mockServer.name}</h1>
                </div>
                <ServerMenu id={mockServer.id} />
                <div className='px-7 py-4'>
                    <div className='flex flex-wrap'>
                        <div className='flex flex-wrap flex-col'>
                            <div className='border border-slate-300/10 bg-slate-300/5 shadow-md shadow-black/50 p-3 px-7 rounded ml-0 mx-2 mt-2 w-[250px] text-center'>
                                <h1 className='text-7xl flex items-center justify-center'><FontAwesomeIcon icon={faCircleDot} className='text-4xl mr-3 text-green-500' /> {mockServer.uptime}%</h1>
                                <p className='text-2xl'>Server uptime</p>
                            </div>
                            <div className='border border-slate-300/10 bg-slate-300/5 shadow-md shadow-black/50 p-3 px-7 rounded ml-0 mx-2 mt-2 w-[250px] text-center'>
                                <h1 className='text-7xl flex items-center justify-center'><FontAwesomeIcon icon={faCircleDot} className='text-4xl mr-3 text-red-500' /> {mockServer.downtime}%</h1>
                                <p className='text-2xl'>Server downtime</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap flex-col'>
                            <div className='border border-slate-300/10 bg-slate-300/5 shadow-md shadow-black/50 p-3 px-7 rounded ml-0 mx-2 mt-2 w-[250px] text-center'>
                                <h1 className='text-7xl flex items-center justify-center'><FontAwesomeIcon icon={faMicrochip} className='text-4xl mr-3 text-sky-500' /> {mockServer.cpu.percentage}%</h1>
                                <p className='text-2xl'>CPU usage</p>
                            </div>
                            <div className='border border-slate-300/10 bg-slate-300/5 shadow-md shadow-black/50 p-3 px-7 rounded ml-0 mx-2 mt-2 w-[250px] text-center'>
                                <h1 className='text-7xl flex items-center justify-center'><FontAwesomeIcon icon={faHardDrive} className='text-4xl mr-3 text-sky-500' /> {mockServer.ram.percentage}%</h1>
                                <p className='text-2xl'>RAM usage <span className='text-gray'>|</span> {mockServer.ram.amount}</p>
                            </div>
                        </div>
                        <div className='border border-slate-300/10 bg-slate-300/5 shadow-md shadow-black/50 p-3 px-7 rounded ml-0 mx-2 mt-2'>
                            <p>placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
      <Footer />
    </>
  )
}
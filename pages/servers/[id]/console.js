import Layout from '../../../components/Layout'
import Footer from '../../../components/Footer'
import ServerMenu from '../../../components/ServerMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect, NavLink} from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false)
  const { data: session, status } = useSession()
  const [console, setConsole] = useState([]);
  const router = useRouter();
  const [cmdInput, setCmdInput] = useState("")

  const { id } = router.query;
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  const handleCommandInput = (cmd) => {
    let output = "TODO output API"
    setConsole([...console,
        <span><span className='text-sky-500'>{session.user.name.toLowerCase().split(" ").join("-")}</span>:<span className='text-green-500'>{id.toLowerCase().split(" ").join("-")}</span> ~ $ {cmd}</span>,
        <span>{output}</span>
    ])
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
            threshold: 25
        },
        status: 'online',
        uptime: 100,
        downtime: 5,
    }
    
    const quickCmds = [
        {
            name: 'Change to day',
            desc: 'Changes the time of day to daytime.',
            cmd: '/time set 1000'
        },
        {
            name: 'Example',
            desc: 'test.',
            cmd: '/'
        }
    ]

    const filteredData = quickCmds.filter((el) => {
        if (cmdInput === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(cmdInput)
        }
    })

  return (
    <>
        <Layout>
            <div className='font-medium'>
                <div className='px-7 pt-4'>
                    <p className='text-gray'>{mockServer.id}</p>
                    <h1 className='text-2xl'>{mockServer.name}</h1>
                </div>
                <ServerMenu id={mockServer.id} />
                <div className='font-medium'>
                    <div className={`flex ${isMobile && 'flex-col'} w-11/12 mx-auto`}>
                        <div className='flex-1 mr-3'>
                            <button className={`bg-green-500/20 border-solid border border-green-500 p-2 px-3 w-full rounded mt-4`}>
                                <p className='text-xl'>Start</p>
                            </button>
                            <button className={`bg-slate-500/20 border-solid border border-slate-500 p-2 px-3 w-full rounded`}>
                                <p className='text-xl'>Restart</p>
                            </button>
                            <button className={`bg-red-500/20 border-solid border border-red-500 p-2 px-3 w-full rounded`}>
                                <p className='text-xl'>Stop</p>
                            </button>
                            <hr className='my-2' />
                            <div className={`bg-slate-800/20 border-solid border border-slate-600 p-2 px-3 w-full rounded ml-[4px] mt-3 text-center h-auto flex`}>
                                <div className='flex-1'>
                                    <p className='text-sm'>Inbound</p>
                                    <p className='text-2xl'>30 <span className='text-gray text-base'>KbPs</span></p>
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm'>Outbound</p>
                                    <p className='text-2xl'>25<span className='text-gray text-base'> KbPs</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex-grow ${!isMobile && 'w-8/12'}`}>
                            <div className={`border border-slate-300/30 flex flex-col bg-black/5 p-3 px-5 rounded-t mt-4 font-mono h-56 overflow-y-scroll break-all`}>
                            Connected to Pterodactyl
                            {console.map(value => value)}
                            </div>
                            <div className={`border border-t-0 border-slate-300/30 bg-slate-300/5 shadow-md shadow-black/50 p-2 px-5 w-full mx-auto mb-4 rounded-b flex items-center`}>
                                <span className='py-1 px-2 rounded bg-slate-300/10 border border-slate-300/10 font-mono rounded-r-none border-r-0'>$</span>
                                <input className='py-1 rounded w-full focus:shadow-none mx-0 rounded-l-none font-mono' placeholder='command here' onKeyDown={(e) => e.key === 'Enter' ? handleCommandInput(e.target.value) : null}></input>
                            </div>
                        </div>
                    </div>
                    <div className={`border border-slate-300/30 flex bg-black/5 p-3 px-5 w-[92%] mx-auto rounded my-4 flex-wrap shadow-md shadow-black/50`}>
                        <h1 className='text-lg flex mb-1 items-center'>Quick Commands <input className='py-[1px] text-base ml-2' placeholder="Search for a command" onChange={(e) => setCmdInput(e.target.value)}></input></h1>
                        <div className='basis-full h-0'></div>
                        {filteredData.map(cmd => {
                            return <div className={`p-2 border border-slate-300/10 ${isMobile === true ? 'w-full' : 'w-[300px]' } bg-slate-300/5 rounded mx-2 ml-0 my-1 shadow-md shadow-black/50 transition`}>
                                <div className='flex flex-col'>
                                    <p>{cmd.name}</p>
                                    <p className='text-sm text-gray'>{cmd.desc}</p>
                                    <button className='bg-black/50 mt-1 ml-0 py-1 px-2 font-mono rounded text-left hover:bg-black/30 flex items-center' onClick={() => navigator.clipboard.writeText(cmd.cmd)}>{cmd.cmd} <FontAwesomeIcon icon={faClipboard} className='ml-auto text-gray' /></button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </Layout>
      <Footer />
    </>
  )
}
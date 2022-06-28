import { getProviders, signIn } from "next-auth/react"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function Signup() {
  const { data: session } = useSession();
  let sideCodes = "MPMUUBD3 4C9JB775 FRLU88FB 44WQS5B2 394VZVDU 4KWG4QPN XA6HMD6Y HNRLJYE8 844F4DT2 C59NJNNY W8M96QAA 489SGQJA DYFX8VGM MT5KXMU7 68Z9MEQS 2UC5C3YE 5KJH87MZ 4UEW2M6U CJZH9C22 HC7HFBZM Q3XTD4SZ 4ENXTP5Y MQWH6Z2K Y8BKVS5R 9RUMY8MQ WGDKSCW9 P8BGXYWS KJP3LRER GAA6K35B RWXVWWKA 25UVEFUZ 6NGKK7KE UZWXXE6Z BH8UZV9F 3DXX2S7T PYEXAG6B JDL5CNHM 9VNZMP4H B572C949 QRNB9RTJ DHS9T4E3 P2A8ZM4E JX32ZMMQ GH2TDAFH Z9RYKVFS LDAK7AW9 3EEWF5T3 ZDVLFBRV SZ8A96N4 YMZKNCDW DA8EQ8QY 2BPGHZ8E B3MMQ54W 2DGY39SX P9EJBT24 HMJ638N3 M7Z4PTX5 VH74QS8M CSSXU9EH W2WFKZV5 A67HW5GW NFS4U2W7 BPECMDEB 32VRU434 Z3ZTCGAJ FMKVQUHE R7FDDDDG ZEKZXGL7 AWY2QX9T PHSX5JQS PNTFSBPW 7NV3GVCL GX7HA75D YTEVE93K L9C7ZTNM VZ7ADUB3 Q3GXQLWH NFB4MBCK FG5J65DL E4C5NZJB YWSHXQEX U4GS2VDA NWZWAYDJ QFFFG3HF 3URG55JE WV7UPDBW FZ7N5YDX 79U3DTRZ S4CWPWWV M582V38F BT4AR72Z CDXW5D5Y BKEVXKQY 5HF4BEG8 AU65E6FG NJXV9YCE CD2X4N5K W5XPLBPP CZ4FT5DY 4964TR5Q V3Y6LJHF VCTE9WH4 M9LNRKS9 SUTJP5QB LTZ9YK5D 7TS79UMF RANTUTVY FN3QS5LR AEJK8A8V XTQKX2S6 AFZU5WQQ LUEECQNU URT2BAC6 7FBHZ9QM TKJTS3ZP F7XDLXWM 6AYBGK3Q PH7SS3UH EBD5QDW2 HJVTCW9H MQN24LUV 8CN3HKCN 3P5GZG9Y D2RGLCSN Y6GJZPE3 993BH4WU JBD99A8G DL4ETLZF JSDVJHWB 7CD56NYZ AWY3CRAJ HNGPZEGL 82FKBLGK ZBGMY3GY ZYM6AJL4 QA74U3JC 535EBUW8 KZSEZ2VT 3DVX9YDA SQP9W59R ZTARUVE4 Y9SBYN6Q QYFDHA5M FTE95RBT TEM6NRYY AWBPRVH3 6E8KDJZ5 G28C27DA GRFFP5U5 FEGWNLEG 8NRQJEKE ACMGDVXU 4S5NDSXG TPH9UUHG L6AU3M6C 2R7W3FF4 ZQXMQGTP SJ6A5LH8 4VPM6K6X PAXEZACC KXCQ5V89 MAJ8XEJZ KUBX6DMR A5HFVLQN 7C72HCL2 57BX9PHK SJJ7YG33 68USKQ3W M3YF7N8E 4U6RNVRJ HZU3CGNA WGPACKLH 4A6SK8YB 9BZ2USCY QZGNHSXE LDTT2A2F 4ZLZG4A4 3FXMMYFZ S42E3KQ2 N2KQ278E TTQZL54E HDQV2T3H YRENSZWA XGQL55WX";
  sideCodes = sideCodes.split(" ");
  let finalCodes = []
  sideCodes.map(x => {
    let number = Math.random();
    if (number > 0.5) {
      finalCodes.push(<span className='text-primary mx-1'>{x}</span>)
    } else {
      finalCodes.push(<span className='mx-1'>{x}</span>)
    }
  })

  return (
    <>
      <div className='flex'>
        <div className='flex-1 flex p-4 flex-wrap font-mono text-[1vw] leading-none'>
          
        </div>
        <div className="flex-grow h-screen w-5/12 ">
          <div className="flex-1 lg:px-20 md:px-10 sm:px-5 font-medium h-screen flex flex-col justify-center">
            <div className='mb-5 -translate-x-4'>
            <Link href="/"><a className='px-2 text-xl font-semibold flex items-center'>
            <img
                  src="https://cdn.discordapp.com/icons/983486813102547024/ed5b45bd27ddaef0f298ea695c66672f.png?size=1024"
                  alt="logo"
                  width={40}
                  height={40}
                  className='inline-flex'
            /> <span className='ml-1'>Splinter.Host</span></a></Link></div>
            <h1 className="text-4xl font-bold">👋 Welcome back to Splinter.Host</h1>
            <p className='text-xl my-3 text-gray mb-8'>Sign in through the providers below.</p>
            <div className="flex m-0">
              <button onClick={() => signIn('google')} className="bg-slate-300/10 border border-solid border-zinc-600 hover:bg-slate-300/20 w-full"><FontAwesomeIcon icon={faGoogle} /> Google</button>
              <button onClick={() => signIn('discord')} className="bg-slate-300/10 border border-solid border-zinc-600 hover:bg-slate-300/20 w-full"><FontAwesomeIcon icon={faDiscord} /> Discord</button>
            </div>
            <p className="pt-3 text-gray">Don&apos;t have an account yet? <Link href="/signup"><a className="text-sky-500 hover:text-primary/75">Sign up</a></Link></p>
            <p className='fixed bottom-4 left-4 text-gray text-sm'>©{new Date().getFullYear()} Splinter.Host</p>
          </div>
        </div>
        <div className='flex-1 flex p-4 flex-wrap font-mono text-[1vw] leading-none'>
          
        </div>
      </div>
      { session && <>
            <div className='fixed flex h-screen top-0 w-screen bg-black/30 items-center justify-center'>
              <div className='font-medium w-4/12 rounded border border-zinc-600'>
                <div className='p-3 bg-zinc-800 rounded-t text-center'>
                  <p className='text-2xl'>Welcome back, <span className='font-bold'>{session.user.name}</span></p>
                  <img src={session.user.image} width={160} className='mx-auto mt-3 rounded shadow-xl' />
                  <p className='mt-4 text-gray'>{session.user.email} | You are logged in</p>
                </div>
                <div className='p-3 bg-zinc-900 text-center rounded-b'>
                  <p className='text-lg'>Go to <Link href='/dashboard'><a className='underline underline-offset-1 hover:text-gray'>dashboard</a></Link></p>
                </div>
              </div>
            </div>
      </> }
    </>
  )
}
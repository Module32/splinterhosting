import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from "react"

export default function Footer() {

    const pagesLinks = {
        'Home': '/',
        'Why us': '',
        'Team': '',
        'FAQ': '',
        'Dashboard': '/dashboard'
    }

    const communityLinks = {
        'Discord': 'https://discord.gg/PkAP35a6v7'
    }

    const legalLinks = {
        'ToS': '',
        'Privacy': ''
    }

    return (
        <footer className='border-t border-slate-300/10 p-3 pb-16 px-10'>
            <div className='flex'>
                <div className='flex-1 text-xl text-zinc-500 font-semibold'>
                    <img
                        src="https://cdn.discordapp.com/icons/983486813102547024/ed5b45bd27ddaef0f298ea695c66672f.png?size=1024"
                        alt="logo"
                        width={200}
                        height={200}
                        className='grayscale transition hover:grayscale-0'
                        />
                    <p><span className='text-zinc-300'>Splinter.Host Co, by Callum Knott</span><br />2022-{new Date().getFullYear()}<br />Developed by <Link href='https://openterminal.vercel.app/'><a className='underline underline-offset-2 hover:text-zinc-400'>Open Terminal</a></Link></p>
                </div>
                <div className='flex-1 flex mt-3 justify-end'>
                    <div className='text-lg font-medium flex flex-col'>
                        <p className='text-zinc-300'>Pages</p>
                        {Object.keys(pagesLinks).map(function(key, index) {
                            return <Link href={pagesLinks[key]}><a className='text-zinc-500 hover:text-zinc-400/90'>{key}</a></Link>
                        })}
                    </div>
                    <div className='ml-12 text-lg font-medium flex flex-col'>
                        <p className='text-zinc-300'>Community</p>
                        {Object.keys(communityLinks).map(function(key, index) {
                            return <Link href={communityLinks[key]}><a className='text-zinc-500 hover:text-zinc-400/90'>{key}</a></Link>
                        })}
                        <p className='text-zinc-300 mt-7'>Legal</p>
                        {Object.keys(legalLinks).map(function(key, index) {
                            return <Link href={legalLinks[key]}><a className='text-zinc-500 hover:text-zinc-400/90'>{key}</a></Link>
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
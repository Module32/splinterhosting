import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from "react"
import { useRouter } from 'next/router'

export default function Footer() {
    const router = useRouter();
    const activeClass = 'py-1 px-2 mx-1 ml-0 border-b-2 border-sky-500';
    const inactiveClass = 'py-1 px-2 mx-1 ml-0 border-b-2 border-slate-300/10 hover:border-slate-300/25 transition'

    return (
        <div className='flex items-center text-lg border-b border-slate-300/10 pt-5 px-7'>
            <Link href="/dashboard">
                <a className={router.pathname == "/dashboard" ? activeClass : inactiveClass}>
                    Servers
                </a>
            </Link>
            <Link href="/settings">
                <a className={router.pathname == "/settings" ? activeClass : inactiveClass}>
                    Account settings
                </a>
            </Link>
        </div>
    )
}
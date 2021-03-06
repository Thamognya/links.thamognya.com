import Image from 'next/image'
import { FaLinkedin, FaGithub, FaBlogger } from 'react-icons/fa'

import { SiGitea } from 'react-icons/si'

import { CgWebsite } from 'react-icons/cg'

import { BsFiles } from 'react-icons/bs'
import dynamic from 'next/dynamic'

// change frmo h1 to a to link everything

const LazyLogo = dynamic(() => import('./logo'), {
    ssr: true
})

const Front = () => {
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-2 gap-x-10 place-items-center h-screen">
                <a
                    href="https://links.thamognya.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LazyLogo />
                </a>
                <a
                    href="https://www.thamognya.com"
                    target="_blank"
                    rel="noreferrer"
                    className="py-5 px-8 hover:scale-125 rounded-full bg-zinc-400 bg-opacity-40 flex items-center"
                >
                    <CgWebsite />
                    <h1 className="pl-2">Website</h1>
                </a>
                <a
                    href="https://github.com/Thamognya"
                    target="_blank"
                    rel="noreferrer"
                    className="py-5 px-9 hover:scale-125 rounded-full bg-gray-900 text-slate-50 bg-opacity-75 flex items-center"
                >
                    <FaGithub />
                    <h1 className="pl-2">Github</h1>
                </a>
                <a
                    href="https://git.thamognya.com"
                    target="_blank"
                    rel="noreferrer"
                    className="py-5 px-9 hover:scale-125 rounded-full bg-lime-600 text-slate-50 bg-opacity-75 flex items-center"
                >
                    <SiGitea />
                    <h1 className="pl-2">Gitea</h1>
                </a>
                <a
                    href="https://www.linkedin.com/in/thamognya"
                    target="_blank"
                    rel="noreferrer"
                    className="py-5 px-6 hover:scale-125 rounded-full bg-sky-600 text-slate-50 bg-opacity-75 flex items-center"
                >
                    <FaLinkedin />
                    <h1 className="pl-2">LinkedIn</h1>
                </a>
                <a
                    href="https://blog.thamognya.com"
                    target="_blank"
                    rel="noreferrer"
                    className="py-5 px-10 hover:scale-125 rounded-full bg-violet-600 text-slate-50 bg-opacity-75 flex items-center"
                >
                    <FaBlogger />
                    <h1 className="pl-2">Blog</h1>
                </a>
                <a
                    href="https://www.thamognya.com/cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="py-5 px-14 hover:scale-125 rounded-full bg-red-600 text-slate-50 bg-opacity-75 flex items-center"
                >
                    <BsFiles />
                    <h1 className="pl-2">CV</h1>
                </a>
            </div>
        </>
    )
}

export default Front

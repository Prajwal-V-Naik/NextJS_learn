import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 className='font-semibold text-6xl text-emerald-300'>Hello this NextJS project</h1>
    </main>
  )
}

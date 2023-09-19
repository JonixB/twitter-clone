import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'An app trying to replicate twitter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full flex justify-center items-center relative bg-black text-white">
          <div className="xl:max-w-[70ww] w-full h-full flex relative">
            {children}
          </div>

        </div>

      </body>
    </html>
  )
}

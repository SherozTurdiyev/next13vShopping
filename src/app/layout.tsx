import Navbar from '@/components/Layout/Navbar'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../assets/css/globals.css'

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Shooping',
  description: 'Shopping app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'An app for keep in touch with your tasks',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-emerald-800 via-cyan-800 to-blue-500 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}

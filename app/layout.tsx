import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Ranjith Kumar M.S. — Full Stack Developer & AI Builder',
  description: 'Portfolio of Ranjith Kumar M.S., a Full Stack Developer and MBA student building AI-powered digital products with React, Next.js, Python and modern web technologies.',
  generator: 'v0.app',
  openGraph: {
    title: 'Ranjith Kumar M.S. — Full Stack Developer & AI Builder',
    description: 'Full Stack Development × AI × Business Analytics',
    type: 'website',
  },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#09090b', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${geist.variable} ${geistMono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

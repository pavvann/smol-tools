import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'smol tools',
  description: 'A collection of mini tools to help developers.',
  openGraph: {
    title: 'smol tools',
    description: 'A collection of mini tools to help developers.',
    url: 'https://smoltools.xyz',
    siteName: 'smol tools',
    images: [
      {
        url: '/og-image.png', // Add an OG image if you have one
        width: 1200,
        height: 630,
        alt: 'smol tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'smol tools',
    description: 'A collection of mini tools to help developers.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

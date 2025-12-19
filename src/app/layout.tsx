import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lux Mint - NFT and Token Minting Platform',
  description: 'Mint digital assets on the Lux Network. Create coins, tokens, NFTs, credit cards, and validator passes.',
  keywords: ['Lux', 'Mint', 'NFT', 'Token', 'Blockchain', 'Minting', 'Digital Assets'],
  authors: [{ name: 'Lux Partners Limited', url: 'https://lux.partners' }],
  openGraph: {
    title: 'Lux Mint',
    description: 'NFT and Token Minting Platform on Lux Network',
    url: 'https://mint.lux.network',
    siteName: 'Lux Mint',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}

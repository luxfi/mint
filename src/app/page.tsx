'use client'

import { 
  Coins, 
  CreditCard, 
  CircleDollarSign, 
  Ticket, 
  Award, 
  Shield,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const mintingOptions = [
  {
    name: 'Coin',
    description: 'Mint custom fungible tokens on the Lux Network with configurable supply and tokenomics.',
    href: '/coin/',
    icon: Coins,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Credit',
    description: 'Premium credit products with exclusive benefits. Choose from Black, Elite, Founder, or Sovereign tiers.',
    href: '/credit/',
    icon: CreditCard,
    gradient: 'from-slate-400 to-zinc-600',
  },
  {
    name: 'Gold',
    description: 'Digital gold-backed tokens. Secure, transparent, and fully redeemable.',
    href: '/gold/',
    icon: CircleDollarSign,
    gradient: 'from-yellow-400 to-amber-600',
  },
  {
    name: 'Pass',
    description: 'Access passes and membership NFTs for exclusive communities and events.',
    href: '/pass/',
    icon: Ticket,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Silver',
    description: 'Digital silver-backed tokens. Physical metal backing with blockchain transparency.',
    href: '/silver/',
    icon: Award,
    gradient: 'from-gray-300 to-gray-500',
  },
  {
    name: 'Validator',
    description: 'Become a network validator. Stake and secure the Lux Network while earning rewards.',
    href: '/validator/',
    icon: Shield,
    gradient: 'from-cyan-400 to-blue-600',
  },
]

export default function MintPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/10 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                Lux Network
              </span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Lux Mint
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-neutral-400 sm:text-xl">
              The premier platform for minting digital assets on the Lux Network. 
              Create tokens, NFTs, and secure your place as a network validator.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="#mint-options"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-lg hover:bg-neutral-200 transition-all duration-200"
              >
                Start Minting
              </a>
              <a
                href="https://docs.lux.network"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-700 px-8 py-3 text-sm font-semibold text-white hover:bg-neutral-900 transition-all duration-200"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minting Options Grid */}
      <section id="mint-options" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Asset Type
          </h2>
          <p className="mt-4 text-neutral-400">
            Select from our range of minting options to create your digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mintingOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${option.gradient}`}>
                <option.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                {option.name}
              </h3>
              
              <p className="mt-3 flex-1 text-sm text-neutral-400">
                {option.description}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-white">Fast</div>
              <p className="mt-2 text-sm text-neutral-400">
                Sub-second finality with Lux Network's advanced consensus.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Secure</div>
              <p className="mt-2 text-sm text-neutral-400">
                Post-quantum cryptography ready with multi-chain security.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Low Cost</div>
              <p className="mt-2 text-sm text-neutral-400">
                Minimal gas fees for minting and transferring assets.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Interoperable</div>
              <p className="mt-2 text-sm text-neutral-400">
                Bridge assets across chains with native cross-chain support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-500">
              Lux Partners Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://lux.network" className="text-sm text-neutral-500 hover:text-white transition-colors">
                Lux Network
              </a>
              <a href="https://docs.lux.network" className="text-sm text-neutral-500 hover:text-white transition-colors">
                Docs
              </a>
              <a href="https://github.com/luxfi" className="text-sm text-neutral-500 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

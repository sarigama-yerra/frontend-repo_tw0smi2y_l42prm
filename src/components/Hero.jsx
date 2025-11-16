import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-fuchsia-500/20 via-violet-500/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-600 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-600" />
                Next‑gen Web Design
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Elevate your brand with a playful, modern web experience
              </h1>
              <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl">
                We craft interactive sites that feel alive. Subscribe monthly, cancel anytime. No contracts, no headaches — just world‑class design and development.
              </p>
            </motion.div>

            <motion.div className="mt-8 flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow hover:shadow-lg transition-shadow">
                See Monthly Plans
              </a>
              <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-gray-200 font-semibold">
                Explore Work
              </a>
            </motion.div>

            <motion.div className="mt-6 flex items-center gap-4 text-sm text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=11" alt="client 1" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=22" alt="client 2" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=33" alt="client 3" />
              </div>
              <p>
                Trusted by 120+ startups • Avg. turnaround 48 hours
              </p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative h-[440px] md:h-[560px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

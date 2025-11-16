import { motion } from 'framer-motion'
import { Sparkles, Palette, Layers, Zap } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />, 
    title: 'Interactive by default',
    desc: '3D, motion and micro‑interactions that delight users and drive engagement.'
  },
  {
    icon: <Palette className="h-5 w-5" />, 
    title: 'On‑brand visuals',
    desc: 'We translate your brand into a cohesive digital system and component library.'
  },
  {
    icon: <Layers className="h-5 w-5" />, 
    title: 'Design → Dev',
    desc: 'Design and code in one loop. Faster handoff, higher quality, fewer blockers.'
  },
  {
    icon: <Zap className="h-5 w-5" />, 
    title: 'Fast iterations',
    desc: 'Requests tracked in a shared board. Updates typically in 24–48 hours.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for modern brands</h2>
          <p className="mt-3 text-gray-600">From early startups to scaling teams, we deliver sites that ship fast and scale gracefully.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 flex items-center justify-center text-fuchsia-600">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

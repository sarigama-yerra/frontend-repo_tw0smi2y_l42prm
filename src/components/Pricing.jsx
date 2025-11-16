import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 1499,
    caption: 'Best for pre‑seed and MVPs',
    features: [
      'One request at a time',
      'Landing page or small site',
      'Weekly design/dev sprints',
      'Basic SEO setup'
    ]
  },
  {
    name: 'Growth',
    price: 2999,
    caption: 'For funded startups scaling up',
    featured: true,
    features: [
      'Two requests at a time',
      'Multi‑page marketing site',
      'Advanced animations & 3D',
      'Analytics + A/B testing'
    ]
  },
  {
    name: 'Scale',
    price: 4999,
    caption: 'For teams with ongoing needs',
    features: [
      'Unlimited active requests',
      'Design system + components',
      'Priority support',
      'Quarterly growth review'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple monthly plans</h2>
          <p className="mt-3 text-gray-600">No contracts. Pause or cancel anytime.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl border ${plan.featured ? 'border-fuchsia-400 shadow-fuchsia-200/60' : 'border-gray-200'} bg-white p-6 shadow-sm`}>
              {plan.featured && (
                <div className="absolute -top-3 left-6 px-2 py-1 text-xs font-semibold rounded-full bg-fuchsia-600 text-white shadow">Most popular</div>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{plan.caption}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${plan.price.toLocaleString()}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-fuchsia-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 font-semibold ${plan.featured ? 'bg-gray-900 text-white' : 'border border-gray-200'}`}>Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

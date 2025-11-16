import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-white p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 blur-3xl" />
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to build something delightful?</h3>
            <p className="mt-3 text-gray-600">Tell us about your brand and goals. We’ll reply within 24 hours with a recommended plan and timeline.</p>
            <form className="mt-6 grid gap-3">
              <input type="text" placeholder="Your name" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" />
              <textarea placeholder="What are you looking to create?" rows="4" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/30" />
              <button type="button" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white font-semibold px-5 py-3 hover:shadow-lg transition-shadow">Send inquiry</button>
            </form>
            <p className="mt-3 text-xs text-gray-500">By submitting, you agree to our friendly terms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

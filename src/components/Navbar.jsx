import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/20 rounded-2xl shadow-lg">
          <div className="px-4 py-3 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white shadow-md">
                <Sparkles size={18} />
              </span>
              <span className="font-semibold tracking-tight">Nova Creative</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-gray-700/90 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-sm font-medium px-4 py-2 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">See Plans</a>
              <a href="#contact" className="text-sm font-semibold px-4 py-2 rounded-xl bg-gray-900 text-white shadow hover:shadow-md transition-shadow">Start a Project</a>
            </div>

            <button className="md:hidden p-2 rounded-lg border border-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 animate-in">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm px-3 py-2 rounded-lg hover:bg-black/5">
                    {item.label}
                  </a>
                ))}
                <a href="#pricing" className="text-sm font-medium px-3 py-2 rounded-lg border border-gray-200">See Plans</a>
                <a href="#contact" className="text-sm font-semibold px-3 py-2 rounded-lg bg-gray-900 text-white">Start a Project</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

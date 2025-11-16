import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(240,240,255,1)_0%,rgba(250,250,255,1)_35%,rgba(255,255,255,1)_100%)] text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nova Creative — All rights reserved.
      </footer>
    </div>
  )
}

export default App

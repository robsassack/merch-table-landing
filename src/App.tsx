import { DemoSection } from './components/landing/demo-section'
import { Features } from './components/landing/features'
import { Header } from './components/landing/header'
import { Hero } from './components/landing/hero'
import { HowItWorks } from './components/landing/how-it-works'
import { ProductPreview } from './components/landing/product-preview'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <Hero />
        <Features />
        <ProductPreview />
        <HowItWorks />
        <DemoSection />
      </main>
    </div>
  )
}

export default App

import { DemoSection } from './components/landing/demo-section'
import { Features } from './components/landing/features'
import { Header } from './components/landing/header'
import { Hero } from './components/landing/hero'
import { HowItWorks } from './components/landing/how-it-works'
import { ProductPreview } from './components/landing/product-preview'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
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

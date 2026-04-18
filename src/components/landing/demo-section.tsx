import { ExternalLink, Play } from 'lucide-react'

export function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          
          <div className="relative z-10 p-8 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <Play className="w-6 h-6 text-accent" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                See it in action
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Explore the live demo to see how Merch Table handles everything from browsing releases to completing a purchase.
              </p>
              
              <a
                href="https://demo.merch-table.robsassack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                  Launch Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              
              <p className="text-xs text-muted-foreground mt-4">
                Test mode enabled • No real transactions
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px]" />
        </div>
      </div>
    </section>
  )
}

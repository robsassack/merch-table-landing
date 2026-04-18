import { ArrowRight, ExternalLink } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex items-start justify-center overflow-hidden pt-10 pb-8 md:items-center md:py-0">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
          <span className="text-sm text-muted-foreground">Self-hosted music sales platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">A music store</span>
          <br />
          <span className="text-muted-foreground">you actually own</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Merch Table is a self-hosted digital storefront for independent artists and labels.
          Keep your catalog, your audience, and your revenue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://demo.merch-table.robsassack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Demo
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Tech stack badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {['Stripe Checkout', 'Lossless Audio', 'DRM-Free Files', 'Email Delivery'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-muted-foreground bg-secondary/50 border border-border rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

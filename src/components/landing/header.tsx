import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogoClick = () => {
    if (window.location.hash) {
      const cleanUrl = `${window.location.pathname}${window.location.search}`
      window.history.replaceState(null, '', cleanUrl)
    }
    setMobileMenuOpen(false)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main">
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={handleLogoClick}
          aria-label="Scroll to top"
        >
          <div className="w-8 h-8 rounded bg-foreground flex items-center justify-center">
            <span className="text-background font-bold text-sm">MT</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">Merch Table</span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="https://demo.merch-table.robsassack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Demo
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="https://github.com/robsassack/merch-table"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Github className="mr-2 h-4 w-4" aria-hidden="true" />
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-b border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="https://demo.merch-table.robsassack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://github.com/robsassack/merch-table"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-full items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="mr-2 h-4 w-4" aria-hidden="true" />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

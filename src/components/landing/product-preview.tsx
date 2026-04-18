import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'

const screenshots = [
  {
    id: "storefront",
    label: "Storefront",
    description: "Your public catalog with featured releases and album grid",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontpage-QkDBb40qLbt5FPYO80NJiZCbHWhRfz.jpeg",
  },
  {
    id: "admin",
    label: "Admin Dashboard",
    description: "Manage your store, releases, artists, and orders",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/admin-0Fp1awiE7BUGXLLA01DoveVTBJRmEp.png",
  },
  {
    id: "library",
    label: "Buyer Library",
    description: "Customers access purchases with secure download links",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/library-6Klnhpur4uKrSWOqIl33mfmshkUb5L.png",
  },
]

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState('storefront')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = screenshots.length - 1
    let nextIndex = index

    if (event.key === 'ArrowRight') {
      nextIndex = index === lastIndex ? 0 : index + 1
    } else if (event.key === 'ArrowLeft') {
      nextIndex = index === 0 ? lastIndex : index - 1
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = lastIndex
    } else {
      return
    }

    event.preventDefault()
    const nextTab = screenshots[nextIndex]
    setActiveTab(nextTab.id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            See it in action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A polished experience for you and your customers, from storefront to
            download.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex gap-1 p-1 rounded-lg bg-secondary"
            role="tablist"
            aria-label="Product preview sections"
          >
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                id={`preview-tab-${screenshot.id}`}
                ref={(element) => {
                  tabRefs.current[index] = element
                }}
                type="button"
                role="tab"
                aria-selected={activeTab === screenshot.id}
                aria-controls={`preview-panel-${screenshot.id}`}
                tabIndex={activeTab === screenshot.id ? 0 : -1}
                onClick={() => setActiveTab(screenshot.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === screenshot.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {screenshot.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot Display */}
        <div className="relative">
          {/* Browser Frame */}
          {screenshots.map((screenshot) => (
            <figure
              key={screenshot.id}
              id={`preview-panel-${screenshot.id}`}
              role="tabpanel"
              aria-labelledby={`preview-tab-${screenshot.id}`}
              tabIndex={activeTab === screenshot.id ? 0 : -1}
              hidden={activeTab !== screenshot.id}
              className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl"
            >
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                    merch-table.yourstore.com
                  </div>
                </div>
                <div className="w-12" aria-hidden="true" />
              </div>

              {/* Screenshot */}
              <div className="relative aspect-16/10 bg-background">
                <img
                  src={screenshot.src}
                  alt={`${screenshot.label} view of Merch Table`}
                  loading={activeTab === screenshot.id ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Caption */}
              <figcaption className="text-center text-muted-foreground mt-6 px-6 pb-6">
                {screenshot.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

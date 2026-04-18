import { useState } from 'react'

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
  const activeScreenshot = screenshots.find((s) => s.id === activeTab)

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
          <div className="inline-flex gap-1 p-1 rounded-lg bg-secondary">
            {screenshots.map((screenshot) => (
              <button
                key={screenshot.id}
                onClick={() => setActiveTab(screenshot.id)}
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
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                  merch-table.yourstore.com
                </div>
              </div>
              <div className="w-12" />
            </div>

            {/* Screenshot */}
            <div className="relative aspect-16/10 bg-background">
              {activeScreenshot && (
                <img
                  src={activeScreenshot.src}
                  alt={activeScreenshot.label}
                  className="h-full w-full object-cover object-top"
                />
              )}
            </div>
          </div>

          {/* Caption */}
          {activeScreenshot && (
            <p className="text-center text-muted-foreground mt-6">
              {activeScreenshot.description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

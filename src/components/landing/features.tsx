import {
  Disc3,
  ShoppingCart,
  FileAudio,
  CreditCard,
  Library,
  Cog,
} from "lucide-react";

const features = [
  {
    icon: Disc3,
    title: "Release Catalog Management",
    description:
      "Organize releases, set pricing, and manage your full discography.",
  },
  {
    icon: ShoppingCart,
    title: "Intuitive Storefront",
    description:
      "A clean, customizable storefront built for browsing and buying music.",
  },
  {
    icon: FileAudio,
    title: "Multi-Format Delivery",
    description:
      "Deliver MP3, M4A, and FLAC so fans can choose their preferred format.",
  },
  {
    icon: CreditCard,
    title: "Stripe Checkout",
    description:
      "Secure payments with Stripe and automatic fulfillment after purchase.",
  },
  {
    icon: Library,
    title: "Buyer Library Access",
    description:
      "Each customer gets a personal library with secure re-download links.",
  },
  {
    icon: Cog,
    title: "Background Transcoding",
    description:
      "Generate previews and delivery formats automatically in the background.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Everything you need to sell music
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete toolkit for independent artists and labels who want full control over their digital sales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <feature.icon className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

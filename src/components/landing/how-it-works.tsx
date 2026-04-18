const steps = [
  {
    number: "01",
    title: "Deploy",
    description:
      "Self-host Merch Table on your own infrastructure. No marketplace cut. You only pay payment processor fees. Your data stays yours.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Run the setup wizard to connect Stripe, configure your store details, set up your email provider, and manage your storage.",
  },
  {
    number: "03",
    title: "Upload",
    description:
      "Add your releases with artwork and audio files. The transcode worker automatically generates preview clips and delivery formats.",
  },
  {
    number: "04",
    title: "Sell",
    description:
      "Share your storefront and start selling. Customers pay through Stripe, get a library link sent to their email, and download in their preferred format.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From deployment to your first sale in four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative">
                <span className="text-6xl font-bold text-secondary">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

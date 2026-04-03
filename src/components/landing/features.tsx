import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Gauge, Layers, Palette, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Powered by Vite for instant HMR and optimized production builds. React Compiler for automatic optimization.',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description:
      'Pre-configured shadcn/ui components with Tailwind CSS v4. Dark mode support out of the box.',
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description:
      'Full TypeScript support with strict mode enabled. Catch errors before they reach production.',
  },
  {
    icon: Layers,
    title: 'Component Library',
    description:
      'Access to 50+ beautifully designed, accessible components. Easily customizable to match your brand.',
  },
  {
    icon: Code2,
    title: 'Developer Experience',
    description:
      'ESLint, Prettier, and Git hooks pre-configured. Focus on building features, not setting up tooling.',
  },
  {
    icon: Gauge,
    title: 'Performance First',
    description:
      'Optimized for Core Web Vitals. Automatic code splitting and lazy loading for fast page loads.',
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border/40 bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A carefully curated tech stack that covers all your development needs.
            No more spending hours on configuration.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/50 bg-background/50 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

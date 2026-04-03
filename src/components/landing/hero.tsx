import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 size-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 right-0 size-[600px] rounded-full bg-gradient-to-tl from-primary/15 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="text-muted-foreground">
            New: React 19 with Compiler support
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build modern apps{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            faster than ever
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          A production-ready React template with Vite, TypeScript, Tailwind CSS v4, 
          and shadcn/ui. Everything you need to ship your next project.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto" render={(props) => (
            <Link to="/sign-up" {...props}>
              Get started free
              <ArrowRight data-icon="inline-end" />
            </Link>
          )} />
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Play data-icon="inline-start" />
            Watch demo
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-primary text-xs font-medium text-primary-foreground"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">2,500+</span> developers
            already building with this template
          </p>
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTA() {
  return (
    <section className="border-t border-border/40 bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 size-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 size-1/2 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-white/20">
            <Sparkles className="size-7" />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build something amazing?
          </h2>
          
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Get started with our template today and ship your next project in record time.
            No credit card required.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
              render={(props) => (
                <Link to="/sign-up" {...props}>
                  Start building for free
                  <ArrowRight data-icon="inline-end" />
                </Link>
              )}
            />
            <Button
              size="lg"
              variant="link"
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              View documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

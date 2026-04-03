import { CTA } from '@/components/landing/cta'
import { Features } from '@/components/landing/features'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { Testimonials } from '@/components/landing/testimonials'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

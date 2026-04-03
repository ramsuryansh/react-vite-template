import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Frontend Lead at TechCorp',
    initials: 'SC',
    content:
      'This template saved us weeks of setup time. The shadcn/ui components are beautifully designed and the dark mode works flawlessly. Highly recommended!',
  },
  {
    name: 'Marcus Johnson',
    role: 'Indie Developer',
    initials: 'MJ',
    content:
      "I've tried many React starters but this one stands out. The React Compiler integration gives us incredible performance without any manual optimization.",
  },
  {
    name: 'Elena Rodriguez',
    role: 'CTO at StartupXYZ',
    initials: 'ER',
    content:
      "The developer experience is top-notch. Everything just works out of the box - TypeScript, ESLint, and the build process. It's our go-to template now.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by developers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of developers who are shipping faster with our template.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="relative border-border/50 bg-gradient-to-b from-muted/50 to-background"
            >
              <CardHeader className="pb-4">
                <Quote className="size-8 text-primary/40" />
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

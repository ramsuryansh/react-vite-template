import { ModeToggle } from '@/components/mode-toggle'
import { Link } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  alternateText: string
  alternateLink: string
  alternateLinkText: string
}

export function AuthLayout({
  children,
  title,
  description,
  alternateText,
  alternateLink,
  alternateLinkText,
}: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Form Side */}
      <div className="relative flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">Starter</span>
          </Link>
          <ModeToggle />
        </div>

        {/* Form Container */}
        <div className="flex flex-1 items-center justify-center px-4 pb-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>

            {children}

            <p className="mt-8 text-center text-sm text-muted-foreground">
              {alternateText}{' '}
              <Link
                to={alternateLink}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {alternateLinkText}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Hero Side */}
      <div className="relative hidden overflow-hidden bg-muted lg:block">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative flex h-full flex-col items-center justify-center px-12 py-16">
          <div className="max-w-lg text-center">
            <div className="mx-auto mb-8 flex size-20 items-center justify-center rounded-2xl bg-primary/20">
              <Sparkles className="size-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Start building today
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of developers shipping faster with our production-ready
              React template.
            </p>
          </div>

          {/* Feature badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['React 19', 'TypeScript', 'Tailwind v4', 'shadcn/ui'].map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm font-medium backdrop-blur-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

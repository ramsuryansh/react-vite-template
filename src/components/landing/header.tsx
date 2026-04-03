import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from '@tanstack/react-router'
import { LogIn, Menu, Sparkles, UserPlus } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="size-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">Starter</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />
          <Button variant="ghost" size="sm" render={(props) => (
            <Link to="/sign-in" {...props}>Sign in</Link>
          )} />
          <Button size="sm" render={(props) => (
            <Link to="/sign-up" {...props}>Get started</Link>
          )} />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger render={(props) => (
              <Button variant="ghost" size="icon" {...props}>
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            )} />
            <DropdownMenuContent align="end" sideOffset={8} className="w-48">
              <DropdownMenuGroup>
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.label} render={(props) => (
                    <a href={link.href} {...props}>
                      {link.label}
                    </a>
                  )} />
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem render={(props) => (
                  <Link to="/sign-in" {...props}>
                    <LogIn />
                    Sign in
                  </Link>
                )} />
                <DropdownMenuItem render={(props) => (
                  <Link to="/sign-up" {...props}>
                    <UserPlus />
                    Get started
                  </Link>
                )} />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

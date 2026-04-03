import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className='flex min-h-svh p-6'>
        <div className='flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose'>
          <div className='flex items-center justify-between'>
            <h1 className='font-medium'>Project ready!</h1>
            <ModeToggle />
          </div>
          <div>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className='mt-2'>Button</Button>
          </div>
          <div className='font-mono text-xs text-muted-foreground'>
            Theme switcher is now working!
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/auth/password-input'
import { OAuthButtons } from '@/components/auth/oauth-buttons'

export function SignInForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        // Handle sign in
      }}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </Field>

        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <PasswordInput
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />
        </Field>

        <Field orientation="horizontal">
          <Checkbox id="remember" />
          <FieldLabel htmlFor="remember" className="cursor-pointer">
            Remember me for 30 days
          </FieldLabel>
        </Field>

        <Button type="submit" className="w-full">
          Sign in
        </Button>

        <FieldSeparator>or continue with</FieldSeparator>

        <OAuthButtons />

        <FieldDescription className="text-center">
          By signing in, you agree to our{' '}
          <a href="#">Terms of Service</a> and{' '}
          <a href="#">Privacy Policy</a>.
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}

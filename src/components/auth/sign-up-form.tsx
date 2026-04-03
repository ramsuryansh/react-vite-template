import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/auth/password-input'
import { OAuthButtons } from '@/components/auth/oauth-buttons'

export function SignUpForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        // Handle sign up
      }}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            required
          />
        </Field>

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
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <PasswordInput
            id="password"
            placeholder="Create a password"
            autoComplete="new-password"
            required
          />
          <FieldDescription>Must be at least 8 characters</FieldDescription>
        </Field>

        <Field orientation="horizontal">
          <Checkbox id="terms" required />
          <FieldContent>
            <FieldLabel htmlFor="terms" className="cursor-pointer">
              I agree to the{' '}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </FieldLabel>
          </FieldContent>
        </Field>

        <Button type="submit" className="w-full">
          Create account
        </Button>

        <FieldSeparator>or continue with</FieldSeparator>

        <OAuthButtons />
      </FieldGroup>
    </form>
  )
}

import { AuthLayout } from '@/components/auth/auth-layout'
import { SignUpForm } from '@/components/auth/sign-up-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-up')({
  component: SignUpPage,
})

function SignUpPage() {
  return (
    <AuthLayout
      title="Create an account"
      description="Get started with your free account today"
      alternateText="Already have an account?"
      alternateLink="/sign-in"
      alternateLinkText="Sign in"
    >
      <SignUpForm />
    </AuthLayout>
  )
}

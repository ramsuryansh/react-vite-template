import { AuthLayout } from '@/components/auth/auth-layout'
import { SignInForm } from '@/components/auth/sign-in-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-in')({
  component: SignInPage,
})

function SignInPage() {
  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to your account to continue"
      alternateText="Don't have an account?"
      alternateLink="/sign-up"
      alternateLinkText="Sign up"
    >
      <SignInForm />
    </AuthLayout>
  )
}

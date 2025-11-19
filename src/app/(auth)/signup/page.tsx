'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@/components/ui'
import { AnimatedContainer } from '@/components/ui'
import { Chrome, Mail, Eye, EyeOff, User, Check, X } from 'lucide-react'
import { validatePassword } from '@/lib/utils'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [passwordValidation, setPasswordValidation] = useState({
    isValid: false,
    errors: []
  })
  const router = useRouter()

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    const validation = validatePassword(value)
    setPasswordValidation(validation)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (!passwordValidation.isValid) {
      setError('Please fix the password validation errors')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      if (response.ok) {
        // Automatically sign in after successful signup
        await signIn('credentials', {
          email,
          password,
          redirect: false,
        })
        router.push('/dashboard')
      } else {
        const data = await response.json()
        setError(data.error || 'An error occurred during signup')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      await signIn('google', { callbackUrl: '/dashboard' })
    } catch (error) {
      setError('An error occurred with Google sign in')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neumorphic flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AnimatedContainer animation="fadeInUp" className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-neumorphic flex items-center justify-center">
            <span className="text-white text-2xl font-bold">P</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-foreground">
            Create your PrepAI account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Start your interview preparation journey today
          </p>
        </AnimatedContainer>

        <AnimatedContainer animation="fadeInUp" delay={0.1}>
          <Card variant="neumorphic" className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  label="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  leftIcon={<User className="h-4 w-4" />}
                />

                <Input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  leftIcon={<Mail className="h-4 w-4" />}
                />

                <Input
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  placeholder="Create a strong password"
                  required
                  leftIcon={<Eye className="h-4 w-4" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  }
                />

                {password && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600">Password requirements:</p>
                    <div className="space-y-1">
                      {[
                        'At least 8 characters long',
                        'Contains uppercase letter',
                        'Contains lowercase letter',
                        'Contains number',
                        'Contains special character'
                      ].map((requirement) => (
                        <div
                          key={requirement}
                          className="flex items-center text-xs"
                        >
                          {passwordValidation.errors.includes(requirement) ? (
                            <X className="h-3 w-3 text-red-500 mr-1" />
                          ) : (
                            <Check className="h-3 w-3 text-green-500 mr-1" />
                          )}
                          <span
                            className={
                              passwordValidation.errors.includes(requirement)
                                ? 'text-red-500'
                                : 'text-green-500'
                            }
                          >
                            {requirement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  label="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  error={confirmPassword && password !== confirmPassword ? 'Passwords do not match' : ''}
                  leftIcon={<Eye className="h-4 w-4" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  }
                />

                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  loading={loading}
                  disabled={loading || !passwordValidation.isValid || password !== confirmPassword}
                >
                  {loading ? 'Creating account...' : 'Create Account'}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-neumorphic text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="neumorphic"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full"
                  leftIcon={<Chrome className="h-4 w-4" />}
                >
                  Continue with Google
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/signin" className="text-primary-600 hover:text-primary-500 font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedContainer>
      </div>
    </div>
  )
}
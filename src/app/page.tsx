'use client'

import Link from 'next/link'
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui'
import { AnimatedContainer, StaggeredContainer, StaggeredChild } from '@/components/ui'
import {
  Brain,
  Code2,
  BarChart3,
  Users,
  Target,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  MessageCircle,
  Terminal,
  TrendingUp
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI Interview Trainer',
      description: 'Practice realistic interviews with AI-powered question generation and personalized feedback.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code2,
      title: 'DSA Practice',
      description: 'Master data structures and algorithms with interactive coding challenges and AI explanations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed insights, accuracy metrics, and improvement suggestions.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const stats = [
    { value: '1000+', label: 'Interview Questions' },
    { value: '500+', label: 'Coding Problems' },
    { value: '50+', label: 'Companies' },
    { value: '95%', label: 'Success Rate' }
  ]

  const benefits = [
    'Personalized AI feedback',
    'Real-time interview simulation',
    'Comprehensive code editor',
    'Progress tracking & analytics',
    'Resume analysis & optimization',
    'Mobile-friendly experience'
  ]

  return (
    <div className="min-h-screen bg-neumorphic">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-neumorphic/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-neumorphic flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">PrepAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedContainer className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Powered by Advanced AI Technology
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Ace Your
              <span className="gradient-text"> Technical Interviews</span>
              <br />
              with AI-Powered Preparation
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your interview preparation with realistic AI simulations,
              interactive coding challenges, and personalized feedback from industry experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-8 py-4" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/auth/signin">
                <Button variant="neumorphic" size="lg" className="text-lg px-8 py-4">
                  Sign In
                </Button>
              </Link>
            </div>
          </AnimatedContainer>

          {/* Stats */}
          <AnimatedContainer animation="fadeInUp" delay={0.2} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} variant="neumorphic" className="text-center py-6">
                  <CardContent>
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedContainer className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to help you master every aspect of technical interviews.
            </p>
          </AnimatedContainer>

          <StaggeredContainer className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <StaggeredChild key={index}>
                <Card variant="neumorphic" hover className="h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-neumorphic flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/auth/signup">
                      <Button variant="ghost" className="w-full justify-between" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </StaggeredChild>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedContainer animation="slideInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose PrepAI?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines cutting-edge AI technology with proven interview strategies
                to give you the competitive edge you need.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/auth/signup">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </AnimatedContainer>

            <AnimatedContainer animation="slideInRight">
              <div className="grid grid-cols-2 gap-6">
                <Card variant="neumorphic" className="text-center p-6">
                  <MessageCircle className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <div className="font-bold text-2xl text-foreground mb-1">24/7</div>
                  <div className="text-sm text-gray-600">AI Assistant</div>
                </Card>
                <Card variant="neumorphic" className="text-center p-6">
                  <Terminal className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
                  <div className="font-bold text-2xl text-foreground mb-1">15+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </Card>
                <Card variant="neumorphic" className="text-center p-6">
                  <Target className="w-8 h-8 text-success-500 mx-auto mb-3" />
                  <div className="font-bold text-2xl text-foreground mb-1">100%</div>
                  <div className="text-sm text-gray-600">Goal Oriented</div>
                </Card>
                <Card variant="neumorphic" className="text-center p-6">
                  <TrendingUp className="w-8 h-8 text-warning-500 mx-auto mb-3" />
                  <div className="font-bold text-2xl text-foreground mb-1">3x</div>
                  <div className="text-sm text-gray-600">Faster Progress</div>
                </Card>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedContainer>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of candidates who have transformed their interview skills with PrepAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button variant="neumorphic" size="lg" className="text-lg px-8 py-4">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neumorphic border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-neumorphic flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold text-foreground">PrepAI</span>
              </div>
              <p className="text-gray-600">
                Empowering candidates with AI-driven interview preparation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/interview" className="hover:text-primary-500">AI Interview Trainer</Link></li>
                <li><Link href="/practice" className="hover:text-primary-500">DSA Practice</Link></li>
                <li><Link href="/dashboard" className="hover:text-primary-500">Analytics</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-primary-500">About</Link></li>
                <li><Link href="/blog" className="hover:text-primary-500">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-primary-500">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/help" className="hover:text-primary-500">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-primary-500">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-primary-500">Privacy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 PrepAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

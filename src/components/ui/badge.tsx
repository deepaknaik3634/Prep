'use client'

import { motion } from 'framer-motion'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neumorphic'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200',
      {
        'bg-primary-100 text-primary-800 border border-primary-200':
          variant === 'primary',
        'bg-secondary-100 text-secondary-800 border border-secondary-200':
          variant === 'secondary',
        'bg-success-100 text-success-800 border border-success-200':
          variant === 'success',
        'bg-warning-100 text-warning-800 border border-warning-200':
          variant === 'warning',
        'bg-error-100 text-error-800 border border-error-200':
          variant === 'error',
        'bg-blue-100 text-blue-800 border border-blue-200':
          variant === 'info',
        'neumorphic px-3 py-1 text-sm': variant === 'neumorphic',
        'px-2 py-1 text-xs': size === 'sm' && variant !== 'neumorphic',
        'px-3 py-1 text-sm': size === 'md' && variant !== 'neumorphic',
        'px-4 py-2 text-base': size === 'lg' && variant !== 'neumorphic',
      },
      className
    )

    return (
      <motion.span
        ref={ref}
        className={baseClasses}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
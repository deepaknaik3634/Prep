'use client'

import { motion } from 'framer-motion'
import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { scaleButton, neumorphicHover, neumorphicPress } from '@/lib/animations'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neumorphic'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center font-medium rounded-neumorphic transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      {
        'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500':
          variant === 'primary',
        'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500':
          variant === 'secondary',
        'border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50 focus:ring-primary-500':
          variant === 'outline',
        'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500':
          variant === 'ghost',
        'neumorphic-button': variant === 'neumorphic',
      },
      {
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-4 py-2 text-sm': size === 'md',
        'px-6 py-3 text-base': size === 'lg',
        'px-8 py-4 text-lg': size === 'xl',
      },
      {
        'w-full': fullWidth,
        'opacity-50 cursor-not-allowed': disabled || loading,
      },
      className
    )

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    )

    if (variant === 'neumorphic') {
      return (
        <motion.button
          ref={ref}
          className={baseClasses}
          variants={neumorphicPress}
          initial="initial"
          whileHover="hover"
          whileTap="press"
          disabled={disabled || loading}
          {...props}
        >
          {content}
        </motion.button>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        variants={scaleButton}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
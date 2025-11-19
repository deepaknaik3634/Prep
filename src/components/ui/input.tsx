'use client'

import { forwardRef, InputHTMLAttributes, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { neumorphicHover } from '@/lib/animations'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      error,
      leftIcon,
      rightIcon,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false)
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`

    const inputClasses = cn(
      'neumorphic-inset w-full px-4 py-3 text-foreground placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200',
      {
        'pl-10': leftIcon,
        'pr-10': rightIcon,
        'pl-10 pr-10': leftIcon && rightIcon,
        'ring-2 ring-red-500 ring-offset-2 ring-offset-neumorphic': error,
      },
      className
    )

    const containerClasses = cn('relative w-full', {
      'text-red-500': error,
    })

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}

        <motion.div
          className={containerClasses}
          variants={neumorphicHover}
          initial="initial"
          whileHover="hover"
        >
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            type={type}
            ref={ref}
            className={inputClasses}
            onFocus={(e) => {
              setFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setFocused(false)
              props.onBlur?.(e)
            }}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {rightIcon}
            </div>
          )}
        </motion.div>

        {(error || helperText) && (
          <p className={cn('text-sm', error ? 'text-red-500' : 'text-gray-500')}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
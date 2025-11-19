'use client'

import { motion } from 'framer-motion'
import { forwardRef, HTMLAttributes, ReactNode, useState } from 'react'
import React from 'react'
import { cn } from '@/lib/utils'
import { getInitials } from '@/lib/utils'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  fallback?: string
  children?: ReactNode
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt = '',
      size = 'md',
      fallback,
      children,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false)

    const sizeClasses = {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-16 w-16 text-xl',
      '2xl': 'h-20 w-20 text-2xl',
    }

    const handleImageError = () => {
      setImageError(true)
    }

    const showFallback = !src || imageError

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center rounded-full neumorphic overflow-hidden',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {showFallback ? (
          <span className="font-medium text-foreground uppercase">
            {fallback || (alt && getInitials(alt))}
          </span>
        ) : (
          <motion.img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={handleImageError}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {children}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  max?: number
  spacing?: 'sm' | 'md' | 'lg'
}

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      className,
      children,
      max = 5,
      spacing = 'md',
      ...props
    },
    ref
  ) => {
    const spacingClasses = {
      sm: '-space-x-2',
      md: '-space-x-3',
      lg: '-space-x-4',
    }

    const avatarCount = React.Children.count(children)
    const visibleAvatars = avatarCount > max ? max : avatarCount
    const hiddenAvatars = avatarCount > max ? avatarCount - max : 0

    return (
      <div
        ref={ref}
        className={cn('flex items-center', spacingClasses[spacing], className)}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (index >= visibleAvatars) return null
          return React.cloneElement(child as React.ReactElement, {
            className: cn('ring-2 ring-neumorphic', (child as React.ReactElement).props.className),
          })
        })}
        {hiddenAvatars > 0 && (
          <div
            className={cn(
              'flex items-center justify-center rounded-full neumorphic ring-2 ring-neumorphic',
              spacingClasses[spacing].split('-')[1] === '2' ? 'h-8 w-8 text-sm' :
              spacingClasses[spacing].split('-')[1] === '3' ? 'h-10 w-10 text-base' :
              'h-12 w-12 text-lg'
            )}
          >
            <span className="font-medium text-foreground">+{hiddenAvatars}</span>
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'

export { Avatar, AvatarGroup }
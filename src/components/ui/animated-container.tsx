'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeInUp, fadeIn, scaleIn, slideInLeft, slideInRight } from '@/lib/animations'

interface AnimatedContainerProps extends MotionProps {
  children: ReactNode
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight'
  delay?: number
  className?: string
}

const animationVariants = {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight
}

export const AnimatedContainer = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  ...props
}: AnimatedContainerProps) => {
  const variants = animationVariants[animation]

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ ...variants.animate.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation container for lists
interface StaggeredContainerProps extends MotionProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export const StaggeredContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
  ...props
}: StaggeredContainerProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered child component
export const StaggeredChild = ({
  children,
  className = '',
  ...props
}: MotionProps & { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0]
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
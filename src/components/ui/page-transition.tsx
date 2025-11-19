'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { pageTransition } from '@/lib/animations'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Layout wrapper for page transitions
interface AnimatedLayoutProps {
  children: ReactNode
  className?: string
}

export const AnimatedLayout = ({ children, className = '' }: AnimatedLayoutProps) => {
  return (
    <AnimatePresence mode="wait">
      <PageTransition className={className}>
        {children}
      </PageTransition>
    </AnimatePresence>
  )
}
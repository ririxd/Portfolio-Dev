import { motion, useAnimation, useReducedMotion } from 'motion/react'
import { useCallback } from 'react'

function LinkedinIcon({ size = 28, duration = 1, isAnimated = true, color = 'currentColor' }) {
  const controls = useAnimation()
  const reducedMotion = useReducedMotion()

  const startAnimation = useCallback(() => {
    if (isAnimated && !reducedMotion) controls.start('animate')
  }, [controls, isAnimated, reducedMotion])

  return (
    <motion.span
      className="linkedin-icon"
      aria-hidden="true"
      onMouseEnter={startAnimation}
      onFocus={startAnimation}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={controls}
        initial="normal"
        variants={{
          normal: { scale: 1 },
          animate: {
            scale: [1, 1.08, 1],
            transition: { duration: 0.45 * duration, ease: 'easeOut' },
          },
        }}
      >
        <motion.path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: {
              pathLength: [0.3, 1],
              opacity: [0.6, 1],
              transition: { duration: 0.6 * duration, ease: 'easeInOut' },
            },
          }}
        />
        <motion.rect
          width="4"
          height="12"
          x="2"
          y="9"
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              transition: {
                duration: 0.45 * duration,
                delay: 0.12 * duration,
                ease: 'easeInOut',
              },
            },
          }}
        />
        <motion.circle
          cx="4"
          cy="4"
          r="2"
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              transition: {
                duration: 0.45 * duration,
                delay: 0.12 * duration,
                ease: 'easeInOut',
              },
            },
          }}
        />
      </motion.svg>
    </motion.span>
  )
}

export default LinkedinIcon
